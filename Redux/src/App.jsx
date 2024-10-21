import "./App.css";
import Buttoncreator from "./exercise-1/components/Button";
function App() {
  return (
    <>
      <section>
        {" "}
        <h1>0</h1>
        <div>
          <Buttoncreator props={"Incerement"} />
          <Buttoncreator props={"Decrement"} />
          <Buttoncreator props={"Reset"} />
        </div>
      </section>
    </>
  );
}

export default App;
