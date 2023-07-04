import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/auth/authApi";
import s from "./LoginForm.module.css";
import { Notify } from "notiflix";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const LoginForm = () => {
  const [loginUser] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "password":
        setPassword(value);
        break;

      case "email":
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser({ email, password }).unwrap();
      reset();
    } catch (error) {
      Notify.failure(`${error.data.message}`);
      reset();
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        <h2 className={s["title"]}>З поверненням!</h2>
        <form className={s["form"]} onSubmit={handleSubmit}>
          <label className={s["modal-form__label"]}>
            <span className={s["input__wrapper"]}>
              <input
                className={s["modal-form__input"]}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Твоя пошта"
                value={email}
                required
              />
              <MdOutlineEmail className={s["modal__icon"]} />
            </span>
          </label>

          <label className={s["modal-form__label"]}>
            <span className={s["input__wrapper"]}>
              <input
                className={s["modal-form__input"]}
                onChange={handleChange}
                type={show ? "text" : "password"}
                name="password"
                placeholder="Твій пароль"
                value={password}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#&*_+-]).{8,24}$"
                required
              />

              <RiLock2Line className={s["modal__icon"]} />

              <button
                type="button"
                className={s["button-hide"]}
                onClick={handleClick}
              >
                {show ? "Сховати" : "Показати"}
              </button>
            </span>
          </label>

          <button type="submit" className={s["button"]}>
            Увійти
          </button>

          <h4 className={s["h4"]}>
            Якщо у вас немає облікового запису,{" "}
            <NavLink to="/register" className={s["register"]}>
              зареєструйте
            </NavLink>{" "}
            його!
          </h4>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
