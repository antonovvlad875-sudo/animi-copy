import { useEffect, useState } from 'react';
import fingerprintImage from '@/assets/fingerprint.png';

export const FingerprintScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (isScanning) {
        setScanProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 0.8;
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Auto-start scanning after 1 second
    const startTimeout = setTimeout(() => {
      setIsScanning(true);
      
      // Stop scanning after 3 seconds
      const stopTimeout = setTimeout(() => {
        setIsScanning(false);
        setScanProgress(0);
      }, 3500);

      return () => clearTimeout(stopTimeout);
    }, 1000);

    // Restart cycle every 6 seconds
    const cycleInterval = setInterval(() => {
      setIsScanning(true);
      setScanProgress(0);
      
      setTimeout(() => {
        setIsScanning(false);
        setScanProgress(0);
      }, 3500);
    }, 6000);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(startTimeout);
      clearInterval(cycleInterval);
    };
  }, [isScanning]);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-2xl transition-opacity duration-500 ${isScanning ? 'opacity-100' : 'opacity-50 animate-pulse'}`} />
      </div>

      {/* Fingerprint image */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <img 
          src={fingerprintImage} 
          alt="Fingerprint" 
          className="w-full h-full object-contain filter brightness-0 invert"
          style={{
            filter: isScanning 
              ? 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(375%) hue-rotate(130deg) brightness(95%) contrast(92%)'
              : 'brightness(0) saturate(100%) invert(56%) sepia(84%) saturate(375%) hue-rotate(130deg) brightness(90%) contrast(85%) opacity(0.4)'
          }}
        />
        
        {/* Scanning line overlay */}
        {isScanning && (
          <div 
            className="absolute left-0 right-0 h-12 pointer-events-none"
            style={{
              top: `${scanProgress}%`,
              background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0) 0%, rgba(6, 182, 212, 0.6) 30%, rgba(6, 182, 212, 0.9) 50%, rgba(6, 182, 212, 0.6) 70%, rgba(6, 182, 212, 0) 100%)',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)',
              transition: 'top 0.1s linear'
            }}
          >
            {/* Bright scan line */}
            <div 
              className="absolute left-0 right-0 h-0.5 top-1/2 -translate-y-1/2"
              style={{
                background: 'rgba(6, 182, 212, 1)',
                boxShadow: '0 0 10px rgba(6, 182, 212, 1), 0 0 20px rgba(6, 182, 212, 0.8)'
              }}
            />
          </div>
        )}
        
        {/* Pulsing ring when not scanning */}
        {!isScanning && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-52 h-52 rounded-full border-2 border-cyan-400/30 animate-pulse" 
                 style={{ 
                   boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' 
                 }} 
            />
          </div>
        )}
      </div>

      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
      <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-lg" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg" />
    </div>
  );
};