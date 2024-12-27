import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import store from "./store/store.js";
import Repositories from "./pages/Repositories.jsx";
import CodeReview from "./pages/CodeReview.jsx";
import CloudSecurity from "./pages/CloudSecurity.jsx";
import HowtoUse from "./pages/HowtoUse.jsx";
import Settings from "./pages/Settings.jsx";
import AuthLayout from "./components/layout/AuthLayout.jsx";
import LoginWithProvider from "./components/login/LoginWithProvider.jsx";
import Support from "./pages/Support.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/:provider",
        element: (
          <AuthLayout authentication={false}>
            <LoginWithProvider />
          </AuthLayout>
        ),
      },
      {
        path: "/repos",
        element: (
          <AuthLayout authentication>
            <Repositories />
          </AuthLayout>
        ),
      },
      {
        path: "/code-review",
        element: (
          <AuthLayout authentication>
            <CodeReview />,
          </AuthLayout>
        ),
      },
      {
        path: "/cloud-security",
        element: (
          <AuthLayout authentication>
            <CloudSecurity />,
          </AuthLayout>
        ),
      },
      {
        path: "/docs",
        element: (
          <AuthLayout authentication>
            <HowtoUse />
          </AuthLayout>
        ),
      },
      {
        path: "/settings",
        element: (
          <AuthLayout authentication>
            <Settings />
          </AuthLayout>
        ),
      },
      {
        path: "/support",
        element: (
          <AuthLayout authentication>
            <Support />
          </AuthLayout>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
