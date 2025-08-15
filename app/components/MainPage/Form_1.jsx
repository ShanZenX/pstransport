import React from "react";

const Form_1 = () => {
  return (
    <form className="w-10/12 flex flex-wrap justify-center gap-1 items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-start ">
        <label htmlFor="input1">From</label>
        <input
          type="text"
          id="input1"
          name="input1"
          className="border border-black rounded p-2 "
        />
      </div>
      <div className="w-[2px] h-full bg-black"></div>

      <div className="flex flex-col items-start   ">
        <label htmlFor="input2">Drop</label>
        <input
          type="text"
          id="input1"
          name="input1"
          className="border border-black rounded p-2"
        />
      </div>
      <div className="w-[2px] h-full bg-black"></div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form_1;
