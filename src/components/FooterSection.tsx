import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer
      className="relative py-9 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f2e5d4 0%, #ead7bf 100%)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/logo/footer%20red.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.25,
          filter: 'sepia(0.35) saturate(0.75) brightness(1.15)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(247,240,230,0.88) 0%, rgba(236,220,198,0.92) 100%)',
        }}
      />
      {/* Floral border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent opacity-40" />

      <div className="max-w-md mx-auto text-center relative z-10 -translate-y-16 sm:-translate-y-20">
        <div className="mb-1 relative top-6 sm:top-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/logo/logo2.PNG"
              alt="Karim and Nada monogram"
              className="mx-auto w-24 sm:w-28 opacity-85"
            />
          </motion.div>
        </div>

        <motion.p
          className="font-cinzel text-xs tracking-widest lux-text-soft uppercase mt-9 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          21/8/2026 · Cairo, Egypt
        </motion.p>

        <motion.div
          className="golden-divider w-32 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        <motion.p
          className="font-arabic text-2xl lux-text-muted mb-2"
          dir="rtl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          بارك الله لهما وبارك عليهما
        </motion.p>

        <motion.p
          className="font-serif-elegant italic lux-text-faint text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          May Allah bless them both and bestow His blessings upon them
        </motion.p>
      </div>

      {/* Bottom floral */}
      <div className="absolute bottom-0 left-0 right-0 h-8 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 48" preserveAspectRatio="xMidYMid slice">
          <path d="M0 0 Q200 48 400 24 Q600 0 800 24" stroke="#c9a96e" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </footer>
  );
}
