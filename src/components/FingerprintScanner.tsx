import fingerprintImage from '@/assets/fingerprint.png';

export const FingerprintScanner = () => {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      <img 
        src={fingerprintImage} 
        alt="Fingerprint" 
        className="w-full h-full object-contain opacity-80"
      />
    </div>
  );
};
