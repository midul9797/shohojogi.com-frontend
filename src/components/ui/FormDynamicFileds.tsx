"use client";

import { Button, Col, Empty, Row } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormInput from "../Forms/FormInput";
import { useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "@/styles/FormDynamicFields.css";
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
              <div key={index} className="form-dynamic-fields">
                {type === "single" ? (
                  <FormInput
                    size="large"
                    name={name + "." + index + "."}
                    type="text"
                    placeholder={`Enter your ${name}`}
                  />
                ) : (
                  <>
                    <FormInput
                      size="large"
                      name={name + "." + index + "." + first}
                      type="text"
                      placeholder={`Enter your ${first}`}
                    />
                    <FormInput
                      size="large"
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
                  style={{ margin: "clamp(2px, 0.5vw, 5px) 0px" }}
                >
                  <DeleteOutlined />
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
