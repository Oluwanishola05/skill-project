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
        className="email-input tw-px-[16px] tw-py-[5px] tw-h-[48px] tw-border tw-text-brand-gray-200   tw-focus:outline-none tw-border-gray-200 tw-outline:border-brand-200 tw-rounded-md tw-focus:border-brand-200 tw-placeholder:text-sm tw-placeholder:text-gray-600 tw-placeholder:font-normal"
      />
    </Form.Item>
  );
};

export default EmailInput;
