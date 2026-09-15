import React from 'react';
const ZODIAC_SIGNS = [{
  id: 'aries',
  symbol: '♈',
  name: 'Aries',
  tamil: 'மேஷம்'
}, {
  id: 'taurus',
  symbol: '♉',
  name: 'Taurus',
  tamil: 'ரிஷபம்'
}, {
  id: 'gemini',
  symbol: '♊',
  name: 'Gemini',
  tamil: 'மிதுனம்'
}, {
  id: 'cancer',
  symbol: '♋',
  name: 'Cancer',
  tamil: 'கடகம்'
}, {
  id: 'leo',
  symbol: '♌',
  name: 'Leo',
  tamil: 'சிம்மம்'
}, {
  id: 'virgo',
  symbol: '♍',
  name: 'Virgo',
  tamil: 'கன்னி'
}, {
  id: 'libra',
  symbol: '♎',
  name: 'Libra',
  tamil: 'துலாம்'
}, {
  id: 'scorpio',
  symbol: '♏',
  name: 'Scorpio',
  tamil: 'விருச்சிகம்'
}, {
  id: 'sagittarius',
  symbol: '♐',
  name: 'Sagittarius',
  tamil: 'தனுசு'
}, {
  id: 'capricorn',
  symbol: '♑',
  name: 'Capricorn',
  tamil: 'மகரம்'
}, {
  id: 'aquarius',
  symbol: '♒',
  name: 'Aquarius',
  tamil: 'கும்பம்'
}, {
  id: 'pisces',
  symbol: '♓',
  name: 'Pisces',
  tamil: 'மீனம்'
}];
export default function ZodiacWheel({
  radius,
  rotationDeg = 0,
  reducedMotion = false
}) {
  const innerRadius = radius - 26;
  const glyphRadius = radius - 13;
  return <g className="zodiac-wheel" transform={`rotate(${rotationDeg})`} style={{
    // Switched from 500ms ease-out to 50ms linear for ultra-smooth fast motion
    transition: reducedMotion ? 'none' : 'transform 50ms linear',
    willChange: 'transform'
  }}>
      {/* Outer rim */}
      <circle cx={0} cy={0} r={radius} fill="none" stroke="rgba(245, 215, 130, 0.35)" strokeWidth={1.5} />

      {/* Inner rim */}
      <circle cx={0} cy={0} r={innerRadius} fill="none" stroke="rgba(245, 215, 130, 0.25)" strokeWidth={1} />

      {/* 12 Sector Dividers and Glyphs */}
      {ZODIAC_SIGNS.map((sign, index) => {
      const dividerAngle = index * 30;
      const dividerRad = dividerAngle * Math.PI / 180;
      const x1 = Math.cos(dividerRad) * innerRadius;
      const y1 = Math.sin(dividerRad) * innerRadius;
      const x2 = Math.cos(dividerRad) * radius;
      const y2 = Math.sin(dividerRad) * radius;
      const centerAngle = dividerAngle + 15;
      const centerRad = centerAngle * Math.PI / 180;
      const gx = Math.cos(centerRad) * glyphRadius;
      const gy = Math.sin(centerRad) * glyphRadius;
      return <g key={sign.id} className="zodiac-sector">
            {/* Divider Line */}
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(245, 215, 130, 0.28)" strokeWidth={1} />

            {/* Zodiac Glyph */}
            <text x={gx} y={gy} textAnchor="middle" dy="0.35em" fontSize={14} fill="rgba(254, 240, 138, 0.85)" fontWeight="bold" className="select-none pointer-events-none" transform={`rotate(${centerAngle + 90}, ${gx}, ${gy})`}>
              {sign.symbol}
            </text>
          </g>;
    })}
    </g>;
}