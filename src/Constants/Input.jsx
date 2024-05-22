import { useEffect, useState } from "react";

const Input = ({ label, name, options, setState, id }) => {
  // console.log(name, options, id);
  const [selectOptions, setSelectOptions] = useState([]);
  useEffect(() => {
    setSelectOptions(options);
  }, [selectOptions, options]);
  // console.log(selectOptions.map((option) => console.log(option)));
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-normal pb-2">
        {label}
      </label>
      <select
        name={name}
        id={id}
        className="w-52 p-1.5 border rounded-md outline-none"
        onChange={(e) => setState(e, id)}
      >
        <option value="">Select</option>
        {selectOptions?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
export default Input;
