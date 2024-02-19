import {
  Box,
  FormLabel,
  TextField,
  TextFieldVariants,
  TextFieldProps,
  InputAdornment,
} from "@mui/material";

interface IInputTypeProps {
  boxClassName?: string;
  labelClassName?: string;
  label?: string;
  labeltext?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  variant?: TextFieldVariants;
  sx?: {};
  onChange: (e: React.ChangeEvent<any>) => void;
  value?: string;
  onBlur?: (e: React.ChangeEvent) => void;
  textfieldClassName?: string;
  error?: boolean | undefined;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
}
const InputField = (props: IInputTypeProps) => {
  const {
    boxClassName,
    label,
    labelClassName,
    labeltext,
    type,
    placeholder,
    id,
    name,
    variant,
    onChange,
    value,
    onBlur,
    textfieldClassName,
    error,
    helperText,
    fullWidth,
    startAdornment,
    sx,
  } = props;
  return (
    <Box className={boxClassName}>
      <FormLabel className={labelClassName}>{labeltext}</FormLabel>
      <TextField
        id={id}
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        variant={variant}
        className={textfieldClassName}
        fullWidth={fullWidth}
        sx={sx}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment: startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default InputField;
