'use client';

type CheckCircleIconProps = {
  /** Optional className for styling */
  className?: string;
  /** Optional size in pixels - defaults to 24 */
  size?: number;
  /** Optional color - defaults to currentColor */
  color?: string;
}

/** Icon component displaying a check mark in a circle */
export const CheckCircleIcon = ({
  className,
  size = 24,
  color = 'currentColor',
}: CheckCircleIconProps): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
        fill={color}
      />
    </svg>
  );
}; 