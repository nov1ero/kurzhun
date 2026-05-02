interface OrnamentSideProps {
  flip?: boolean;
  height?: number;
  imgFilter?: string;
}

const ORNAMENT_SIZE = 154;

export function OrnamentSide({ flip = false, height = 406, imgFilter }: OrnamentSideProps) {
  const count = Math.ceil(height / ORNAMENT_SIZE);

  return (
    <div
      style={{
        width: ORNAMENT_SIZE,
        height,
        overflow: "hidden",
        flexShrink: 0,
        transform: flip ? "scaleX(-1)" : undefined,
        display: "flex",
        flexDirection: "column",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src="/svg/ornament.svg"
          alt=""
          width={ORNAMENT_SIZE}
          height={ORNAMENT_SIZE}
          style={{ display: "block", flexShrink: 0, filter: imgFilter }}
        />
      ))}
    </div>
  );
}
