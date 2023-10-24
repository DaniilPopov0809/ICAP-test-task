
import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

const Header = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrap}`}>
        <a className={styles.logo} href="/">
          {/* <span className={styles.logo__partOne}>TaB</span><span className={styles.logo__partTwo}>le</span> */}
          MaTRiX
        </a>
        {isLoggedIn && <div className={styles.header__menu}>
          <p className={styles.header__description}>Welcome, Neo!</p>
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(logout(false))}
          >Logout</Button>
        </div>}
      </div>
    </header>
  );
};

export default Header;
