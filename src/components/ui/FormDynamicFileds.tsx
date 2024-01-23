"use client";

import { Button, Col, Empty, Row } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormInput from "../Forms/FormInput";
import { useEffect } from "react";

const FormDynamicFields = ({
  name,
  type,
  first = "",
  second = "",
}: {
  name: string;
  type: string;
  first?: string;
  second?: string;
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <>
      <div>
        {fields.length > 0 ? (
          fields.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "5px",

                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {type === "single" ? (
                  <FormInput
                    name={name + "." + index + "."}
                    type="text"
                    placeholder={`Enter your ${name}`}
                  />
                ) : (
                  <>
                    <FormInput
                      name={name + "." + index + "." + first}
                      type="text"
                      placeholder={`Enter your ${first}`}
                    />
                    <FormInput
                      name={name + "." + index + "." + second}
                      type={name === "faq" ? "text" : "number"}
                      placeholder={`Enter your ${second}`}
                    />
                  </>
                )}

                <Button
                  type="primary"
                  onClick={() => remove(index)}
                  danger
                  style={{ margin: "5px 0px" }}
                >
                  Delete
                </Button>
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
      <div style={{ textAlign: "right" }}>
        <Button
          type="primary"
          style={{ background: "#1D94A4" }}
          onClick={() => append(undefined)}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default FormDynamicFields;
