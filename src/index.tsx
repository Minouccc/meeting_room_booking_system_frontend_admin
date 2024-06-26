import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./container/Index";
import { UserManage } from "./container/UserManage";
import { ErrorPage } from "./container/ErrorPage";
import { Login } from "./container/Login";
import { Menu } from "./container/Menu";
import { ModifyMenu } from "./container/ModifyMenu";
import { InfoModify } from "./container/InfoModify";
import { PasswordModify } from "./container/PasswordModify";
import { MeetingRoomManage } from "./container/MeetingRoomManage";
import { BookingManage } from "./container/BookingManage";
import { Statistics } from "./container/Statistics";

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Menu />,
        children: [
          {
            path: "/",
            element: <MeetingRoomManage />,
          },
          {
            path: "user_manage",
            element: <UserManage />,
          },
          {
            path: "meeting_room_manage",
            element: <MeetingRoomManage />,
          },
          {
            path: "booking_manage",
            element: <BookingManage />,
          },
          {
            path: "statistics",
            element: <Statistics />,
          },
        ],
      },
      {
        path: "/user",
        element: <ModifyMenu></ModifyMenu>,
        children: [
          {
            path: "info_modify",
            element: <InfoModify />,
          },
          {
            path: "password_modify",
            element: <PasswordModify />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
