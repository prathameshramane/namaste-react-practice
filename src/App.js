import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./store/appStore";
import Cart from "./components/Cart";

// Lazy loading
const LoginPage = lazy(() => import("./components/LoginPage"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prathamesh Ramane",
    email: "ppramane@gmail.com",
  });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header /> <Outlet /> <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<h1>Loading Login</h1>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
