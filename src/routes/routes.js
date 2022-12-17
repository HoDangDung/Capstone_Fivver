import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/Home";
import WorkList from "../modules/WorkList";
import RootLayout from "../components/RootLayout";
import NotFound from "../components/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      // Phải setup up url khi search để nó trả về trang "danh-sach-cong-viec"
      { path: "/danh-sach-cong-viec/ten-cong-viec", element: <WorkList /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
