import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
