import React from "react";

import "./App.css";
import MiniDrawer from "./components/MiniDrawer";
import CustomRouter from "./components/CustomRouter";

function App() {
    return <MiniDrawer children={<CustomRouter />} />;
}
export default App;
