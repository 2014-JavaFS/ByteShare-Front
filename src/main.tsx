import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBlock from "./components/test.tsx";
import ReactDOM from "react-dom/client";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import NewPostForm from "./pages/newPostForm.tsx";
import UserFeedbackForm from "./components/userFeedback/newUserFeedback/userFeedbackForm.tsx";
import UserProfile from "./pages/userProfile.tsx";
import RegisterForm from "./pages/register.tsx";
import LoginForm from "./pages/login.tsx";
import Favorited from "./pages/favorited.tsx";
import Following from "./pages/following.tsx";
import FullRecipePage from "./pages/fullRecipePage.tsx";
import SearchResults from "./pages/searchResults.tsx";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<UserProfile />} />
              <Route path="1" element={<TestBlock props={{num:1}} />} />
              <Route path="2" element={<TestBlock props={{num:2}} />} />
              <Route path="3" element={<TestBlock props={{num:3}} />} />
              <Route path="4" element={<TestBlock props={{num:4}} />} />
              <Route path="search/:searchTerm" element={<SearchResults />} />
              <Route path="recipe/:recipeId" element={<FullRecipePage />} />
              <Route path="newpost" element={<NewPostForm />} />
              <Route path="following" element={<TestBlock props={{num:1}} />} />
              <Route path="createUserFeedback" element={<UserFeedbackForm/>} />
              <Route path="register" element={<RegisterForm/>} />
              <Route path="login" element={<LoginForm/>} />
              <Route path="following" element={<Following/>} />
              <Route path="favorited" element={<Favorited />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
