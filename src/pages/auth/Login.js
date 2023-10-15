import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImg from "../../assets/login.png";
import Card from "../../components/card/Card";
import { setIsLogin } from "../../redux/features/auth/authSlice";
import { showError } from "../../utils";
import styles from "./auth.module.scss";
import api from "../../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);
  const loginUser = async (e) => {
    e.preventDefault();

    await api
      .post("http://localhost:8000/users/login", { email, password })
      .then((response) => {
        const { result } = response.data;

        const { access_token, refresh_token } = result;
        localStorage.setItem("access_token", JSON.stringify(access_token));
        localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
        dispatch(setIsLogin(true));
        toast.success("Login Successfully...");
        navigate("/");
      })
      .catch((err) => {
        showError(err);
      });
  };

  return (
    <>
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
            </form>

            <span className={styles.register}>
              <p className="mr-2">Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
