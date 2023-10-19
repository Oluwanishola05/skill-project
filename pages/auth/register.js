import React, { useState } from "react";
import Auth from "layouts/Auth.js";
import { SkillOverInput } from "components/base/input";
import EmailInput from "components/base/email-input";
import PasswordInput from "components/base/PasswordInput";
import { DatePicker, Form, notification } from "antd";
import { signUp } from "Service/request";
import moment from "moment";
import { SkillOverSelect } from "components/base/select";
import AntdPhoneNumberInput from "components/base/phone_number_select";
import Router from "next/router";
import Link from "next/link";

export default function Register() {
  const [dob, setDob] = useState("");

  const genders = [
    {
      name: "Male",
      value: "male",
    },
    {
      name: "Female",
      value: "female",
    },
  ];

  const onFinish = (values) => {
    console.log(values);
    let signUpData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      dateOfBirth: values.dateOfBirth,
      location: values.location,
      gender: values.gender,
      phoneNumber: values.phoneNumber,
    };
    signUp(signUpData)
      .then((res) => {
        console.log(res);
        notification.success({
          message: "Success",
          description: `Congratulations ${res.data.firstName}!, you are welcome to Skill Over community!`,
        });

        Router.push("/auth/login");
      })

      .catch((err) => {
        console.log(err);
        notification.error({
          message: "Error",
          description: err.message,
        });
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setDob(dateString);

    // return Math.abs(ageDate.getUTCFullYear() - 1970)
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-xl font-bold">
                    SIGN UP
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  id="form_group"
                >
                  <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                    <div className="w-full mr-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        First Name
                      </label>
                      <SkillOverInput
                        name={"firstName"}
                        placeholder={"Please enter your full name"}
                        message={"kindly fill in your name"}
                      />
                    </div>
                    <div className="w-full ml-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs  ml-10 font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Last Name
                      </label>
                      <SkillOverInput
                        name={"lastName"}
                        placeholder={"Please enter your full name"}
                        message={"kindly fill in your name"}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                    <div className="relative w-full mb-3 mr-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>

                      <EmailInput
                        name={"email"}
                        placeholder={"Your Email Address"}
                      />
                    </div>
                    <div className="w-full  ml-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number
                      </label>
                      <AntdPhoneNumberInput name={"phoneNumber"} />
                    </div>
                  </div>

                  <div className={"w-full flex flex-col lg:flex-row lg:gap-6 "}>
                    <div className="flex w-full flex-col mr-3">
                      <h1 className="text-base font-medium text-[#4B5667]">
                        Gender:
                      </h1>
                      <SkillOverSelect
                        name="gender"
                        placeholder="Gender"
                        className="w-full"
                        options={genders}
                      />
                    </div>
                    <div className="flex w-full flex-col ml-3">
                      <h1 className="text-base font-medium text-[#4B5667]">
                        Date of Birth:
                      </h1>
                      <Form.Item
                        name="dateOfBirth"
                        className="w-full"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                        valuePropName={dob}
                      >
                        <DatePicker
                          className={"skill-date-picker"}
                          placeholder="Date of birth"
                          disabledDate={
                            (d) =>
                              !d || d.isAfter(moment().subtract(18, "years"))
                            // ||
                            // d.isSameOrBefore('1960-01-01')
                          }
                          format="YYYY-MM-DD"
                          // value={dob}
                          // defaultPickerValue={moment().subtract(18, 'years')}
                          onChange={onChange}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row  lg:justify-between">
                    <div className="w-full mr-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Location
                      </label>
                      <SkillOverInput
                        name={"location"}
                        placeholder={"Please enter your location"}
                        message={"kindly fill in your desired location"}
                      />
                    </div>
                    <div className="w-full mb-3 ml-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <PasswordInput
                        name={"password"}
                        message={
                          "Please input your Iklass password which must have a minimum of 6 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
                        }
                        pattern={
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
                        }
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      submit="button"
                    >
                      Create Account
                    </button>
                  </div>
                </Form>
              </div>
            </div>

            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2 text-left">
                <Link href="/auth/login">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Back To Login</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Register.layout = Auth;
