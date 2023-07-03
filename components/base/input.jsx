import * as React from "react";
import { Form, Input, message } from "antd";

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
        className="tw-capitalize tw-text-sm tw-text-left tw-mb-1 tw-font-normal
         tw-text-sm tw-text-left tw-mb-1 tw-font-normal tw-h-[49px]"
      />
    </Form.Item>
  );
};
