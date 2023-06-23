import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRegistrationUserMutation } from "../../redux/auth/authApi";
import s from "./RegisterForm.module.css";
import { Loading, Notify } from "notiflix";
import { useSelector } from "react-redux";
import { selectIsPending } from "../../redux/auth/authSlice";

const RegisterForm = () => {
  const [registerUser] = useRegistrationUserMutation();
  const isPending = useSelector(selectIsPending);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

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
      <form action="" className={s["form"]} onSubmit={handleSubmit}>
        <label className={s["label"]}>
          <p className={s["paragraph"]}>Email</p>
          <input
            className={s["input"]}
            type="email"
            name="email"
            placeholder="noname@gmail.com"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={s["label"]}>
          <p className={s["paragraph"]}>Name</p>
          <input
            className={s["input"]}
            type="name"
            name="name"
            placeholder="John Smith"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={s["label"]}>
          <p className={s["paragraph"]}>Password</p>

          <div className="div">
            <input
              className={s["input-pass"]}
              onChange={handleChange}
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={password}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,24}$"
              required
            />
            <button
              type="button"
              className={s["button-hide"]}
              onClick={handleShow}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        <div className={s["info"]}>
          8 to 24 characters.
          <hr />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <hr />
          Allowed special characters: !, _, -, $
        </div>

        <button type="submit" className={s["button"]}>
          Register
        </button>

        <h4 className={s["h4"]}>
          If you have an account, <NavLink to="/login">login</NavLink>!
        </h4>
      </form>
      {isPending && Loading.circle()}
    </>
  );
};

export default RegisterForm;
