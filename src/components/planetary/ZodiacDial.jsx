import React from 'react';
const ZODIAC_ITEMS = [{
  id: 'aries',
  name: 'Aries',
  tamil: 'மேஷம்',
  symbol: '♈',
  roman: 'I',
  angle: 0
}, {
  id: 'taurus',
  name: 'Taurus',
  tamil: 'ரிஷபம்',
  symbol: '♉',
  roman: 'II',
  angle: 30
}, {
  id: 'gemini',
  name: 'Gemini',
  tamil: 'மிதுனம்',
  symbol: '♊',
  roman: 'III',
  angle: 60
}, {
  id: 'cancer',
  name: 'Cancer',
  tamil: 'கடகம்',
  symbol: '♋',
  roman: 'IV',
  angle: 90
}, {
  id: 'leo',
  name: 'Leo',
  tamil: 'சிம்மம்',
  symbol: '♌',
  roman: 'V',
  angle: 120
}, {
  id: 'virgo',
  name: 'Virgo',
  tamil: 'கன்னி',
  symbol: '♍',
  roman: 'VI',
  angle: 150
}, {
  id: 'libra',
  name: 'Libra',
  tamil: 'துலாம்',
  symbol: '♎',
  roman: 'VII',
  angle: 180
}, {
  id: 'scorpio',
  name: 'Scorpio',
  tamil: 'விருச்சிகம்',
  symbol: '♏',
  roman: 'VIII',
  angle: 210
}, {
  id: 'sagittarius',
  name: 'Sagittarius',
  tamil: 'தனுசு',
  symbol: '♐',
  roman: 'IX',
  angle: 240
}, {
  id: 'capricorn',
  name: 'Capricorn',
  tamil: 'மகரம்',
  symbol: '♑',
  roman: 'X',
  angle: 270
}, {
  id: 'aquarius',
  name: 'Aquarius',
  tamil: 'கும்பம்',
  symbol: '♒',
  roman: 'XI',
  angle: 300
}, {
  id: 'pisces',
  name: 'Pisces',
  tamil: 'மீனம்',
  symbol: '♓',
  roman: 'XII',
  angle: 330
}];

/**
 * High-definition ornate golden Astrolabe Zodiac Dial matching the reference image:
 * Features outer constellation titles ("Aries", "Taurus"...), large golden astrological glyphs,
 * Roman numerals (I - XII), fine degree ticks, and concentric brass bands rotating round and round.
 */
