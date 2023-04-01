import Accordion from "../components/Accordion";

const items = [
  { id: 0, label: "Can I use React on a project?", content: "You can use React on whatever you want." },
  {
    id: 1,
    label: "Is React good for building web apps?",
    content: "Beats jQuery, DOM manipulation, and building your own framework.",
  },
  { id: 2, label: "How long has React been around", content: "Maybe 8 years or so" },
];

const AccordionPage = () => {
  return (
    <div className="accordion-page">
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
