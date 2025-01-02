import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import {useRouteError} from "react-router"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/ErrorPage";

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      {/*So now with outlet, we can remove the body component from here. This is added below in the createBrowserRouter routes config as children. SO when that page is opened, the header and footer will come for it.*/}
      <Outlet/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/ab",
        element: <About/>
      },
      {
        path: "/cu",
        element: <ContactUs/>
      }
    ],
    errorElement: <Error/>
  }
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);