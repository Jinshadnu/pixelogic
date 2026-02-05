type StrapiFetchOptions = {
  path: string;
  query?: Record<string, string | number | boolean | undefined>;
  token?: string;
  next?: RequestInit['next'];
};

function buildUrl(baseUrl: string, path: string, query?: StrapiFetchOptions['query']) {
  const url = new URL(path.replace(/^\//, ''), baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined) continue;
      url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

export async function strapiFetch<T>({ path, query, token, next }: StrapiFetchOptions): Promise<T> {
  const baseUrl = process.env.STRAPI_URL;
  if (!baseUrl) {
    throw new Error('STRAPI_URL is not set');
  }

  const url = buildUrl(baseUrl, path, query);

  const res = await fetch(url, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Strapi request failed: ${res.status} ${res.statusText}${text ? ` - ${text}` : ''}`);
  }

  return (await res.json()) as T;
}

export function isStrapiEnabled() {
  return process.env.NEXT_PUBLIC_USE_STRAPI === 'true';
}
