import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/localeSlice";

export default function LangSwitcher() {
  /* Дістали значення */
  const lang = useSelector((state) => state.locale.lang);
  /* ВІдправка товару */
  const dispatch = useDispatch();

  return (
    <div>
      {/* обовязково action внизу changeLang  */}
      <select
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
