import { useDispatch, useSelector } from "react-redux";
import CleanGeminiIcon from "../../Assets/Icon/Gemini/Clean.svg";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { AppDispatch, RootState } from "../../Store/Store";
import { useState } from "react";
import {
  Owner,
  chatRequest,
  GeminiSlice,
} from "../../Store/Reducer/Gemini/Gemini";
import moment from "moment";
import Context from "../../UI/Context/Context";
import Icon from "../../UI/Icon/Icon";

const suggest = [
  "How are you to day?",
  "What time is it?",
  "Give me newspaper!",
];

function GeminiComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((rootState: RootState) => rootState.identityState);
  const geminiState = useSelector(
    (rootState: RootState) => rootState.geminiState
  );
  const [content, setContent] = useState("");

  function clean() {
    dispatch(GeminiSlice.actions.clean());
  }

  function ask(input?: string) {
    const mess = input || content;
    dispatch(GeminiSlice.actions.message({ text: mess, owner: Owner.You }));
    mess && dispatch(chatRequest(mess));
    setContent(String());
  }
  return (
    <div className="relative min-h-[100vh] flex flex-col justify-between bg-[#fff]">
      <div>
        <div className="sticky flex justify-between gap-4 z-20 custom-border bg-white rounded-lg top-[10px] p-4 mx-4">
          <div className="flex gap-4">
            <img
              className="w-[32px] rounded-full"
              src={
                "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg"
              }
            />
            <div className="flex flex-col">
              <span className="text-xl">Gemini</span>
              <span className="text-[10px] text-gray-400">
                {moment.utc().format("YYYY-MM-DD, dddd HH:mm")}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon src={CleanGeminiIcon} onClick={clean}></Icon>
            <Context items={[]}></Context>
          </div>
        </div>
        <div className="z-10 p-8">
          <ul className="flex flex-col gap-8 p-8">
            {geminiState.messages.map((item, index) => (
              <li
                className="w-full flex"
                key={index}
                style={{
                  justifyContent:
                    item.owner == Owner.Gemini ? "flex-start" : "flex-end",
                }}
              >
                <div
                  className="flex gap-4"
                  style={{
                    flexDirection:
                      item.owner == Owner.Gemini ? "row" : "row-reverse",
                  }}
                >
                  <img
                    src={
                      item.owner == Owner.Gemini
                        ? "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg"
                        : user.user?.avatar
                    }
                    className="w-[36px] h-[36px] rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-4">
                    <span
                      style={{
                        textAlign:
                          item.owner == Owner.Gemini ? "left" : "right",
                      }}
                    >
                      {item.owner == Owner.Gemini ? "Gemini" : "You"}
                    </span>
                    <div className="p-4 flex gap-4 max-w-[356px] bg-[#fff] text-black rounded-2xl custom-border">
                      {item.text}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        {geminiState.messages.length == 0 && (
          <video autoPlay muted className="w-[512px]">
            <source src="https://cdn.dribbble.com/userupload/6388889/file/original-ed00a31511ae8d0836cc0fc64c583655.mp4" />
          </video>
        )}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col gap-4 p-6 sticky bottom-0 z-20 bg-white"
      >
        <ul className="flex gap-4">
          {suggest.map((item, index) => (
            <li
              className="border p-4 rounded-xl cursor-pointer hover:bg-slate-200"
              key={index}
              onClick={() => {
                ask(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Input
            className="w-full"
            value={content}
            placeholder="Type something.."
            onChange={(e) => setContent(e.target.value)}
          ></Input>
          <Button mode="default" icon="next" onClick={() => ask()}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default GeminiComponent;
