import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items, ...props }) => {
  const [expandedIdx, setExpandedIdx] = useState(-1);

  const handleClick = (idx) => {
    setExpandedIdx((currentIdx) => (currentIdx === idx ? -1 : idx));
  };

  const renderedItems = items.map((item, idx) => {
    const isExpanded = idx === expandedIdx;

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(idx)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          <span className="text-xl">{item.label}</span>
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
        {isExpanded && <div className="p-5 border-b">{item.content}</div>}
      </div>
    );
  });

  return <div className="accordion border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
