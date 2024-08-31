import React from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../../../assets/pic/digi/logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//  تعریف شمای اعتبارسنجی با یاپ
const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Z\s\u0600-\u06FF]+$/, "نام فقط باید شامل حروف باشد.")
    .required("این فیلد الزامی است"),
  lastName: yup
    .string()
    .matches(/^[a-zA-Z\s\u0600-\u06FF]+$/, "نام خانوادگی فقط باید شامل حروف باشد.")
    .required("این فیلد الزامی است"),
  username: yup.string().required("این فیلد الزامی است"),
  email: yup.string().email("ایمیل معتبر نیست.").required("این فیلد الزامی است"),
  gender: yup.string().required("این فیلد الزامی است"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "شماره موبایل باید 11 رقم و فقط شامل عدد باشد.")
    .required("این فیلد الزامی است"),
  password: yup.string().required("این فیلد الزامی است"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور و تایید رمز عبور مطابقت ندارند.")
    .required("این فیلد الزامی است"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username.toLowerCase() === data.username.toLowerCase());

    if (userExists) {
      setMessage("یوزرنیم تکراری است.");
      return;
    }

    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username.toLowerCase(),
      email: data.email,
      gender: data.gender,
      phone: data.phone,
      password: data.password.toLowerCase(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("ثبت نام با موفقیت انجام شد.");
    setTimeout(() => {
      navigate("/digi/login");
    }, 700);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-5 text-center registerborder">
        <NavLink className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Home"
            title="Home"
            style={{
              width: "150px",
              height: "30px",
            }}
          />
        </NavLink>
        <h2 className="my-4">ثبت نام</h2>
        {message && <div className="alert alert-info mt-3">{message}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="firstName">نام</label>
            <input type="text" className="form-control" id="firstName" {...register("firstName")} />
            {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">نام خانوادگی</label>
            <input type="text" className="form-control" id="lastName" {...register("lastName")} />
            {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="username">یوزرنیم</label>
            <input type="text" className="form-control" id="username" {...register("username")} />
            {errors.username && <span className="text-danger">{errors.username.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">ایمیل</label>
            <input type="email" className="form-control" id="email" {...register("email")} />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="gender">جنسیت</label>
            <select className="form-control" id="gender" {...register("gender")}>
              <option value="">انتخاب کنید</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
            {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">شماره موبایل</label>
            <input type="tel" className="form-control" id="phone" {...register("phone")} />
            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">رمز عبور</label>
            <input type="password" className="form-control" id="password" {...register("password")} />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">تایید رمز عبور</label>
            <input type="password" className="form-control" id="confirmPassword" {...register("confirmPassword")} />
            {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
          </div>
          <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-primary my-2">
              ثبت نام
            </button>
            <NavLink to="/digi/login">
              <button type="button" className="btn btn-warning my-2 px-4 text-white">
                ورود
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
