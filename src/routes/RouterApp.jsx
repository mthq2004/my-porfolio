import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const router = createHashRouter([
  {
    path: "/", // 👉 không cần "my-porfolio" vì HashRouter xử lý khác
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);

export default router;
