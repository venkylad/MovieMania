import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { rootReducer } from "./reducers/rootReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

// add page number features
// add wishlist try local storage feature
// add login simple demo login
// change header moke it neat and clean and transperant with active tabs
// change cards text to display only when hovered and add zoom in animation
