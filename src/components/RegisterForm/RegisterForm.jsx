import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRegistrationUserMutation } from "../../redux/auth/authApi";
import s from "./RegisterForm.module.css";
import { Loading, Notify } from "notiflix";
import { useSelector } from "react-redux";
import { selectIsPending } from "../../redux/auth/authSlice";
import { MdOutlineEmail } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

const RegisterForm = () => {
  const [registerUser] = useRegistrationUserMutation();
  const isPending = useSelector(selectIsPending);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ name, email, password }).unwrap();
      Notify.success("Ви зареєструвалися. Підтвердьте свою пошту");
      reset();
    } catch (error) {
      Notify.failure(`${error.data.message}`);
      reset();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      {!isPending && Loading.remove()}
      <div>
        <h2 className={s["title"]}>Доєднуйся до нас!</h2>
        <form action="" className={s["form"]} onSubmit={handleSubmit}>
          <label className={s["modal-form__label"]}>
            <span className={s["input__wrapper"]}>
              <input
                className={s["modal-form__input"]}
                type="name"
                name="name"
                placeholder="Твоє ім'я"
                value={name}
                onChange={handleChange}
                required
              />
              <AiOutlineUser className={s["modal__icon"]} />
            </span>
          </label>

          <label className={s["modal-form__label"]}>
            <span className={s["input__wrapper"]}>
              <input
                className={s["modal-form__input"]}
                type="email"
                name="email"
                placeholder="Твоя пошта"
                value={email}
                onChange={handleChange}
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

          <div className={s["info"]}>
            Від 8 до 24 символів.
            <hr className={s["hr"]} />
            Має містити великі та малі літери, цифру та спеціальний символ.
            <hr className={s["hr"]} />
            Дозволені спеціальні символи: !, @, #, &, *, _, +, -
          </div>

          <button type="submit" className={s["button"]}>
            Зареєструватись
          </button>

          <h4 className={s["h4"]}>
            Якщо у вас є обліковий запис,{" "}
            <NavLink to="/login" className={s["login"]}>
              увійдіть
            </NavLink>
            !
          </h4>
        </form>
      </div>
      {isPending && Loading.circle()}
    </>
  );
};

export default RegisterForm;
