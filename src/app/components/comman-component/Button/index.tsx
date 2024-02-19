import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface ICommonButtonProps extends ButtonProps {
  label: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const CommonButton: React.FC<ICommonButtonProps> = ({
  children,
  label,
  ...rest
}: ICommonButtonProps) => {
  return (
    <Button {...rest}>
      {label}
      {children}
    </Button>
  );
};

export default CommonButton;
