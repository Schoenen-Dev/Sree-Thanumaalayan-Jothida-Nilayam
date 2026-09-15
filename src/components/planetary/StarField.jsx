import React, { useMemo } from 'react';
/**
 * Lightweight decorative star field. Renders a fixed number of small dots
 * with randomized (but memoized) positions. Uses only opacity/transform for
 * any animation so it stays GPU-friendly. Also supports moving/shooting stars.
 */
export default function StarField({
  count = 90,
  reducedMotion = false,
  className = '',
  showShootingStars = true
}) {
  const stars = useMemo(() => {
    return Array.from({
      length: count
    }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.6,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 3,
      isWarm: i % 4 === 0 // subtle golden/warm tint on some stars
    }));
  }, [count]);

  // Moving shooting stars across the cosmic canvas
  const shootingStars = useMemo(() => {
    return [{
      id: 1,
      top: '12%',
      left: '85%',
      delay: '1s',
      duration: '6s'
    }, {
      id: 2,
      top: '28%',
      left: '70%',
      delay: '4s',
      duration: '8s'
    }, {
      id: 3,
      top: '48%',
      left: '92%',
      delay: '7s',
      duration: '7s'
    }, {
      id: 4,
      top: '75%',
      left: '60%',
      delay: '3.5s',
      duration: '9s'
    }];
  }, []);
  return <div className={`star-field-container ${className}`} aria-hidden="true">
      <svg className="star-field" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {stars.map(s => <circle key={s.id} cx={s.x} cy={s.y} r={s.size / 10} fill={s.isWarm ? 'var(--color-amber-200, #fef08a)' : 'var(--color-cream-50, #fefce8)'} opacity={0.6} style={reducedMotion ? undefined : {
        animation: `star-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
      }} />)}
      </svg>

      {/* Moving / Shooting Stars */}
      {!reducedMotion && showShootingStars && <div className="shooting-stars-layer">
          {shootingStars.map(ss => <div key={ss.id} className="shooting-star" style={{
        top: ss.top,
        left: ss.left,
        animationDelay: ss.delay,
        animationDuration: ss.duration
      }} />)}
        </div>}
    </div>;
}