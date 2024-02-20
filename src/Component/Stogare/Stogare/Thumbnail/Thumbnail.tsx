import { Stogare } from "../../../../Store/Reducer/Stogare/Model";
import { fileName } from "../../../../Store/Reducer/Stogare/Stogare";
import NotSupportIcon from "../../../../Assets/Icon/Stogare/NotSupport.png";
import themes from "./_.module.scss";

const element: { [key: string]: (item: Stogare) => JSX.Element } = {
  picture: (item: Stogare) => <img className={themes.image} src={item.url} />,
  video: (item: Stogare) => (
    <video className={themes.image}>
      <source src={item.url} />
    </video>
  ),
  null: (_item: Stogare) => (
    <img className={themes.image} src={NotSupportIcon} />
  ),
};

interface IProps {
  item: Stogare;
}

function ThumbnailComponent(props: IProps) {
  const type = fileName(props.item.mapName);
  return element[type as string](props.item);
}

export default ThumbnailComponent;
