interface advertisingProps {
  width?: string;
  height?: string;
  bgColor?: string;
  borderColor: string;
  rounded?: string;
}

export default function Advertising({
  width = "full",
  height = "full",
  bgColor = "white",
  borderColor,
  rounded = "[10px]",
}: advertisingProps) {
  return (
    <div
      className={`w-${width} h-${height} bg-${bgColor} ${
        borderColor ? `border border-${borderColor}` : ""
      } rounded-${rounded}`}
    ></div>
  );
}
