import { Dispatch, SetStateAction } from "react";
import { BurgerIcon } from "./BurgerIcon";

export const ToggleButton = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="absolute top-12 right-16 "
    >
      <BurgerIcon />
    </button>
  );
};
