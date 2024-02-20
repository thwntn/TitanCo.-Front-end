import Name from "../../UI/Name/Name";
import Slideshow, { ISlideshow } from "../../UI/Slideshow/Slideshow";

const data: ISlideshow[] = [
  {
    url: "https://cdn.dribbble.com/users/477071/screenshots/11029505/media/c58f92a85f33f58207ba95e9934d49af.jpg",
    tag: "Feature App",
    title: "Share",
    content:
      "Centralizing your application's state and logic enables powerful capabilities",
  },
  {
    url: "https://wallpapershome.com/images/pages/pic_h/24316.jpg",
    tag: "Feature App",
    title: "Share",
    content:
      "Centralizing your application's state and logic enables powerful capabilities",
  },
  {
    url: "https://wallpapershome.com/images/pages/pic_h/24315.jpg",
    tag: "Feature App",
    title: "Share",
    content:
      "Centralizing your application's state and logic enables powerful capabilities",
  },
];

function HomeComponent() {
  return (
    <div className=" custom-frame">
      <Name title="Home"></Name>
      <div className="flex flex-col h-[264px] rounded-3xl overflow-hidden">
        <Slideshow item={data}></Slideshow>
      </div>
    </div>
  );
}

export default HomeComponent;
