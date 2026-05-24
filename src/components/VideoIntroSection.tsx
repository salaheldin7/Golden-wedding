import { useEffect, useState } from 'react';

export default function VideoIntroSection() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    if (typeof navigator === 'undefined') {
      return;
    }

    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const prefersReducedData = connection?.saveData === true;
    const slowConnection = ['slow-2g', '2g'].includes(connection?.effectiveType ?? '');

    if (prefersReducedData || slowConnection) {
      setShowVideo(false);
    }
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #120204 0%, #f594a6 60%, #22060c 100%)',
      }}
    >
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/home.mp4"
          poster="/videos/home-poster.jpg"
          style={{ filter: 'saturate(1.05) brightness(0.82) contrast(1.08)' }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setShowVideo(false)}
        />
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/home-poster.jpg"
          alt="Karim and Nada invitation background"
          style={{ filter: 'saturate(1.05) brightness(0.82) contrast(1.08)' }}
          loading="eager"
          decoding="async"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(12, 2, 4, 0.45) 0%, rgba(18, 5, 9, 0.25) 50%, rgba(24, 6, 11, 0.6) 100%)',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <LogoMark />
          <p className="mt-6 text-[13px] sm:text-xs tracking-[0.35em] uppercase font-serif-elegant text-[#c0c0c0]/95 font-semibold">
            Scroll to continue
          </p>
          
          {/* Explicitly colored, un-bugged Arabic text */}
          <p
            className="mt-2 text-[14px] sm:text-base font-sans tracking-[0.1em] antialiased font-semibold"
            style={{ 
              color: '#c0c0c0', 
              opacity: 0.95,
              fontFamily: 'inherit' /* Fallback over rule-breaking custom font */
            }}
            dir="rtl"
          >
            اسحب للاستمرار
          </p>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  return (
    <div
      className="relative translate-y-4 sm:translate-y-6"
      style={{ isolation: 'isolate' }}
    >
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.25) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(12px)',
        }}
      />
      <img
        src="/logo/logo2.PNG"
        alt="Karim and Nada monogram"
        className="h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] object-contain"
        style={{
          opacity: 0.7,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 24px 60px rgba(0,0,0,0.45))',
        }}
      />
    </div>
  );
}