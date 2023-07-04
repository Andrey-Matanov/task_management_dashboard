import React from "react";

import "./App.css";
import MiniDrawer from "./components/MiniDrawer";
import CustomRouter from "./components/CustomRouter";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
            <MiniDrawer children={<CustomRouter />} />
        </Provider>
    );
}
export default App;
