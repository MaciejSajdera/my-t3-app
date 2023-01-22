import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Toggle({ onChange }: Props) {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <div className="form-control w-fit">
      <label className="label cursor-pointer">
        <span className="label-text"></span>
        <input
          type="checkbox"
          className="toggle-accent toggle"
          checked={isChecked}
          onClick={() => setIsChecked((prevState) => !prevState)}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Toggle;
