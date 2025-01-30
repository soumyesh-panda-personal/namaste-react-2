import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {useRouteError} from "react-router"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

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
      },
      {
        path: "Gro",
        /*We need to wrap our component within Suspense component so that it will get called with lazy as a separate on demand call*/
        element: (<Suspense fallback={<h2>Loading...</h2>}>
            <Grocery/>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);