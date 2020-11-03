import React from "react";
import Film from "./Film";

const Programme = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        // console.log(item);
        return (
          <>
            <div className="cadre">
              <div>{item.time}</div>
              <img src={`${item.image}`} alt="img"></img>
              <Film
                key={item.index}
                title={item.title}
                type={item.type}
                duration={item.duration}
                direct={item.direct}
                isUnseen={item.isUnseen}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Programme;
