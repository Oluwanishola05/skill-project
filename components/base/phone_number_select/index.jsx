import * as React from "react";
import { Form } from "antd";
// import { PhoneInputModel } from "../../models/Input.class";
import PhoneInput from "react-phone-input-2";

const AntdPhoneNumberInput = ({
  name,
  placeholder,
  message,
  handleOnChange,
}) => {
  return (
    <Form.Item
      name={name}
      className="w-full"
      rules={[
        {
          required: true,
          message: "This field is required",
          len: 13,
        },
      ]}
    >
      <PhoneInput specialLabel={""} country={"ng"} />
    </Form.Item>
  );
};

export default AntdPhoneNumberInput;
