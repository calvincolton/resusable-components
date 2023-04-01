import Button from "../components/Button";

const VARIANTS = ["primary", "secondary", "success", "warning", "danger"];

const ButtonPage = () => {
  const handleClick = (variant) => {
    console.log(`You clicked a ${variant} button.`);
  };

  return (
    <div className="button-page flex">
      <div className="m-4">
        {VARIANTS.map((variant) => (
          <Button
            key={variant}
            variant={variant}
            onClick={() => handleClick(variant)}
            className="mb-4 whitespace-nowrap"
          >
            My Button
          </Button>
        ))}
      </div>
      <div className="m-4">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} rounded className="mb-4 whitespace-nowrap">
            My Button
          </Button>
        ))}
      </div>
      <div className="m-4">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} outline className="mb-4 whitespace-nowrap">
            My Button
          </Button>
        ))}
      </div>
      <div className="m-4">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} rounded outline className="mb-4 whitespace-nowrap">
            My Button
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonPage;
