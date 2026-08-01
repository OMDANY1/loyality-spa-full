import React, { forwardRef, createElement, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

const createIcon = (name: string, pathData: string, extraNodes: [string, Record<string, string>][] = []) => {
  const IconComponent = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size = 24, strokeWidth = 2, children, className, style, ...rest }, ref) => {
      return createElement(
        'svg',
        {
          ref,
          xmlns: 'http://www.w3.org/2000/svg',
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: color,
          strokeWidth,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          className,
          style,
          ...rest,
        },
        [
          createElement('path', { key: 'path-main', d: pathData }),
          ...extraNodes.map((item, idx) => createElement(item[0], { key: `extra-${idx}`, ...item[1] })),
          ...(Array.isArray(children) ? children : [children]),
        ]
      );
    }
  );
  IconComponent.displayName = name;
  return IconComponent;
};

export const Shield = createIcon('Shield', 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z');
export const Sparkles = createIcon('Sparkles', 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z');
export const Heart = createIcon('Heart', 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z');
export const Award = createIcon('Award', 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526', [['circle', { cx: '12', cy: '8', r: '6' }]]);
export const ShoppingBag = createIcon('ShoppingBag', 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z', [['path', { d: 'M3 6h18' }], ['path', { d: 'M16 10a4 4 0 0 1-8 0' }]]);
export const Calendar = createIcon('Calendar', 'M8 2v4M16 2v4M3 10h18', [['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2' }]]);
export const Clock = createIcon('Clock', 'M12 6v6l4 2', [['circle', { cx: '12', cy: '12', r: '10' }]]);
export const User = createIcon('User', 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', [['circle', { cx: '12', cy: '7', r: '4' }]]);
export const Check = createIcon('Check', 'M20 6 9 17l-5-5');
export const ChevronDown = createIcon('ChevronDown', 'm6 9 6 6 6-6');
export const Globe = createIcon('Globe', 'M2 12h20', [['circle', { cx: '12', cy: '12', r: '10' }], ['path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' }]]);
export const Phone = createIcon('Phone', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z');
export const Mail = createIcon('Mail', 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', [['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2' }]]);
export const MapPin = createIcon('MapPin', 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z', [['circle', { cx: '12', cy: '10', r: '3' }]]);
export const Instagram = createIcon('Instagram', 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', [['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5' }], ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5' }]]);
export const Menu = createIcon('Menu', 'M4 12h16M4 6h16M4 18h16');
export const X = createIcon('X', 'M18 6 6 18M6 6l12 12');
export const Star = createIcon('Star', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
export const Plus = createIcon('Plus', 'M5 12h14M12 5v14');
export const Minus = createIcon('Minus', 'M5 12h14');
export const Trash2 = createIcon('Trash2', 'M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', [['line', { x1: '10', x2: '10', y1: '11', y2: '17' }], ['line', { x1: '14', x2: '14', y1: '11', y2: '17' }]]);
export const ArrowRight = createIcon('ArrowRight', 'M5 12h14M12 5l7 7-7 7');
export const ArrowLeft = createIcon('ArrowLeft', 'M19 12H5M12 19l-7-7 7-7');
export const Send = createIcon('Send', 'm22 2-7 20-4-9-9-4Z', [['path', { d: 'M22 2 11 13' }]]);
export const MessageCircle = createIcon('MessageCircle', 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z');
export const CheckCircle2 = createIcon('CheckCircle2', 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z', [['path', { d: 'm9 12 2 2 4-4' }]]);
export const Facebook = createIcon('Facebook', 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z');
export const ShieldCheck = createIcon('ShieldCheck', 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', [['path', { d: 'm9 12 2 2 4-4' }]]);
export const Gift = createIcon('Gift', 'M20 12v10H4V12', [['rect', { width: '20', height: '5', x: '2', y: '7', rx: '1' }], ['path', { d: 'M12 22V7' }], ['path', { d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z' }], ['path', { d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' }]]);
export const Quote = createIcon('Quote', 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z', [['path', { d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z' }]]);
export const Download = createIcon('Download', 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', [['polyline', { points: '7 10 12 15 17 10' }], ['line', { x1: '12', x2: '12', y1: '15', y2: '3' }]]);
export const RefreshCw = createIcon('RefreshCw', 'M3 12a9 9 0 0 1 15-6.7L21 8', [['polyline', { points: '21 3 21 8 16 8' }], ['path', { d: 'M21 12a9 9 0 0 1-15 6.7L3 16' }], ['polyline', { points: '3 21 3 16 8 16' }]]);






