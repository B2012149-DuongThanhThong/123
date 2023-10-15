import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import { setIsLogin } from "../../redux/features/auth/authSlice";
import { showError } from "../../utils";
import api from "../../utils/api";
import styles from "./auth.module.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    sex: 0,
    phone_number: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    await api
      .post("http://localhost:8000/users/register", formData)
      .then((response) => {
        const { result } = response.data;

        const { access_token, refresh_token } = result;
        localStorage.setItem("access_token", JSON.stringify(access_token));
        localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
        dispatch(setIsLogin(true));
        toast.success("Register Successfully...");
        navigate("/");
      })
      .catch((err) => {
        showError(err);
      });
  };

  return (
    <>
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                required
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
              <div className="flex justify-between">
                <p>Date Of Birth</p>
                <input
                  type="datetime-local"
                  placeholder="Date Of Birth"
                  required
                  name="date_of_birth"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex ">
                <input
                  type="radio"
                  required
                  name="sex"
                  value={0}
                  onChange={handleInputChange}
                />
                <p>MALE</p>
                <input
                  className="ml-28"
                  type="radio"
                  required
                  name="sex"
                  value={1}
                  onChange={handleInputChange}
                />
                <p>FEMALE</p>
              </div>
              <button
                typeof="submit"
                className="--btn --btn-primary --btn-block"
              >
                Register
              </button>
            </form>
            <span className={styles.register}>
              <p>Already an account? </p>
              <Link to="/login" className="ml-2">
                Login
              </Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;
