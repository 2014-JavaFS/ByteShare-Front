import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBlock from "./components/test.tsx";
import ReactDOM from "react-dom/client";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts"; 

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<TestBlock props={{num:1,title:"Profile"}} />} />
              <Route path="1" element={<TestBlock props={{num:1,title:"1"}} />} />
              <Route path="2" element={<TestBlock props={{num:2,title:"2"}} />} />
              <Route path="3" element={<TestBlock props={{num:3,title:"3"}} />} />
              <Route path="recipe" element={{/*PUT YOUR COMPONENT HERE*/}} />
              <Route path="newpost" element={<TestBlock props={{num:1,title:"New Post"}} />} />
              <Route path="following" element={<TestBlock props={{num:1,title:"Following"}} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
