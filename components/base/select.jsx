import React, { forwardRef, memo } from "react";
import { Form, Select } from "antd";
import { twMerge } from "tailwind-merge";

function SkillOverSelect({
  label,
  options,
  className,
  value,
  onChange,
  placeholder,
  disabled,
  name,
}) {
  const classes = twMerge(
    "tw-w-full tw-border  tw-focus:outline-none tw-border-brand-200 tw-cursor-pointer  tw-text-black tw-h-[49px] tw-rounded tw-shadow-md tw-font-normal tw-text-xs tw-md:text-sm",
    className
  );
  return (
    // <div className="tw-w-full tw-md:w-36 tw-grid tw-mb-4">
    //   <label className="tw-text-left tw-uppercase">{label}</label>
    //   <select
    //     className={classes}
    //     value={value}
    //     onChange={handleChange}
    //     disabled={disabled}
    //   >
    //     {options &&
    //       options.map((option) => (
    //         <option
    //           className="tw-capitalize"
    //           key={option.value}
    //           value={option.value}
    //         >
    //           {option.text}
    //         </option>
    //       ))}
    //   </select>
    // </div>
    <Form.Item
      name={name}
      className={className}
      rules={[
        {
          required: true,
          message: "This field is required",
        },
      ]}
    >
      <Select
        className="clever-select"
        size="large"
        showSearch
        // dropdownStyle={}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
      />
    </Form.Item>
  );
}

export { SkillOverSelect };
