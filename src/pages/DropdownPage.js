import { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);

  return <Dropdown options={options} value={selected} onChange={setSelected} />;
};

export default DropdownPage;
