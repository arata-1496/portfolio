/**
 * CodePenと同じ animateTransform 方式で波を動かすコンポーネント
 * wave-brower.svg（2400×620）のパスをインラインで埋め込み、
 * preserveAspectRatio="xMidYMin slice" でコンテナを埋めつつ
 * 左右に余白が生まれるため、横移動しても端が見えない
 */
const WaveBackground = () => {
  const wavePath =
    "M0 0L40 82.6667C80 165.333 160 330.667 240 413.333C320 496 400 496 480 434C560 372 640 248 720 175.667C800 103.333 880 82.6667 960 144.667C1040 206.667 1120 351.333 1200 361.667C1280 372 1360 248 1440 237.667C1520 227.333 1600 330.667 1680 382.333C1760 434 1840 434 1920 434C2000 434 2080 434 2160 413.333C2240 392.667 2320 351.333 2360 330.667L2400 310V620H2360C2320 620 2240 620 2160 620C2080 620 2000 620 1920 620C1840 620 1760 620 1680 620C1600 620 1520 620 1440 620C1360 620 1280 620 1200 620C1120 620 1040 620 960 620C880 620 800 620 720 620C640 620 560 620 480 620C400 620 320 620 240 620C160 620 80 620 40 620H0V0Z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 2400 620"
      preserveAspectRatio="xMidYMin slice"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <defs>
        {/* グラデーションは objectBoundingBox にして、移動しても色がずれないようにする */}
        <linearGradient
          id="wave-gradient"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#C1D4D9" />
          <stop offset="0.83" stopColor="#C1D4D9" />
          <stop offset="1" stopColor="#FAFAFA" />
        </linearGradient>

        {/* wave-brower.svg のパスをそのまま定義 */}
        <path
          id="wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d={wavePath}
          fill="url(#wave-gradient)"
        />
      </defs>

      <g>
        {/* 波1：ゆっくり・薄め */}
        <use xlinkHref="#wave" opacity="0.4">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="10s"
            calcMode="spline"
            values="300 0; -400 0; 300 0"
            keyTimes="0; .5; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>

        {/* 波2：中速 */}
        <use xlinkHref="#wave" opacity="0.6">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="8s"
            calcMode="spline"
            values="-300 0; 350 0; -300 0"
            keyTimes="0; .6; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>

        {/* 波3：速め・一番濃い */}
        <use xlinkHref="#wave" opacity="0.9">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="6s"
            calcMode="spline"
            values="0 0; -200 0; 0 0"
            keyTimes="0; .4; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
      </g>
    </svg>
  );
};

export default WaveBackground;
