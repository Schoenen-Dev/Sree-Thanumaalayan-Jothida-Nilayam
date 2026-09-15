import React from 'react';
/**
 * Renders an orbital track ring centered at (0, 0).
 */
export default function OrbitRing({
  radius,
  className = '',
  strokeColor = 'rgba(245, 215, 130, 0.22)',
  strokeDasharray = '3 6'
}) {
  if (radius <= 0) return null;
  return <circle cx={0} cy={0} r={radius} fill="none" stroke={strokeColor} strokeWidth={1} strokeDasharray={strokeDasharray} className={`orbit-ring ${className}`} />;
}