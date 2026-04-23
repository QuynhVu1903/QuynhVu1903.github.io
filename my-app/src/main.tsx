import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import LoginPage from "./pages/login.tsx";
import RegisterPage from "./pages/register.tsx";
import UsersPage from "./pages/users.tsx";
import BookPage from "./pages/book.tsx";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.tsx";
import ErrorPage from "./pages/error.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children không có path: mặc định ứng với cha (có đường link URL /)
    //quy định 1 thằng con đặc biệt kế thừa lại cha, những con còn lại sẽ ko
    //kế thừa => React Router sẽ biết render dữ liệu 1 cách chính xác
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/book",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