export default function ZodiacDial({
  rotationDeg = 0,
  size = 800,
  reducedMotion = false
}) {
  const half = size / 2;
  const outerR = half - 70;
  const nameR = outerR - 22;
  const glyphR = outerR - 58;
  const romanR = outerR - 92;
  const innerR = outerR - 110;

  // Generate 72 fine measurement ticks (every 5 degrees)
  const ticks = Array.from({
    length: 72
  }, (_, i) => {
    const deg = i * 5;
    const isMajor = deg % 30 === 0;
    const isMedium = deg % 10 === 0;
    const rad = deg * Math.PI / 180;
    const rStart = isMajor ? outerR - 8 : isMedium ? outerR - 5 : outerR - 3;
    return {
      id: i,
      x1: Math.cos(rad) * rStart,
      y1: Math.sin(rad) * rStart,
      x2: Math.cos(rad) * outerR,
      y2: Math.sin(rad) * outerR,
      strokeWidth: isMajor ? 1.5 : 0.75,
      opacity: isMajor ? 0.9 : isMedium ? 0.6 : 0.35
    };
  });
  return <svg viewBox={`0 0 ${size} ${size}`} className="zodiac-dial-svg absolute inset-0 w-full h-full pointer-events-none select-none" style={{
    transform: `rotate(${rotationDeg}deg)`,
    // Change transition to 'none' when auto-animating via requestAnimationFrame
    transition: 'none',
    willChange: 'transform'
  }} aria-hidden="true">
      <defs>
        {/* Rich metallic gold gradient matching the antique brass astrolabe */}
        <linearGradient id="gold-dial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#eab308" />
          <stop offset="50%" stopColor="#fef9c3" />
          <stop offset="75%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>

        <linearGradient id="gold-radial-sheen" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="rgba(234, 179, 8, 0)" />
          <stop offset="85%" stopColor="rgba(253, 224, 71, 0.12)" />
          <stop offset="100%" stopColor="rgba(202, 138, 4, 0.25)" />
        </linearGradient>

        <filter id="gold-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform={`translate(${half}, ${half})`}>
        {/* Ambient golden background fill for the dial ring */}
        <circle cx={0} cy={0} r={outerR} fill="url(#gold-radial-sheen)" />

        {/* Outer Ring Border */}
        <circle cx={0} cy={0} r={outerR} fill="none" stroke="url(#gold-dial-gradient)" strokeWidth={2.2} />
        <circle cx={0} cy={0} r={outerR - 2} fill="none" stroke="rgba(254, 240, 138, 0.4)" strokeWidth={0.7} />

        {/* 72 Degree Measurement Ticks */}
        {ticks.map(t => <line key={`tick-${t.id}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="url(#gold-dial-gradient)" strokeWidth={t.strokeWidth} opacity={t.opacity} />)}

        {/* Ring separating Constellation Names & Glyphs */}
        <circle cx={0} cy={0} r={outerR - 38} fill="none" stroke="url(#gold-dial-gradient)" strokeWidth={1.2} opacity={0.8} />

        {/* Ring separating Glyphs & Roman Numerals */}
        <circle cx={0} cy={0} r={outerR - 78} fill="none" stroke="url(#gold-dial-gradient)" strokeWidth={1} strokeDasharray="2 3" opacity={0.65} />

        {/* Inner rim border */}
        <circle cx={0} cy={0} r={innerR} fill="none" stroke="url(#gold-dial-gradient)" strokeWidth={2} filter="url(#gold-glow-filter)" />

        {/* 12 Sector Dividers & Content */}
        {ZODIAC_ITEMS.map((item, idx) => {
        const dividerAngle = idx * 30;
        const dividerRad = dividerAngle * Math.PI / 180;
        const dx1 = Math.cos(dividerRad) * innerR;
        const dy1 = Math.sin(dividerRad) * innerR;
        const dx2 = Math.cos(dividerRad) * outerR;
        const dy2 = Math.sin(dividerRad) * outerR;

        // Mid-angle for this 30° sector
        const midAngle = dividerAngle + 15;
        return <g key={item.id} className="zodiac-sector-group">
              {/* Radial divider line */}
              <line x1={dx1} y1={dy1} x2={dx2} y2={dy2} stroke="url(#gold-dial-gradient)" strokeWidth={1.2} opacity={0.7} />

              {/* 1. Outer Constellation Name (e.g. "Aries", "Pisces"...) */}
              <g transform={`rotate(${midAngle}) translate(0, -${nameR})`}>
                <text textAnchor="middle" dy="0.32em" fontSize={13} fontFamily="'Cinzel', 'Times New Roman', serif" fontWeight="600" letterSpacing="0.08em" fill="#fef08a" filter="url(#gold-glow-filter)" className="select-none pointer-events-none">
                  {item.name}
                </text>
              </g>

              {/* 2. Middle Large Ornate Astrological Glyph (♈, ♉...) */}
              <g transform={`rotate(${midAngle}) translate(0, -${glyphR})`}>
                <text textAnchor="middle" dy="0.35em" fontSize={24} fontWeight="bold" fill="#fef9c3" filter="url(#gold-glow-filter)" className="select-none pointer-events-none">
                  {item.symbol}
                </text>
              </g>

              {/* 3. Inner Roman Numeral (I, II, III...) */}
              <g transform={`rotate(${midAngle}) translate(0, -${romanR})`}>
                <text textAnchor="middle" dy="0.35em" fontSize={10.5} fontFamily="'Cinzel', serif" fontWeight="bold" fill="#eab308" opacity={0.9} className="select-none pointer-events-none">
                  {item.roman}
                </text>
              </g>
            </g>;
      })}
      </g>
    </svg>;
}