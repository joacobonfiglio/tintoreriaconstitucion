import type { IconName } from './site';

// Íconos de línea en el estilo del manual (trazo fino, puntas redondeadas).
const PATHS: Record<IconName | 'whatsapp' | 'check' | 'pin' | 'clock' | 'camera' | 'tag' | 'bell' | 'building', string> = {
  iron: 'M3 17h15.5a2.5 2.5 0 0 0 2.5-2.5V13c0-3-2.5-5.5-5.5-5.5H10C6.5 7.5 3.8 11.5 3 17Zm6-5h7M13 7.5 15 4h4',
  hanger: 'M12 6.5a2 2 0 1 1 2-2M12 6.5V8m0 0L3 15.2c-.9.7-.4 1.8.7 1.8h16.6c1.1 0 1.6-1.1.7-1.8L12 8Z',
  shirt: 'M8 3 4 5.5 2.5 10 6 11v10h12V11l3.5-1L20 5.5 16 3c-.6 1.8-2.1 3-4 3s-3.4-1.2-4-3Zm2.5 1.2L12 8l1.5-3.8M12 8v13',
  jacket: 'M12 3.5c-1.2 0-2.2.5-2.6 1.2M12 3.5c1.2 0 2.2.5 2.6 1.2M9.4 4.7 6 6 4 9.5v11h4.5M14.6 4.7 18 6l2 3.5v11h-4.5M9.4 4.7 12 9l2.6-4.3M12 9v11.5M8.5 20.5V13m7 7.5V13',
  towels: 'M5 6h13a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4Zm0 4h13a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4Zm0 4h13a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4ZM7 6v12',
  washer: 'M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm-1 4h16M7 5h.01M9.5 5h.01M12 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-3-4.5c1 .8 2 .8 3 0s2-.8 3 0',
  drop: 'M12 3s6 6.4 6 10.5a6 6 0 0 1-12 0C6 9.4 12 3 12 3Z',
  truck: 'M2.5 6h11v10h-11zM13.5 9.5H18l3 3.5v3h-7.5M6 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 9.5a1 1 0 1 1 1 1v1l-3 2h6l-3-2',
  basin: 'M3 9h18l-2.5 9.5a2 2 0 0 1-1.9 1.5H7.4a2 2 0 0 1-1.9-1.5L3 9Zm2.5-3h13M7 9c1.5 1.3 3 1.3 5 0s3.5-1.3 5 0',
  spray: 'M8 9h5v12H6V12l2-3Zm0 0V6h3v3M11 6h3l1 1.5M17 4.5l2-1M17 7.5h2.5M17 10.5l2 1M8 14h3',
  whatsapp: 'M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.3l-4.5 1.2ZM9 8.2c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.2-.1.4 0 .6.6 1.1 1.6 2 2.7 2.6.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5v.4c0 .4-.2.8-.6 1-.6.4-1.5.6-2.6.2-2.5-.9-4.4-2.8-5.2-5.2-.3-1-.2-1.9.1-2.5Z',
  check: 'm5 12.5 4.5 4.5L19 7.5',
  pin: 'M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2',
  camera: 'M4 7.5h3L8.5 5h7L17 7.5h3a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Zm8 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
  tag: 'M3 12V4h8l10 10-8 8L3 12Zm4.5-4.5h.01',
  bell: 'M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Zm4 4a2 2 0 0 0 4 0',
  building: 'M4 21V5l8-2v18M12 8h8v13M2.5 21h19M7 8h2m-2 4h2m-2 4h2m6-4h2m-2 4h2',
};

export type AnyIcon = keyof typeof PATHS;

export function Icon({ name, className, strokeWidth = 1.6 }: { name: AnyIcon; className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
