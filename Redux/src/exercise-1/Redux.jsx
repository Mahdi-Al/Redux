import "../../src/APP.css";
import { useDispatch, useSelector } from "react-redux";
import Buttoncreator from "./components/Button";
import { add, mines, reset } from "./redux/actions/actionCreator";
// import { INCREMENT, RESET, DECREMENT } from "./redux/actions/actionTypes";
export default function Redux() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.count);
  console.log(data);
  const handleAdd = () => {
    dispatch(add());
  };

  const handleMinus = () => {
    dispatch(mines());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <section>
      {" "}
      <h1>{data}</h1>
      <div>
        <Buttoncreator props={"Increment"} onClick={handleAdd} />
        <Buttoncreator props={"Decrement"} onClick={handleMinus} />
        <Buttoncreator props={"Reset"} onClick={handleReset} />
      </div>
    </section>
  );
}
