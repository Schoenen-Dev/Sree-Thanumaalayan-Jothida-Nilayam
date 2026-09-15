import React, { useState, useEffect } from 'react';
import ConstellationBackground from './ConstellationBackground';
import ZodiacDial from './ZodiacDial';
import ArmillarySphere3D from './ArmillarySphere3D';
import './PlanetarySystem.css';
function AstrolabeFlare() {
  return <div className="astrolabe-flare" style={{
    top: '28%',
    left: '53%',
    width: '140px',
    height: '140px',
    transform: 'translate(-50%, -50%)'
  }} aria-hidden="true">
      <div className="astrolabe-flare__halo" />
      <div className="astrolabe-flare__streak" />
      <div className="astrolabe-flare__streak-vert" />
      <div className="astrolabe-flare__core" />
    </div>;
}
export default function PlanetarySystem({
  rotation: externalRotation,
  zodiacRotation: externalZodiacRotation,
  scale = 1,
  showZodiac = true,
  reducedMotion = false,
  size = 850,
  autoAnimate = true,
  className = ''
}) {
  // State for tracking continuous automatic rotation degrees
  const [zodiacDeg, setZodiacDeg] = useState(0);
  useEffect(() => {
    if (reducedMotion || !autoAnimate) return;
    let animationFrameId;
    const animate = () => {
      // Increase 0.15 to make it rotate faster, or lower it to slow it down
      setZodiacDeg(prev => (prev + 0.03) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reducedMotion, autoAnimate]);
  const activeZodiacDeg = externalZodiacRotation !== undefined ? externalZodiacRotation : zodiacDeg;
  return <div className={`planetary-system relative w-full h-full overflow-hidden flex items-center justify-center ${className}`} aria-hidden="true">
      <ConstellationBackground reducedMotion={reducedMotion} />

      <div className="relative flex items-center justify-center pointer-events-none lg:translate-x-[40%]" style={{
      width: `${size}px`,
      height: `${size}px`,
      maxWidth: '100%',
      maxHeight: '100%',
      aspectRatio: '1 / 1',
      transform: `scale(${scale})`,
      transition: reducedMotion ? 'none' : 'transform 400ms var(--ease-standard)'
    }}>
        {/* Automatic Rotating Golden Zodiac Dial */}
        {showZodiac && <ZodiacDial rotationDeg={activeZodiacDeg} size={size} reducedMotion={reducedMotion} />}

        {/* 3D Armillary Sphere (Rotating automatically in 3D) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-90">
          <ArmillarySphere3D reducedMotion={reducedMotion} size={Math.round(size * 0.65)} rotationSpeed={0.5} />
        </div>

        <AstrolabeFlare />
      </div>
    </div>;
}