import { useState, useEffect } from 'react';
import { ChevronUp, Lock } from 'lucide-react';

interface PhoneLockScreenProps {
  onUnlock: () => void;
  isLocked: boolean;
}

export const PhoneLockScreen = ({ onUnlock, isLocked }: PhoneLockScreenProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeProgress, setSwipeProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientY;
    const diff = touchStart - currentTouch;
    if (diff > 0) {
      setSwipeProgress(Math.min(diff, 150));
    }
  };

  const handleTouchEnd = () => {
    if (swipeProgress > 100) {
      onUnlock();
    }
    setSwipeProgress(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStart) {
      const diff = touchStart - e.clientY;
      if (diff > 0) {
        setSwipeProgress(Math.min(diff, 150));
      }
    }
  };

  const handleMouseUp = () => {
    if (swipeProgress > 100) {
      onUnlock();
    }
    setSwipeProgress(0);
    setTouchStart(0);
  };

  if (!isLocked) return null;

  return (
    <div className="absolute inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-between py-16 px-6 rounded-[2.5rem]"
         style={{
           backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=800&fit=crop)',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
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
          className="relative w-32 h-12 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center cursor-pointer touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
