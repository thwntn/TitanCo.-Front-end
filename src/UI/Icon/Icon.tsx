import clsx from "clsx";
import themes from "./Icon.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  size?: number;
}

function Icon(props: IProps) {
  const detailedHTMLProps = Object.assign(
    { style: { width: props.size, height: props.size } },
    props
  );
  detailedHTMLProps.className = clsx(
    themes.icon,
    themes.hover,
    props.className
  );
  return <img {...detailedHTMLProps} />;
}

export default Icon;
