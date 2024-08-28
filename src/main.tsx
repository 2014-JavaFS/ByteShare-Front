import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBlock from "./components/test.tsx";
import ReactDOM from "react-dom/client";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts"; 
//import NewPost from "./pages/newPost.tsx";
import NewPostForm from "./pages/newPostForm.tsx";
import TestTagBlock from "./components/testtagsdisplay.tsx";
import UserProfile from "./pages/userProfile.tsx";
import RegisterForm from "./pages/register.tsx";
import LoginForm from "./pages/login.tsx";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="1" element={<TestBlock props={{num:1}} />} />
              <Route path="2" element={<TestBlock props={{num:2}} />} />
              <Route path="3" element={<TestBlock props={{num:3}} />} />
              <Route path="4" element={<TestTagBlock/>} />
              <Route path="newpost" element={<NewPostForm />} />
              <Route path="register" element={<RegisterForm/>} />
              <Route path="login" element={<LoginForm/>} />
              <Route path="following" element={<TestBlock props={{num:1}} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
