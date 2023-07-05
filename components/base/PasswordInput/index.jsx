import * as React from "react";
import { Form, Input } from "antd";

const PasswordInput = ({ name, placeholder, message, pattern }) => {
  return (
    <Form.Item
      name={name}
      className="w-full lg:w-[200px]"
      rules={[
        {
          required: true,
          message: message,
          pattern: pattern,
          // message:
          //   "Please input your Iklass password which must have a minimum of 6 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
          // pattern:
          min: 6,
        },
      ]}
    >
      <Input.Password
        placeholder={placeholder ?? "Password"}
        className="password-input px-[16px] py-[5px] h-[100px] border text-brand-gray-200   focus:outline-none border-gray-200 outline:border-brand-200 rounded-md focus:border-brand-200 placeholder:text-sm placeholder:text-gray-600 placeholder:font-normal"
      />
    </Form.Item>
  );
};

export default PasswordInput;
