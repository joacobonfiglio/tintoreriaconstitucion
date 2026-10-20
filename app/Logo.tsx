import { ISO_PATHS, WORD_PATHS, ISO_VIEWBOX, LOGO_VIEWBOX } from './logo-paths';

type Props = {
  /** color del isotipo (plancha) */
  iso?: string;
  /** color del nombre */
  word?: string;
  className?: string;
  title?: string;
};

export function Logo({ iso = 'var(--orange)', word = 'var(--violet)', className, title = 'Tintorería Constitución' }: Props) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} role="img" aria-label={title}>
      {ISO_PATHS.map((d, i) => (
        <path key={`i${i}`} d={d} fill={iso} />
      ))}
      {WORD_PATHS.map((d, i) => (
        <path key={`w${i}`} d={d} fill={word} />
      ))}
    </svg>
  );
}

export function Isotipo({ color = 'currentColor', className }: { color?: string; className?: string }) {
  return (
    <svg viewBox={ISO_VIEWBOX} className={className} aria-hidden="true">
      {ISO_PATHS.map((d, i) => (
        <path key={i} d={d} fill={color} />
      ))}
    </svg>
  );
}
