import { useState, useEffect, useRef } from 'react';
import { ChevronUp, Lock } from 'lucide-react';

interface PhoneLockScreenProps {
  onUnlock: () => void;
  isLocked: boolean;
}

export const PhoneLockScreen = ({ onUnlock, isLocked }: PhoneLockScreenProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [swipeProgress, setSwipeProgress] = useState(0);
  const startYRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      
      const diff = startYRef.current - e.clientY;
      if (diff > 0) {
        setSwipeProgress(Math.min(diff, 150));
      }
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        if (swipeProgress > 80) {
          onUnlock();
        }
        isDraggingRef.current = false;
        setSwipeProgress(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [swipeProgress, onUnlock]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', { 
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    setSwipeProgress(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    startYRef.current = e.touches[0].clientY;
    setSwipeProgress(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    
    const diff = startYRef.current - e.touches[0].clientY;
    if (diff > 0) {
      setSwipeProgress(Math.min(diff, 150));
    }
  };

  const handleTouchEnd = () => {
    if (swipeProgress > 80) {
      onUnlock();
    }
    isDraggingRef.current = false;
    setSwipeProgress(0);
  };

  if (!isLocked) return null;

  return (
    <div className="absolute inset-0 z-50 bg-gradient-to-br from-emerald-900 via-lime-900 to-emerald-800 flex flex-col items-center justify-between py-16 px-6 rounded-[2.5rem]"
         style={{
           backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(132, 204, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
         }}>
      {/* Brand Logo/Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-2">
          <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400">
            Fin X
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto rounded-full opacity-60"></div>
        </div>
      </div>
      {/* Top status bar */}
      <div className="w-full flex justify-between items-center text-white text-xs">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
        <div className="flex items-center gap-1">
          <span>100%</span>
          <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
            <rect x="0" y="0" width="18" height="12" rx="2" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.3"/>
            <rect x="1.5" y="1.5" width="15" height="9" rx="1" fill="white"/>
            <rect x="19" y="4" width="2" height="4" rx="1" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Time and Date */}
      <div className="flex flex-col items-center gap-2">
        <div className="text-white text-6xl font-light tracking-tight">
          {formatTime(currentTime)}
        </div>
        <div className="text-white/80 text-sm font-medium capitalize">
          {formatDate(currentTime)}
        </div>
      </div>

      {/* Lock icon and swipe indicator */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <Lock className="w-4 h-4" />
          <span>FinX</span>
        </div>
        
        {/* Swipe up indicator */}
        <div 
          className="relative w-32 h-12 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex flex-col items-center transition-transform duration-200"
            style={{ transform: `translateY(-${swipeProgress / 3}px)` }}
          >
            <ChevronUp className="w-6 h-6 text-white/80" />
            <span className="text-white/60 text-xs mt-1">
              {swipeProgress > 80 ? 'Отпустите' : 'Проведите вверх'}
            </span>
          </div>
          
          {/* Progress indicator */}
          {swipeProgress > 0 && (
            <div 
              className="absolute bottom-0 left-0 h-1 bg-emerald-400 rounded-full transition-all"
              style={{ width: `${(swipeProgress / 150) * 100}%` }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
