import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAppSelector } from "../hooks/redux";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";
import PageLoader from "../components/UI/PageLoader/PageLoader";
import { Suspense, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  //add timiout for PageLoader if good network connection
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isLoggedIn ? styles.isLogin : ''} ${styles.mainContainer}`}>
      <Header />
      <main className={`${styles.main}`}>
          <Suspense fallback={isLoading ? <PageLoader /> : null}>
            <Outlet />
          </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;