import { NavigationProvider } from "./context/navigation";
import SideBar from "./components/SideBar";
import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

const App = () => {
  return (
    <NavigationProvider>
      <div className="app container mx-auto grid grid-cols-6 gap-4 mt-4">
        <SideBar />
        <div className="col-span-5">
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/buttons">
            <ButtonPage />
          </Route>
          <Route path="/dropdown">
            <DropdownPage />
          </Route>
          <Route path="/accordion">
            <AccordionPage />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/counter">
            <CounterPage initialCount={0} />
          </Route>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default App;
