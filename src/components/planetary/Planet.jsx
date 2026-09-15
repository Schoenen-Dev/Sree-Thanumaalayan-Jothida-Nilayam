import React from 'react';
/**
 * Individual orbiting celestial body positioned along its orbit ring.
 */
export default function Planet({
  planet,
  angleDeg,
  highlighted = false,
  reducedMotion = false
}) {
  const rad = angleDeg * Math.PI / 180;
  const cx = Math.cos(rad) * planet.orbitRadius;
  const cy = Math.sin(rad) * planet.orbitRadius;
  const radius = planet.size / 2;
  return <g transform={`translate(${cx}, ${cy})`} className={`celestial-planet celestial-planet--${planet.id} ${highlighted ? 'is-highlighted' : ''}`} style={{
    transition: reducedMotion ? 'none' : 'transform 200ms ease-out'
  }}>
      <title>{planet.tamilName} - {planet.name}</title>

      {/* Outer ambient glow */}
      <circle r={radius + 4} fill={planet.color} opacity={highlighted ? 0.45 : 0.15} className={highlighted && !reducedMotion ? 'planet-glow-pulse' : undefined} />

      {/* Highlight ring if active */}
      {highlighted && <circle r={radius + 7} fill="none" stroke={planet.strokeColor || '#fbbf24'} strokeWidth={1.5} strokeDasharray="2 2" opacity={0.8} />}

      {/* Planet Sphere */}
      <circle r={radius} fill={planet.color} stroke={planet.strokeColor || 'rgba(255, 255, 255, 0.4)'} strokeWidth={1} opacity={0.95} />

      {/* Astrological Symbol */}
      <text textAnchor="middle" dy="0.34em" fontSize={Math.max(10, radius * 0.95)} fill="#0c0a09" fontWeight="bold" className="select-none pointer-events-none">
        {planet.symbol}
      </text>

      {/* Subtle label underneath */}
      <text textAnchor="middle" y={radius + 12} fontSize={9} fill="rgba(254, 243, 199, 0.85)" fontFamily="sans-serif" className="select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        {planet.name}
      </text>
    </g>;
}