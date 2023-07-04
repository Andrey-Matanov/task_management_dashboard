import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "../pages/Projects";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
