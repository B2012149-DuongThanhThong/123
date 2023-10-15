import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setIsLogin } from "../../redux/features/auth/authSlice";
import { clearAllToken, getAccessToken, getRefreshToken } from "../../utils";
import styles from "./Header.module.scss";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Hi<span>Phones</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const logoutUser = async () => {
    clearAllToken();
    dispatch(setIsLogin(false));
    navigate("/login");
  };

  useEffect(() => {
    if (getAccessToken() && getRefreshToken()) {
      dispatch(setIsLogin(true));
    }
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <div className="flex justify-between w-full items-center">
          <div>{logo}</div>

          <nav className="show-nav flex-1 justify-end">
            <div className={styles["header-right"]}>
              <span className={styles.links}>
                {!isLogin && (
                  <>
                    <NavLink to={"login"} className={activeLink}>
                      Login
                    </NavLink>

                    <NavLink to={"register"} className={activeLink}>
                      Register
                    </NavLink>
                  </>
                )}

                {isLogin && (
                  <button
                    className="bg-none px-4 py-1 outline-none border-none hover:bg-red-500 transition-all ease-in-out duration-300 hover:text-white cursor-pointer rounded-sm"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                )}
              </span>
              <span className={styles.cart}>
                <Link to="/cart">
                  <span className="mr-2">Cart</span>
                  <FaShoppingCart size={20} />
                </Link>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
