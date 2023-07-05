import * as React from "react";
import { Form, Input } from "antd";

export const SkillOverInput = ({ name, placeholder, className, message }) => {
  return (
    <Form.Item
      name={name}
      className={className}
      rules={[
        {
          required: true,
          message: { message },
        },
      ]}
    >
      <Input
        type={"text"}
        placeholder={placeholder}
        className="capitalize rounded-md w-full text-sm text-left border-0 font-normal"
      />
    </Form.Item>
  );
};
