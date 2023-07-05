import * as React from "react";
import { Form, Input } from "antd";

const EmailInput = ({ name, className }) => {
  return (
    <Form.Item
      name={name}
      className={className}
      rules={[
        {
          required: true,
          type: "email",
          message: "Please input your SkillOver correct email address!",
        },
      ]}
    >
      <Input
        type={"email"}
        placeholder="Email"
        className="email-input px-[16px] py-[5px] h-[40px] border text-brand-gray-200   focus:outline-none border-gray-200 outline:border-brand-200 rounded-md focus:border-brand-200 placeholder:text-sm placeholder:text-gray-600 placeholder:font-normal"
      />
    </Form.Item>
  );
};

export default EmailInput;
