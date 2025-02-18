import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {useRouteError} from "react-router"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  //Suppose we have a state variable, through which using a API data, we need to change our context.

  const [userName, SetUserName] = useState();

  // Lets assume we get data through API
  useEffect(()=>{
    //Assume API call is made here and we received data
    const data = {
      name: "Soumyesh Panda",
    };
    SetUserName(data.name);
  },[]);
  //Using UserContext.provider we are modifying the context data. Now in entire app we will have this updated data.
  // Redux - wrapped all with in provider and passed the store as a props to it. If only few components need the the store, only wrap those with in Provider.
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, SetUserName}}>
        <div className="app">
          <Header/>
          {/*So now with outlet, we can remove the body component from here. This is added below in the createBrowserRouter routes config as children. SO when that page is opened, the header and footer will come for it.*/}
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart/>
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