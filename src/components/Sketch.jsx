// Hand-drawn "sketch" signature elements for Jay Prakash Agro.
// A single SVG turbulence filter roughens clean paths so they read as inked
// by hand — the one deliberate flourish in an otherwise type-led, quiet design.

// Render ONCE near the app root so the filters are available document-wide.
export function SketchDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false"
         style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        {/* Subtle wobble — makes strokes look hand-drawn */}
        <filter id="roughen" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* A touch more wobble for larger elements */}
        <filter id="roughen-lg" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

// The cashew kernel, drawn as a line. `variant`:
//  - 'line'  : hand-drawn outline (the hero mark, section markers)
//  - 'solid' : filled kernel (tiny bullets)
// Colour comes from CSS `color` (uses currentColor).
const KERNEL_PATH =
  'M74 24 C54 16 32 22 24 40 C17 56 22 76 40 84 C50 88 58 84 58 75 ' +
  'C58 68 53 64 46 63 C36 61.5 30 53 31 43 C32 32 43 24 55 25 ' +
  'C64 25.7 71 30 74 24 Z';

export function Crescent({ size = 28, variant = 'line', rough = true, strokeWidth = 5, className = '', style }) {
  const filter = rough ? (size >= 90 ? 'url(#roughen-lg)' : 'url(#roughen)') : undefined;
  return (
    <svg
      className={`crescent ${className}`}
      width={size} height={size} viewBox="0 0 100 100"
      fill="none" aria-hidden="true" focusable="false" style={style}
    >
      <g filter={filter} transform="rotate(-18 50 50)">
        <path
          d={KERNEL_PATH}
          stroke={variant === 'line' ? 'currentColor' : 'none'}
          fill={variant === 'solid' ? 'currentColor' : 'none'}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// A hand-drawn stand-up pouch silhouette — a quiet hint on the retail card.
export function Pouch({ className = '' }) {
  return (
    <svg
      className={`pack__pouch ${className}`}
      viewBox="0 0 80 112" fill="none"
      aria-hidden="true" focusable="false"
    >
      <g filter="url(#roughen)" stroke="currentColor" strokeWidth="2.4"
         strokeLinecap="round" strokeLinejoin="round">
        {/* body */}
        <path d="M15 24 L15 98 Q15 106 23 106 L57 106 Q65 106 65 98 L65 24 Z" />
        {/* top seal flap */}
        <path d="M22 24 L22 9 L58 9 L58 24" />
        {/* seal ridges */}
        <path d="M26 14 H54" />
        <path d="M20 30 H60" />
      </g>
    </svg>
  );
}

// A loose, hand-drawn underline that stretches to its container's width.
export function Underline({ className = '', strokeWidth = 5 }) {
  return (
    <svg
      className={`underline-sketch ${className}`}
      viewBox="0 0 300 16" preserveAspectRatio="none"
      fill="none" aria-hidden="true" focusable="false"
    >
      <path
        d="M4 10 C60 4 110 13 160 8 C210 3 255 12 296 6"
        stroke="currentColor" strokeWidth={strokeWidth}
        strokeLinecap="round" filter="url(#roughen)"
      />
    </svg>
  );
}

// A hand-drawn arrow for CTAs — carries the sketch language onto the buttons.
export function SketchArrow({ dir = 'right', className = '', strokeWidth = 2.1 }) {
  const d = dir === 'down'
    ? 'M12 3 V19 M6 13.5 L12 20 L18 13.5'
    : 'M3 12 H19 M13.5 6 L20 12 L13.5 18';
  return (
    <svg className={`ic sketch-arrow ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none"
         aria-hidden="true" focusable="false">
      <path d={d} stroke="currentColor" strokeWidth={strokeWidth}
            strokeLinecap="round" strokeLinejoin="round" filter="url(#roughen)" />
    </svg>
  );
}

// A hand-drawn horizontal rule — softens the seams between sections.
export function SketchDivider({ className = '' }) {
  return (
    <svg className={`sketch-divider ${className}`} viewBox="0 0 1200 18"
         preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M2 10 C130 3 250 15 372 9 C500 3 620 15 744 9 C864 4 980 15 1104 9 C1150 7 1176 11 1198 8"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" filter="url(#roughen)"
      />
    </svg>
  );
}

// A rough, open annotation loop — drawn AROUND a highlighted element.
export function SketchCircle({ className = '' }) {
  return (
    <svg className={`sketch-circle ${className}`} viewBox="0 0 140 86"
         preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M92 8 C56 1 20 9 11 31 C3 51 21 76 68 80 C114 84 137 65 131 41 C127 24 106 13 82 11"
        stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" filter="url(#roughen)"
      />
    </svg>
  );
}

// A little scattered cluster of cashews — a hand-doodled accent.
export function CashewScatter({ className = '' }) {
  return (
    <svg className={`cashew-scatter ${className}`} viewBox="0 0 230 150"
         fill="none" aria-hidden="true" focusable="false">
      <g filter="url(#roughen)" stroke="currentColor" fill="none"
         strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
         vectorEffect="non-scaling-stroke">
        <path d={KERNEL_PATH} transform="translate(0 40) rotate(-22 50 50) scale(0.72)" vectorEffect="non-scaling-stroke" />
        <path d={KERNEL_PATH} transform="translate(98 2) rotate(16 50 50) scale(0.56)" vectorEffect="non-scaling-stroke" />
        <path d={KERNEL_PATH} transform="translate(128 66) rotate(-6 50 50) scale(0.64)" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

// A large, faint hand-drawn cashew set into a section corner — echoes the hero
// mark so the drawn signature recurs as the eye travels down the page.
export function SectionMark({ pos = 'tr', size = 300, strokeWidth = 3 }) {
  return (
    <span className={`section__mark section__mark--${pos}`} aria-hidden="true">
      <Crescent size={size} variant="line" strokeWidth={strokeWidth} />
    </span>
  );
}
