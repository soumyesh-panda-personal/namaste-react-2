import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
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
      <Body/>
      <About/>
    </div>
  )
};
// Creation and configs for routes
//createbrowserRouter takes in some configs, which is a list of object or array of objects. Each object defines a path and what happens in that path.
//RouterProvider - this provides the routing configs to our app

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/> // In case when there is error in this route, flow will got to error component.
  },
  {
    path: "/ab",
    element: <About/>
  },
  {
    path: "/cu",
    element: <ContactUs/>
  }
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
//Instead of directly rendering the AppLayout, now we will use routerprovider component to provide the routes based on configurations from createBrowserRouter
//root.render(<RouterProvider router={appRouter}/>);