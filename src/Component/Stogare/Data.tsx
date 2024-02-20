import VideoStogareIcon from "../../Assets/Icon/Stogare/Video.svg";
import PhotoStogareIcon from "../../Assets/Icon/Stogare/Photo.svg";
import MusicStogareIcon from "../../Assets/Icon/Stogare/Music.svg";
import OtherStogareIcon from "../../Assets/Icon/Stogare/Other.svg";

interface ITitle {
  name: string;
  color: string;
  icon: string;
  search: string;
}

interface IMapper {
  [key: string]: ITitle;
}

export const mapper: IMapper = {
  isMusic: {
    name: "Music",
    color: "#6fc274",
    icon: MusicStogareIcon,
    search: "mp3",
  },
  isVideo: {
    name: "Video",
    color: "#34ebc6",
    icon: VideoStogareIcon,
    search: "mp4",
  },
  isPicture: {
    name: "Picture",
    color: "#697dfb",
    icon: PhotoStogareIcon,
    search: "png",
  },
  isOther: {
    name: "Others",
    color: "#92b6d1",
    icon: OtherStogareIcon,
    search: "*",
  },
};
