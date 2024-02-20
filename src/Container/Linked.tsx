import LinkedComponent from "../Component/Linked/Linked";
import ChatLinkedIcon from "../Assets/Icon/Linked/Chat.png";
import StogareLinkedIcon from "../Assets/Icon/Linked/Stogare.png";
import CalendarLinkedIcon from "../Assets/Icon/Linked/Calendar.png";
import FocusLinkedIcon from "../Assets/Icon/Linked/Focus.png";

export interface IApp {
  name: string;
  icon: string;
  url: string;
}

const apps: IApp[] = [
  {
    name: "Chatitux",
    icon: ChatLinkedIcon,
    url: "http://localhost:5173/app",
  },
  {
    name: "Planitux",
    icon: CalendarLinkedIcon,
    url: "http://localhost:5173/app",
  },
  {
    name: "Stotiux",
    icon: StogareLinkedIcon,
    url: "http://localhost:5173/app",
  },
  {
    name: "Fociux",
    icon: FocusLinkedIcon,
    url: "http://localhost:5173/app",
  },
];

function LinkedContainer() {
  return <LinkedComponent items={apps}></LinkedComponent>;
}

export default LinkedContainer;
