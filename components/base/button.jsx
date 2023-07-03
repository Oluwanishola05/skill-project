import React from "react";
// import { twMerge } from "tailwind-merge";

function Button({
  text,
  className,
  onClick,
  type,
  show,
  disabled,
  ...buttonProps
}) {
  // const classes = twMerge(
  //   "tw-bg-[#1b1464] tw-h-[48px] tw-font-bold tw-rounded-xl tw-text-white tw-hover:bg-gray-300 tw-text-center",
  //   className
  // );
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
      className="tw-bg-[#1b1464] tw-w-full tw-h-[48px] tw-font-bold tw-rounded-xl tw-text-white tw-hover:bg-gray-300 tw-text-center"
    >
      <div className="tw-flex tw-w-full tw-justify-center tw-flex-row ">
        <div className="tw-text-center tw-text-xl ">{text}</div>
        <div className="tw-ml-2 tw-mt-0.5">
          {show && (
            <svg
              className="tw-animate-spin tw-h-5 tw-w-5 tw-border-4 tw-rounded-full tw-mt-1 tw-border-t-brand-200 tw-border-l-brand-200 tw-border-r-brand-200 "
              viewBox="0 0 24 24"
            ></svg>
          )}
        </div>
      </div>
    </button>
  );
}

// function Button2({ text }) {
//   return (
//     <button className="bg-transparent uppercase font-bold border   h-14 pl-1 pr-1 sm:px-7   border-brand-300 rounded text-brand-300 text-xs sm:text-base">
//       <span className="h-4 w-4 mr-2 inline-flex border border-brand-300 rounded-full font-bold text-lg items-center justify-center">
//         <FontAwesomeIcon icon={faPlus} className="text-brand-300 h-4 w-5 " />
//       </span>
//       {text}
//     </button>
//   );
// }
export { Button };
