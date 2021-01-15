import { useState } from "react";
import ListItem from "./ListItem/ListItem";
import VideoModalPlayer from "../../../VideoModalPlayer/VideoModalPlayer";

function List({ data }) {
  const [videoModal, setVideoModal] = useState(null);

  return (
    <>
      {data.length > 0 && (
        <div className="row">
          {data.map((item, i) => {
            if (videoModal === item.id) {
              return (
                <VideoModalPlayer
                  key={i}
                  item={item}
                  setVideoModal={setVideoModal}
                />
              );
            } else {
              return (
                <ListItem key={i} item={item} setVideoModal={setVideoModal} />
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default List;
