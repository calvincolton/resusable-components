import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElem = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElem.current) {
        return;
      }

      if (!divElem.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });

  const selectedLabel = value?.value ? value?.label : "Select...";

  return (
    <div ref={divElem} className="dropdown w-48 relative">
      <div
        onClick={() => setIsOpen((curr) => !curr)}
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
      >
        {selectedLabel}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

export default Dropdown;
