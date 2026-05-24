import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer
      className="relative py-9 px-6 min-h-[520px] sm:min-h-[600px] overflow-hidden"
      style={{
        backgroundImage: 'url(/logo/footer%20red.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Floral border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent opacity-85" />

      <div className="max-w-md mx-auto text-center relative z-10 -translate-y-16 sm:-translate-y-20">
        <motion.p
          className="font-cinzel text-sm sm:text-base font-semibold tracking-widest lux-text-soft uppercase mt-14 sm:mt-16 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          21/8/2026 · Cairo, Egypt
        </motion.p>

        <div className="mb-1 relative top-2 sm:top-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/logo/logo2.PNG"
              alt="Karim and Nada monogram"
              className="mx-auto w-24 sm:w-28"
            />
          </motion.div>
        </div>

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
