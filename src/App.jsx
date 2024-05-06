import { useSelector } from "react-redux";
import Balance from "./components/Balance/Balance";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
export default function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <>
      <h1>Redux</h1>
      <Balance />
      <LangSwitcher />
      <p>Selected : {lang}</p>
    </>
  );
}
