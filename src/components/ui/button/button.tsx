import type { FC } from "react";
import clsx from "clsx";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={clsx("button", className)} onClick={onClick}>
      {children}
    </button>
  );
};
