import "../../exercise-1/style.css";
export default function Buttoncreator({ props, onClick }) {
  return <button onClick={onClick}>{props}</button>;
}
