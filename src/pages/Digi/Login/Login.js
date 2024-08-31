import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// تعریف شمای اعتبارسنجی با یاپ 
const schema = yup.object().shape({
  username: yup.string().required("این فیلد الزامی است"),
  password: yup.string().required("این فیلد الزامی است")
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.username === data.username.toLowerCase() && user.password === data.password.toLowerCase());

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify({ username: user.username }));
      setMessage("ورود موفقیت‌آمیز بود.");
      setTimeout(() => {
        navigate("/digi");
      }, 700);
    } else {
      setMessage("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-5 text-center registerborder">
        <h2 className="my-4">ورود</h2>
        {message && <div className="alert alert-info mt-3">{message}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">یوزرنیم</label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register("username")}
            />
            {errors.username && <span className="text-danger">{errors.username.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password")}
            />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>
          <button type="submit" className="btn btn-primary my-2">
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
