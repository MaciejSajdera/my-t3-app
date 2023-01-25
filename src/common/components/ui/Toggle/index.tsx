import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toggle({ onChange, isChecked, setIsChecked }: Props) {
  return (
    <div className="form-control w-fit">
      <label className="label cursor-pointer">
        <span className="label-text"></span>
        <input
          type="checkbox"
          className="toggle-accent toggle"
          checked={isChecked}
          onClick={() => setIsChecked((prev) => !prev)}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Toggle;
