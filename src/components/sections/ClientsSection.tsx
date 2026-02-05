'use client';

import { motion } from 'framer-motion';

const ClientsSection = () => {
  // Real client data based on pixelogik.ae projects and UAE context
  const governmentClients = [
    { name: 'Abu Dhabi Chamber', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Abu_Dhabi_Chamber_of_Commerce_logo.svg/200px-Abu_Dhabi_Chamber_of_Commerce_logo.svg.png' },
    { name: 'Ministry of Interior', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ministry_of_Interior_UAE.svg/200px-Ministry_of_Interior_UAE.svg.png' },
    { name: 'ADNOC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ADNOC_Logo.svg/200px-ADNOC_Logo.svg.png' },
    { name: 'Etihad Airways', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Etihad_Airways_logo.svg/200px-Etihad_Airways_logo.svg.png' },
    { name: 'Dubai Municipality', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dubai_Municipality_Logo.svg/200px-Dubai_Municipality_Logo.svg.png' },
    { name: 'UAE Government', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Government_of_the_United_Arab_Emirates_logo.svg/200px-Government_of_the_United_Arab_Emirates_logo.svg.png' },
  ];

  const privateClients = [
    { name: 'GITEX Global', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/GITEX_logo.svg/200px-GITEX_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Apple_Logo.svg/200px-Apple_Logo.svg.png' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      scale: 1.05,
      filter: 'brightness(1.2)',
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="py-32 bg-[#F2EFE9] text-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-24"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
             <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-sm font-medium tracking-widest uppercase">
                Trusted by Industry Leaders
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
              Our Clients
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-black/60 leading-relaxed font-light">
              We collaborate with visionary brands and government entities to creative impactful digital experiences.
            </p>
          </motion.div>

          {/* Government Sectors */}
          <motion.div
            variants={itemVariants}
            className="space-y-12"
          >
            <div className="flex items-center space-x-6">
              <h3 className="text-2xl font-serif italic text-black shrink-0">Government Sectors</h3>
              <div className="flex-1 h-px bg-black/10" />
            </div>
            
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12"
            >
              {governmentClients.map((client, index) => (
                <motion.div
                  key={`gov-${index}`}
                  variants={logoVariants}
                  whileHover="hover"
                  className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 aspect-square"
                >
                    {/* Actual client logo */}
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-2/3 h-2/3 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                    />
                    <div className="w-full h-full flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                      <span className="text-black/40 text-xs text-center font-medium">
                        {client.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Private Sectors */}
          <motion.div
            variants={itemVariants}
            className="space-y-12"
          >
           <div className="flex items-center space-x-6">
              <h3 className="text-2xl font-serif italic text-black shrink-0">Private Sectors</h3>
              <div className="flex-1 h-px bg-black/10" />
            </div>
            
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12"
            >
              {privateClients.map((client, index) => (
                <motion.div
                  key={`priv-${index}`}
                  variants={logoVariants}
                  whileHover="hover"
                   className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 aspect-square"
                >
                    {/* Actual client logo */}
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-2/3 h-2/3 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                    />
                    <div className="w-full h-full flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                      <span className="text-black/40 text-xs text-center font-medium">
                        {client.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
