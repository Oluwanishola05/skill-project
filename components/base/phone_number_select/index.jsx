import * as React from "react";
import { Form } from "antd";
// import { PhoneInputModel } from "../../models/Input.class";
import PhoneInput from "react-phone-input-2";
// import "./style.css";
import startsWith from "lodash.startswith";

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
          message: { message },
          len: 13,
        },
      ]}
    >
      <PhoneInput
        isValid={(inputNumber, country, countries) => {
          return countries.some((country) => {
            return (
              startsWith(inputNumber, country.dialCode) ||
              startsWith(country.dialCode, inputNumber)
            );
          });
        }}
        onChange={handleOnChange}
        placeholder="08036652427"
        specialLabel={""}
        country={"ng"}
      />
    </Form.Item>
  );
};

export default AntdPhoneNumberInput;
