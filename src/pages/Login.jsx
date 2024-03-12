import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const action =
  (store) =>
  async ({ request }) => {
    console.log(store);
    console.log("login action called");
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      console.log(response);
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your details";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginAsGuestUSer = () => {
    try {
      const response = customFetch.post("/auth/local", {
        email: "smithchard00@gmail.com",
        password: "123456789",
      });
      dispatch(loginUser(response.data));
      toast.success("login successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error);
      toast.error("guest user login Error, Please Try Again");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <FormInput
          label="email"
          name="identifier"
          type="email"
          defaultValue={"stanleykanu505@gmail.com"}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          defaultValue={"123456"} //for testing, if the user dosen't want to register
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={loginAsGuestUSer}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?<Link to="/register">Register</Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
