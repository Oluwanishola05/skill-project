import { Form, Input } from "antd";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export const SkillOTPInput = ({ otp, setOtp, name, message, placeholder }) => {
  // const [otp, setOtp] = useState("");

  return (
    // <OtpInput
    //   value={otp}
    //   onChange={setOtp}
    //   numInputs={4}
    //   renderSeparator={
    //     <span className="tw-items-center -tw-mt-5 tw-flex tw-mx-1">-</span>
    //   }
    //   renderInput={(props) => (
    //     <input
    //       className="tw-text-[#1b1464] bg-red-200 tw-text-5xl tw-px-7  "
    //       {...props}
    //     />
    //   )}
    // />
    <Form.Item
      name={name}
      rules={[
        {
          required: true,
          message: { message },
        },
      ]}
    >
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={
          <span className="tw-items-center  tw-flex tw-mx-1">-</span>
        }
        renderInput={(props) => (
          <input
            {...props}
            // className=
            // "tw-text-[#1b1464] bg-red-200 tw-px-7 -tw-mt-0 tw-pb-20  "
            className="tw-text-[#1b1464] tw-h-20 tw-w-20 tw-rounded-md -tw-mt-0 tw-text-5xl  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-[#1b1464]"
          />
        )}
      />
    </Form.Item>
  );
};
