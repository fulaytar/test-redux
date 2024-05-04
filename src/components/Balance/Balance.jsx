import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/store";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

  /* тут ми дістаємо з стору через useSelector */
  return (
    <>
      <p>Balance : {balance}</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit +10</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw -5</button>
    </>
  );
}
