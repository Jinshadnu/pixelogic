'use client';

import { motion } from 'framer-motion';

const HomeIntro = () => {
  return (
    <section className="py-24 bg-[#F2EFE9] text-black border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              At <span className="text-emerald-600">Pixelogik Media & Advertising</span>, we transform ideas into powerful <span className="font-serif italic font-normal">visual narratives.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-black/70 leading-relaxed font-light">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
             >
              <p>
                As a leading media production company in Abu Dhabi, we specialize in video production and photography, crafting corporate films, event coverage, commercials, and branded content that leave a lasting impact.
              </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
             >
                <p>
                    With a keen eye for detail and a passion for storytelling, we deliver high-quality, fast-turnaround visual solutions that elevate brands across the Middle East. From capturing corporate milestones and trade shows to creating compelling brand visuals, our expertise ensures your brand makes a lasting impression.
                </p>
                <p className="font-serif italic text-2xl text-black">
                    Pixelogik – where creativity meets precision to shape unforgettable brand stories.
                </p>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
