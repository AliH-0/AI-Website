import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <ButtonGradient />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow:hidden">
        <Header />
      </div>
    </>
  );
};

export default App;
