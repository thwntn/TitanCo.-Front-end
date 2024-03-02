import QRCode from "react-qr-code";
import Name from "../../../UI/Name/Name";
import moment from "moment";
import Context from "../../../UI/Context/Context";
import Button from "../../../UI/Button/Button";
import Frame from "../../../UI/Frame/Frame";

function TransferStogare() {
  return (
    <Frame>
      <Name title="Truyền tệp đám mây"></Name>
      <div className="flex gap-6">
        <div className="custom-border p-4 rounded-xl w-[256px]">
          <QRCode
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="aslhdjl"
          ></QRCode>
        </div>
        <ul className="flex flex-col gap-4">
          <li>Quét QR code trên thiết bị khác</li>
          <li>Tải lên tập trình cần truyền</li>
          <li>Tải xuống</li>
          <li>Hoàn tất</li>
        </ul>
      </div>
      <span className="text-2xl">Danh sách tập tin</span>
      <div className="flex gap-6">
        <ul className="w-full flex flex-col gap-6">
          <li className="flex justify-between items-center custom-border p-5 rounded-2xl cursor-pointer">
            <div className="flex items-center gap-4">
              <img
                src={"https://minimals.cc/assets/icons/files/ic_video.svg"}
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  expertise-2015-conakry-sao-tome-and-principe-gender.mp4
                </span>
                <div className="flex gap-4 text-gray-500">
                  <span>15.75 Mb</span>
                  <span>{moment.utc().format("dddd, HH:MM, DD/MM/YYYY")}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex">
                <img
                  className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
                />
                <img
                  className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg"
                />
              </div>
              <Context items={[]}></Context>
            </div>
          </li>
          <li className="flex justify-between items-center custom-border p-5 rounded-2xl cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={"https://minimals.cc/assets/icons/files/ic_img.svg"} />
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  expertise-2015-conakry-sao-tome-and-principe-gender.mp4
                </span>
                <div className="flex gap-4 text-gray-500">
                  <span>15.75 Mb</span>
                  <span>{moment.utc().format("dddd, HH:MM, DD/MM/YYYY")}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex">
                <img
                  className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
                />
                <img
                  className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg"
                />
              </div>
              <Context items={[]}></Context>
            </div>
          </li>
          <li className="flex justify-between items-center custom-border p-5 rounded-2xl cursor-pointer">
            <div className="flex items-center gap-4">
              <img
                src={"https://minimals.cc/assets/icons/files/ic_audio.svg"}
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  expertise-2015-conakry-sao-tome-and-principe-gender.mp4
                </span>
                <div className="flex gap-4 text-gray-500">
                  <span>15.75 Mb</span>
                  <span>{moment.utc().format("dddd, HH:MM, DD/MM/YYYY")}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex">
                <img
                  className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
                />
                <img
                  className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg"
                />
              </div>
              <Context items={[]}></Context>
            </div>
          </li>
        </ul>
        <div className="min-w-[356px] rounded-xl bg-[#078dee33] h-[256px] gap-8 flex flex-col items-center justify-center">
          <img
            className="w-[120px]"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423454242_3570852369842929_8947271138024805575_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFoMCoLCMbyy2oXgwFXR0DULYk7BdLweactiTsF0vB5p5BlFP7QeQlZl1YnSC7cN0_zGqmxS0DYdAC8hanC1rfn&_nc_ohc=KzektsdtSjgAX9KDd4c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR2Cg2-xxxTReSQptGGqaa0e6EBYTqxmgJxpli2oGDj_A&oe=66068573"
          />
          <Button mode="warning" className="bg-[#212b36] text-white">
            Nâng cấp gói
          </Button>
          <span className="text-[#078dee]">
            Cập nhật gói và bạn có nhiều không gian hơn
          </span>
        </div>
      </div>
    </Frame>
  );
}

export default TransferStogare;
