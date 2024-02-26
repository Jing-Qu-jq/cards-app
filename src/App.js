import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ViewAll from "./pages/ViewAll";
import Paginated from "./pages/Paginated";
import Layout from "./pages/Layout";

export default function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route
                          index
                          exact
                          element={<ViewAll />}
                      />
                      <Route
                          exact
                          path="paginated"
                          element={<Paginated />}
                      />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}
