import moment from "moment";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { convert } from "html-to-text";
import Context, { ContextHandle } from "../../UI/Context/Context";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { NoteResponse } from "../../Store/Reducer/Note/Model";
import Slideshow, { ISlideshow } from "../../UI/Slideshow/Slideshow";
import { StatusNote } from "../../Shared/Enum";
import TrashNoteImage from "../../Assets/Image/Note/Trash.png";
import Name from "../../UI/Name/Name";

const nameofStatus: { [key: number]: string } = {
  [StatusNote.Default]: "Notes",
  [StatusNote.Archive]: "Archive",
  [StatusNote.Remove]: "Trash",
};

interface IProps {
  create: () => void;
  select: (item: NoteResponse) => void;
  filter: (content: string) => void;
  getContextItemNote: (item: NoteResponse) => ContextHandle[];
}

const ACTIVE_STYLE = {
  background: "#DCF8FF",
};

const data: ISlideshow[] = [
  {
    url: "https://assets-global.website-files.com/63d5a7053933d17abb6dcbda/645b96414a6bbfd55b47ed7e_How%20big%20is%20the%20mobile%20app%20market_.jpg",
    tag: "Feature App",
    title: "Animation",
    content:
      "Centralizing your application's state and logic enables powerful capabilities",
  },
  {
    url: "https://cdn.dribbble.com/users/477071/screenshots/11029505/media/c58f92a85f33f58207ba95e9934d49af.jpg",
    tag: "Feature App",
    title: "Share",
    content:
      "Centralizing your application's state and logic enables powerful capabilities",
  },
];

function ListNoteComponent(props: IProps) {
  const noteState = useSelector((rootState: RootState) => rootState.noteSate);
  const identity = useSelector(
    (rootState: RootState) => rootState.identityState
  );
  if (!identity.user) return identity.user;

  return (
    <div className="flex flex-col p-8 px-20 gap-16 h-[100vh] w-full overflow-y-auto">
      <div className="flex justify-between py-4 rounded-md">
        <Name title={nameofStatus[noteState.statusNote]}></Name>
        <Button icon="add" mode="default" onClick={props.create}>
          Create
        </Button>
      </div>
      <Input
        className="w-[356px]"
        placeholder="Search anything..."
        onChange={(event) => void props.filter(event.target.value)}
      ></Input>
      <div className="flex gap-12">
        {noteState.statusNote == StatusNote.Default && (
          <div className="custom-border flex flex-col overflow-hidden h-[286px] w-full rounded-3xl">
            <Slideshow item={data}></Slideshow>
          </div>
        )}
        {noteState.statusNote == StatusNote.Remove && (
          <div className="flex flex-col overflow-hidden h-[286px] w-full rounded-3xl justify-center items-center bg-gradient-to-t from-[#fde2b9c7] to-[#b3f7d784]">
            <img
              src={TrashNoteImage}
              className="object-cover object-center h-[200px]"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {noteState.notes.map((item, index) => {
            const active = noteState.noteSelected?.id == item.id;
            return (
              <li
                className="relative flex flex-col rounded-[16px] cursor-pointer custom-border p-5 gap-4 bg-white"
                onClick={() => props.select(item)}
                key={index}
                style={{
                  ...(active ? ACTIVE_STYLE : null),
                }}
              >
                <Context
                  onClick={(event) => event.stopPropagation()}
                  className="absolute right-[4px] top-[4px]"
                  data={props.getContextItemNote(item)}
                ></Context>
                <span className="font-bold">{item.name}</span>
                <p className="max-h-[56px] overflow-hidden">
                  {convert(item.content)}
                </p>
                <span className="text-[10px]">
                  {moment(item.created).format("YYYY-MM-DD, dddd")}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListNoteComponent;
