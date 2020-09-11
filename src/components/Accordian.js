import React, { useState } from "react";

let dc = [1,1,1];

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    dc[index]++;
    if(dc[index]%2!==0)
    {
        index=-1;
    }
    setActiveIndex(index);
    
  };

  const renderedItems = items.map((item, index) => {
   const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={(t) => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordian;
