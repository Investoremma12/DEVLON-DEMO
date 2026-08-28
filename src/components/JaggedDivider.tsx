type JaggedDividerProps = {
  className?: string;
  color?: string;
  height?: number;
  flip?: boolean;
};

/**
 * A paper-tear edge rather than a decorative zig-zag line.
 * The SVG keeps the edge crisp at every viewport width and avoids the
 * repeated/striped appearance of a CSS clip-path polygon.
 */
export default function JaggedDivider({
  className = '',
  color = '#ffffff',
  height = 28,
  flip = false,
}: JaggedDividerProps) {
  const points = [
    [0, 13], [18, 17], [37, 10], [57, 15], [77, 8], [96, 14], [116, 9],
    [136, 17], [157, 11], [178, 15], [199, 7], [220, 14], [241, 10],
    [262, 16], [283, 9], [304, 14], [325, 8], [346, 16], [367, 10],
    [388, 14], [409, 7], [430, 13], [451, 9], [472, 16], [493, 10],
    [514, 14], [535, 8], [556, 15], [577, 10], [598, 16], [619, 9],
    [640, 14], [661, 8], [682, 15], [703, 10], [724, 16], [745, 9],
    [766, 14], [787, 8], [808, 15], [829, 10], [850, 16], [871, 9],
    [892, 14], [913, 8], [934, 15], [955, 10], [976, 16], [997, 9],
    [1018, 14], [1039, 8], [1060, 15], [1081, 10], [1102, 16], [1123, 9],
    [1144, 14], [1165, 8], [1186, 15], [1200, 11],
  ];

  const polygon = points.map(([x, y]) => `${x},${y}`).join(' ');

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-20 overflow-hidden leading-none ${className}`}
      style={{ height }}
    >
      <svg
        className={`block h-full w-full ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
      >
        <polygon points={`${polygon} 1200,28 0,28`} fill={color} />
      </svg>
    </div>
  );
}
