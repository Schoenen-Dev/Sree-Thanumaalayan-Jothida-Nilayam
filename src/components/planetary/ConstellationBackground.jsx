import React, { useMemo } from 'react';
export default function ConstellationBackground({
  reducedMotion = false
}) {
  // Random twinkling stars in background
  const randomStars = useMemo(() => {
    return Array.from({
      length: 90
    }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: Math.random() * 3 + 2.5,
      delay: Math.random() * 5,
      color: i % 5 === 0 ? '#38bdf8' : i % 7 === 0 ? '#fbbf24' : '#f8fafc'
    }));
  }, []);

  // Pre-defined celestial constellation figures resembling Orion, Ursa Major, Cassiopeia, etc.
  const constellations = useMemo(() => {
    return [
    // Constellation 1: Top Left (Aries / Andromeda style)
    {
      stars: [[12, 18], [18, 14], [25, 17], [29, 24], [22, 28], [15, 25]],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 4]]
    },
    // Constellation 2: Top Right (Cassiopeia / Pegasus style)
    {
      stars: [[75, 15], [82, 12], [88, 19], [94, 16], [85, 26]],
      connections: [[0, 1], [1, 2], [2, 3], [1, 4], [2, 4]]
    },
    // Constellation 3: Bottom Left (Scorpius / Centaurus style)
    {
      stars: [[10, 72], [16, 78], [22, 85], [18, 92], [26, 90], [30, 80], [24, 73]],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [6, 1]]
    },
    // Constellation 4: Bottom Right (Leo / Orion style)
    {
      stars: [[78, 76], [84, 70], [90, 75], [86, 85], [76, 88], [82, 80]],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 5], [3, 5]]
    }];
  }, []);
  return <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Deep cosmic teal nebula radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,36,54,0.65)_0%,rgba(5,19,30,0.85)_45%,rgba(2,8,14,0.98)_100%)]" />

      {/* Constellations and stars SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Subtle glow filter for constellation nodes */}
          <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Constellation lines */}
        {constellations.map((c, cIdx) => <g key={`constellation-${cIdx}`} opacity={0.32}>
            {c.connections.map(([fromIdx, toIdx], lIdx) => {
          const from = c.stars[fromIdx];
          const to = c.stars[toIdx];
          return <line key={`line-${cIdx}-${lIdx}`} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke="#38bdf8" strokeWidth={0.18} strokeDasharray="0.8 0.4" />;
        })}
            {c.stars.map(([x, y], sIdx) => <circle key={`cstar-${cIdx}-${sIdx}`} cx={x} cy={y} r={0.45} fill="#7dd3fc" filter="url(#star-glow)" />)}
          </g>)}

        {/* Twinkling ambient stars */}
        {randomStars.map(star => <circle key={star.id} cx={star.x} cy={star.y} r={star.size / 14} fill={star.color} opacity={0.6} style={reducedMotion ? undefined : {
        animation: `star-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`
      }} />)}
      </svg>
    </div>;
}