import themes from "./Overlay.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

function Overlay(props: IProps) {
  const detailedHTMLProps = Object.assign({}, props);
  detailedHTMLProps.onClick = function (event) {
    event.stopPropagation();
    props.onClick && props.onClick(event);
  };
  return (
    <div {...detailedHTMLProps} className={themes.frame}>
      <div
        className={themes.wrapper}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Overlay;
