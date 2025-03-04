import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import HomePage from "./pages/home/homePage";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <HomePage />
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
