import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-[100svh] sm:min-h-[140vh] flex flex-col items-center justify-start relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fbf6ee 0%, #f2e5d4 55%, #ead7bf 100%)',
      }}
    >

      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/logo/hero.JPG)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center -10px',
          backgroundSize: '100% 105%',
          opacity: 0.9,
          filter: 'brightness(1) saturate(1)',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-lg mx-auto"
        style={{ paddingTop: '315px', paddingBottom: '12px' }}
        initial={{ opacity: 0, y: -220 }}
        animate={{ opacity: 1, y: -15 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Invitation lines */}
        <motion.p
          className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] uppercase lux-text-soft"
          style={{ marginTop: '-80px', marginBottom: '6px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          PLEASE JOIN US FOR THE
        </motion.p>

        <motion.p
          className="font-calligraphy lux-text-gold"
          style={{
            fontSize: 'clamp(38px, 10vw, 72px)',
            lineHeight: '0.95',
            marginBottom: '6px',
            textShadow: '0 10px 28px rgba(31, 5, 9, 0.22), 0 2px 6px rgba(255, 255, 255, 0.35)',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          Wedding
        </motion.p>

        <motion.p
          className="font-cinzel tracking-[0.3em] lux-text-soft uppercase"
          style={{ fontSize: 'clamp(10px, 3vw, 14px)', marginBottom: '6px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          OF
        </motion.p>

        <motion.p
          className="font-cinzel tracking-[0.28em] lux-text-soft uppercase"
          style={{ fontSize: 'clamp(12px, 3.6vw, 18px)', marginBottom: '10px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          KARIM & NADA
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="golden-divider w-36 sm:w-44"
          style={{ marginTop: '8px', marginBottom: '12px' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Center logo */}
        <motion.div
          className="-translate-y-2 sm:-translate-y-3"
          style={{ marginBottom: '10px' }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.9, type: 'spring', damping: 14 }}
        >
          <img
            src="/logo/logo2.PNG"
            alt="Karim and Nada monogram"
            style={{ width: 'clamp(46px, 11vw, 80px)' }}
            className="opacity-70 mx-auto"
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="golden-divider w-48 sm:w-60"
          style={{ marginBottom: '12px' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        />

        {/* Date row */}
        <motion.div
          className="flex w-full items-center justify-center gap-3 sm:gap-5"
          style={{ marginBottom: '10px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span
            className="font-script lux-text-muted"
            style={{ fontSize: 'clamp(17px, 5.2vw, 27px)' }}
          >
            August
          </span>

          <div className="text-center px-3 border-l border-r border-[rgba(201,169,110,0.35)]">
            <span
              className="font-cinzel lux-text font-light"
              style={{ fontSize: 'clamp(23px, 7vw, 35px)' }}
            >
              21
            </span>
          </div>

          <span
            className="font-script lux-text-muted"
            style={{ fontSize: 'clamp(17px, 5.2vw, 27px)' }}
          >
            2026
          </span>
        </motion.div>

        {/* Time */}
        <motion.p
          className="font-cinzel text-xs tracking-[0.3em] lux-text-faint uppercase"
          style={{ marginBottom: '10px' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          7:00 PM
        </motion.p>

        {/* Location */}
        <motion.div
          style={{ marginBottom: '14px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <p
            className="font-serif-elegant tracking-widest uppercase lux-text-soft"
            style={{ fontSize: 'clamp(9px, 2.5vw, 13px)' }}
          >
            The Westin Cairo Golf Resort and Spa
          </p>

          <p
            className="font-arabic arabic-gold normal-case mt-1"
            style={{ fontSize: 'clamp(11px, 3vw, 15px)' }}
            dir="rtl"
          >
            القاهرة · فندق ويستن كايرو
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="font-serif-elegant text-xs tracking-widest lux-text-faint uppercase">
            scroll to explore
          </span>

          <motion.div
            className="w-px h-6 bg-gradient-to-b from-[#c9a96e]/70 to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom floral border */}
      <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-18 pointer-events-none z-0">
        <BottomFloralBorder />
      </div>
    </section>
  );
}

function BottomFloralBorder() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 800 96"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <path
        d="M0 96 Q100 60 200 80 Q300 96 400 70 Q500 44 600 70 Q700 96 800 80 L800 96 Z"
        fill="url(#bottomGrad)"
        opacity="0.15"
      />
      {[80, 200, 320, 480, 600, 720].map((x, i) => (
        <g key={i} transform={`translate(${x}, 50)`}>
          <circle cx="0" cy="-10" r="8" fill="#c9a96e" opacity="0.2" />
          <circle cx="-8" cy="0" r="6" fill="#c9a96e" opacity="0.15" />
          <circle cx="8" cy="0" r="6" fill="#c9a96e" opacity="0.15" />
          <rect x="-1" y="0" width="2" height="20" fill="#c9a96e" opacity="0.2" />
          <ellipse cx="-6" cy="12" rx="6" ry="3" transform="rotate(-30 -6 12)" fill="#c9a96e" opacity="0.15" />
          <ellipse cx="6" cy="12" rx="6" ry="3" transform="rotate(30 6 12)" fill="#c9a96e" opacity="0.15" />
        </g>
      ))}
      <defs>
        <linearGradient id="bottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0" />
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}