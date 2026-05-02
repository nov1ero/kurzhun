interface OrnamentSmallProps {
  size?: number;
}

export function OrnamentSmall({ size = 102 }: OrnamentSmallProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/svg/ornament.svg"
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
