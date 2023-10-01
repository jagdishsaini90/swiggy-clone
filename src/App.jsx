import "./App.css";
import Locate from "./pages/locate";
import Footer from "./pages/footer";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import Search from "./pages/search";
import RestaurantPage from "./pages/restaurant";
import Collections from "./pages/collections";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./pages/auth/private";
import Error from "./pages/error";
import Cart from "./pages/cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />}>
      <Route
        path="locate"
        element={
          <>
            <Locate />
            <Footer />
          </>
        }
      />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/restaurants/:name" element={<RestaurantPage />} />
        <Route path="/collections/:id" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
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
