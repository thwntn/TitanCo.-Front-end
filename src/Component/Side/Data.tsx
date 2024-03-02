import { Redirect } from "../../Shared/Redirect";
import HomeSideIcon from "../../Assets/Icon/Side/Home.svg";
import CalendarSideIcon from "../../Assets/Icon/Side/Calendar.svg";
import RequestSideIcon from "../../Assets/Icon/Side/Request.svg";
import GeminiSideIcon from "../../Assets/Icon/Side/Gemini.svg";
import BearSideIcon from "../../Assets/Icon/Side/Bear.svg";
import CloudSideIcon from "../../Assets/Icon/Side/Cloud.svg";
import TransferSideIcon from "../../Assets/Icon/Side/Transfer.svg";
import FileSideIcon from "../../Assets/Icon/Side/File.svg";
import NoteSideIcon from "../../Assets/Icon/Side/Note.svg";
import TrashSideIcon from "../../Assets/Icon/Side/Trash.svg";
import ArchiveSideIcon from "../../Assets/Icon/Side/Archive.svg";
import InvoiceSideIcon from "../../Assets/Icon/Side/Invoice.svg";
import ProductSideIcon from "../../Assets/Icon/Side/Product.svg";
import LogoutSideIcon from "../../Assets/Icon/Side/Logout.svg";
import CustomerSideIcon from "../../Assets/Icon/Side/Customer.svg";
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
    name: "Gemini AI (Google - Develop)",
    path: Redirect.GEMINI,
    icon: GeminiSideIcon,
  },
];

export const note: Item[] = [
  {
    name: "List",
    path: `${Redirect.NOTE}/${Redirect.LIST}`,
    icon: NoteSideIcon,
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
];

export const stogare: Item[] = [
  {
    name: "Overview",
    path: Redirect.OVERVIEW,
    icon: CloudSideIcon,
  },
  {
    name: "Transfer",
    path: `${Redirect.APP}/${Redirect.STOGARE}/${Redirect.TRANSFER}`,
    icon: TransferSideIcon,
  },
  {
    name: "Files",
    icon: FileSideIcon,
    children: [
      {
        name: "List",
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
    ],
  },
  {
    name: "Group",
    icon: RequestSideIcon,
    children: [
      {
        name: "List",
        path: `${Redirect.GROUP}/${Redirect.LIST}`,
        icon: RequestSideIcon,
      },
      {
        name: "Create",
        path: `${Redirect.GROUP}/${Redirect.CREATE}`,
        icon: RequestSideIcon,
      },
      {
        name: "Request",
        path: `${Redirect.GROUP}/${Redirect.REQUEST}`,
        icon: RequestSideIcon,
      },
    ],
  },
];

export const task: Item[] = [
  {
    name: "Calendar",
    path: Redirect.CALENDAR,
    icon: CalendarSideIcon,
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

export const invoice: Item[] = [
  {
    name: "Hoá đơn",
    icon: InvoiceSideIcon,
    children: [
      {
        name: "Danh sách",
        path: `${Redirect.INVOICE}/${Redirect.LIST}`,
        icon: SettingSideIcon,
      },
      {
        name: "Hóa đơn",
        path: `${Redirect.INVOICE}/${Redirect.INFO}`,
        icon: SettingSideIcon,
      },
    ],
  },
  {
    name: "Khách hàng",
    icon: CustomerSideIcon,
    children: [
      {
        name: "Danh sách",
        path: `${Redirect.PRODUCT}/${Redirect.LIST}`,
        icon: SettingSideIcon,
      },
      {
        name: "Thêm khách hàng",
        path: `${Redirect.PRODUCT}/${Redirect.CREATE}`,
        icon: SettingSideIcon,
      },
    ],
  },
  {
    name: "Sản phẩm",
    icon: ProductSideIcon,
    children: [
      {
        name: "Danh sách",
        path: `${Redirect.PRODUCT}/${Redirect.LIST}`,
        icon: SettingSideIcon,
      },
      {
        name: "Thêm sản phẩm",
        path: `${Redirect.PRODUCT}/${Redirect.CREATE}`,
        icon: SettingSideIcon,
      },
      {
        name: "Hóa đơn",
        path: `${Redirect.INVOICE}/${Redirect.INFO}`,
        icon: SettingSideIcon,
      },
    ],
  },
];
