import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
const Home = lazy(() => import("./Pages/Home"));
const LoginSignUp = lazy(() => import("./Pages/LoginSignUp"));
const LogIn = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const ProFile = lazy(() => import("./Pages/Profile"));
const QRcode = lazy(() => import("./Pages/QRcode"));
const FollowTheStory = lazy(() => import("./Pages/FollowTheStory"));
const Resources = lazy(() => import("./Pages/Resources"));
const WishList = lazy(() => import("./Pages/WishList"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const NoMatch = lazy(() => import("./Components/NoMatch"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginsignup" element={<LoginSignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProFile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/followthestory" element={<FollowTheStory />} />
          <Route path="/qrcode" element={<QRcode />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
