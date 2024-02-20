import clsx from "clsx";
import { useEffect, useState } from "react";
import themes from "./Slideshow.module.scss";
import NextSlideshowIcon from "../../Assets/Icon/Slideshow/Next.svg";
import ResetSlideshowIcon from "../../Assets/Icon/Slideshow/Reset.svg";
import { useDebouncedCallback } from "use-debounce";

export interface ISlideshow {
  url: string;
  tag?: string;
  title?: string;
  content?: string;
}

export interface IProps {
  item: ISlideshow[];
}

function Slideshow(props: IProps) {
  if (props.item.length == 0) return;

  const present = [...props.item, props.item[0]];
  const [active, setActive] = useState(1);
  const deboundNext = useDebouncedCallback(next, 500);

  function next() {
    if (present.length - (active + 1) == 0) setActive(1);
    else setActive((previous) => previous + 1);
  }

  function auto() {
    const timeout = setTimeout(() => {
      next();
    }, 5000);
    return timeout;
  }

  useEffect(() => {
    const timeout = auto();
    return () => clearTimeout(timeout);
  });

  return (
    <ul className={themes.frame}>
      <nav className={themes.navigation}>
        <div className={themes.frameDot}>
          {Array.from({ length: present.length - 1 }).map((_item, index) => (
            <span
              key={index}
              className={clsx(themes.dot, {
                [themes.active]: index + 1 == active,
              })}
            ></span>
          ))}
        </div>
        <div className={themes.frameAction}>
          <img
            onClick={deboundNext}
            className={themes.button}
            src={NextSlideshowIcon}
          />
          <img
            onClick={() => setActive(1)}
            className={themes.button}
            src={ResetSlideshowIcon}
          />
        </div>
      </nav>
      {present.map((item, index) => (
        <li
          key={index}
          className={clsx(themes.item, {
            [themes.in]: index == active,
            [themes.out]: index == active - 1,
          })}
          style={{ backgroundImage: `url(${item.url})` }}
        >
          <div className={themes.content}>
            {item.tag && <span className={themes.tag}>{item.tag}</span>}
            {item.title && <span className={themes.title}>{item.title}</span>}
            {item.content && (
              <span className={themes.text}>{item.content}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Slideshow;
