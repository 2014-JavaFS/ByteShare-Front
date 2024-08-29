import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import NewPostForm from "./pages/newPostForm.tsx";
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
              <Route path="search/:searchTerm" element={<SearchResults />} />
              <Route path="recipe/:recipeId" element={<FullRecipePage />} />
              <Route path="newpost" element={<NewPostForm />} />
              <Route path="following" element={<Following />} />
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="following" element={<Following />} />
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
