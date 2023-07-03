import * as React from "react";
import { Form, Input } from "antd";

const PasswordInput = ({ name, placeholder, message, pattern }) => {
  return (
    <Form.Item
      name={name}
      className="w-full relative "
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
        className="password-input tw-px-[16px] tw-py-[5px] tw-h-[48px] tw-border tw-text-brand-gray-200   tw-focus:outline-none tw-border-gray-200 tw-outline:border-brand-200 tw-rounded-md tw-focus:border-brand-200 tw-placeholder:text-sm tw-placeholder:text-gray-600 tw-placeholder:font-normal"
      />
    </Form.Item>
  );
};

export default PasswordInput;
