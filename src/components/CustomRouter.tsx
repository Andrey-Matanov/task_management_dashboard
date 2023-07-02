import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="two" element={<PageTwo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
