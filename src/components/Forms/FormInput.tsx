"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  defaultValue?: string | string[] | undefined;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  size = "small",
  defaultValue,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <p style={{ padding: "8px 0px 5px 5px", fontSize: "1.2vw" }}>
        {label ? label : null}{" "}
        {required ? (
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        ) : null}
      </p>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              style={{
                fontSize: "1.2vw",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
              }}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              defaultValue={defaultValue ? defaultValue : ""}
              style={{
                fontSize: "1.2vw",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
              }}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
