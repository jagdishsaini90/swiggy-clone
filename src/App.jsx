import "./App.css";
import Locate from "./pages/locate";
import Footer from "./pages/footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import Header from "./components/header";
import Search from "./pages/search";
import RestaurantPage from "./pages/restaurant";
import Collections from "./pages/collections";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/locate",
    element: <Locate />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <Search />
      </>
    ),
  },
  {
    path: "/restaurants/:name",
    element: (
      <>
        <Header />
        <RestaurantPage />
      </>
    ),
  },
  {
    path: "/collections/:id",
    element: (
      <>
        <Header />
        <Collections />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
