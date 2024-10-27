import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./exercise-2/flower-style.css";
import store from "../src/exercise-1/store"; // Import your store
import App from "./App"; // Import your main App component
import AppShop from "../src/exercise-2/App-Shop";
// console.log(store);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <>
        {/* <App /> */}
        <AppShop />
      </>
    </StrictMode>
  </Provider>
);
