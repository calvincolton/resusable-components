import SortableTable from "../components/SortableTable";

const TABLE_DATA = [
  { name: "Orange", color: "bg-orange-500", score: 8 },
  { name: "Blueberry", color: "bg-blue-500", score: 10 },
  { name: "Lime", color: "bg-green-500", score: 9 },
  { name: "Apple", color: "bg-red-500", score: 7 },
];

const TABLE_CONFIG = [
  {
    label: "Name",
    render: (fruit) => fruit?.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (fruit) => <div className={`p-2 m-3 ${fruit?.color}`} />,
  },
  {
    label: "Score",
    render: (fruit) => fruit?.score,
    sortValue: (fruit) => fruit?.score,
  },
];

const keyFn = (fruit) => {
  return fruit.name;
};

const TablePage = () => {
  return (
    <div>
      <SortableTable data={TABLE_DATA} config={TABLE_CONFIG} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
