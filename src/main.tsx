import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBlock from "./components/test.tsx";
import ReactDOM from "react-dom/client";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import Profile from "./pages/profile.tsx";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="1" element={<TestBlock num={1} />} />
              <Route path="2" element={<TestBlock num={2} />} />
              <Route path="3" element={<TestBlock num={3} />} />
              <Route path="4" element={<TestBlock num={4} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
