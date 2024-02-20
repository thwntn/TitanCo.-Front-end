import { Redirect } from "../../Shared/Redirect";
import HomeSideIcon from "../../Assets/Icon/Side/Home.svg";
import CalendarSideIcon from "../../Assets/Icon/Side/Calendar.svg";
import RequestSideIcon from "../../Assets/Icon/Side/Request.svg";
import GeminiSideIcon from "../../Assets/Icon/Side/Gemini.svg";
import BearSideIcon from "../../Assets/Icon/Side/Bear.svg";
import CloudSideIcon from "../../Assets/Icon/Side/Cloud.svg";
import FileSideIcon from "../../Assets/Icon/Side/File.svg";
import NoteSideIcon from "../../Assets/Icon/Side/Note.svg";
import TrashSideIcon from "../../Assets/Icon/Side/Trash.svg";
import ArchiveSideIcon from "../../Assets/Icon/Side/Archive.svg";
import LogoutSideIcon from "../../Assets/Icon/Side/Logout.svg";
import SettingSideIcon from "../../Assets/Icon/Side/Setting.svg";
import { Item } from "./Model";
import { ROOT_FOLDER } from "../../Store/Reducer/Stogare/Stogare";

export const app: Item[] = [
  {
    name: "Home",
    path: Redirect.HOME,
    icon: HomeSideIcon,
  },
  {
    name: "Cloud",
    icon: CloudSideIcon,
    children: [
      {
        name: "Overview",
        path: Redirect.OVERVIEW,
        icon: FileSideIcon,
      },
      {
        name: "Files",
        path: `${Redirect.STOGARE}/${Redirect.FILE}/${ROOT_FOLDER}`,
        icon: FileSideIcon,
      },
      {
        name: "Create",
        path: `${Redirect.STOGARE}/${Redirect.CREATE}`,
        icon: FileSideIcon,
      },
      {
        name: "Upload",
        path: `${Redirect.STOGARE}/${Redirect.UPLOAD}`,
        icon: FileSideIcon,
      },
      // {
      //   name: "Trash",
      //   path: Redirect.ARCHIVE,
      //   icon: TrashSideIcon,
      // },
      {
        name: "Group",
        path: Redirect.GROUP,
        icon: RequestSideIcon,
      },
    ],
  },
  {
    name: "Chat (Comming Soon)",
    icon: BearSideIcon,
    // children: [
    //   {
    //     name: "List",
    //     path: Redirect.NOTE,
    //     icon: ChatSideIcon,
    //   },
    //   {
    //     name: "Group",
    //     path: Redirect.ARCHIVE,
    //     icon: GroupSideIcon,
    //   },
    //   {
    //     name: "Request",
    //     path: Redirect.TRASH,
    //     icon: RequestSideIcon,
    //   },
    // ],
  },
  {
    name: "Calendar",
    path: Redirect.CALENDAR,
    icon: CalendarSideIcon,
  },
  {
    name: "Gemini AI (Google - Develop)",
    path: Redirect.Gemini,
    icon: GeminiSideIcon,
  },
  {
    name: "Note",
    icon: NoteSideIcon,
    children: [
      {
        name: "List",
        path: Redirect.NOTE,
        icon: HomeSideIcon,
      },
      {
        name: "Archive",
        path: Redirect.ARCHIVE,
        icon: ArchiveSideIcon,
      },
      {
        name: "Trash",
        path: Redirect.TRASH,
        icon: TrashSideIcon,
      },
    ],
  },
];

export const system: Item[] = [
  {
    name: "Setting",
    path: Redirect.SETTING,
    icon: SettingSideIcon,
  },
  {
    name: "Logout",
    path: "Redirect.ALARM",
    icon: LogoutSideIcon,
  },
];
