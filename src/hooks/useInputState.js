import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  //   const handleChnage = (e) => {
  //     setValue(e.target.value);
  //   };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  //   return [value, handleChnage];
  return {
    value,
    onChange
  };
};

export default useInputState;
