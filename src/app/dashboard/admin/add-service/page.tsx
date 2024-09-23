"use client";
import UploadImage from "@/components/ui/UploadImage";
import React from "react";
import "../../../../styles/Profile.css";
import { HomeOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormDynamicFields from "@/components/ui/FormDynamicFileds";
import DocEditor from "@/components/ui/DocEditor";
import { useAppSelector } from "@/redux/hooks";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
export default function AddService() {
  const { service_details } = useAppSelector((state) => state.docEditor) as any;
  const [addService, { isLoading: creating }] = useAddServiceMutation();
  const handleSubmit = async (values: any) => {
    const res: any = await addService({
      ...values,
      service_details: service_details,
    });

    if (res?.data?._id) message.success("Service Created Successfully");
    else message.error("Fail to create");
  };
  if (creating) message.info("Creating...");
  return (
    <div className="profile-page">
      <Form submitHandler={handleSubmit}>
        <p
          style={{
            fontSize: "clamp(18px, 1.6vw, 32px)",
            fontWeight: "bold",
            marginBottom: "clamp(16px, 2vw, 32px)",
          }}
        >
          New Service
        </p>
        <div
          style={{
            padding: "clamp(3px, 1vw, 20px)",
            margin: "clamp(5px, 1vw, 20px)",
          }}
        >
          <div className="">
            <p>
              Name
              <br />
            </p>
            <FormInput
              size="large"
              type="text"
              name="name"
              placeholder="Enter Service Name"
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "1px solid #d9d9d9",
              padding: "clamp(5px, 1vw, 20px)",
              marginTop: "clamp(10px, 1vw, 20px)",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "clamp(5px, 1vw, 20px) 0",
              }}
            >
              <p
                style={{
                  marginBottom: "clamp(10px, 1vw, 20px)",
                  fontSize: "clamp(10px, 1vw, 16px)",
                }}
              >
                Thumbnail
                <br />
              </p>
              <UploadImage name="thumbnail"></UploadImage>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "clamp(10px, 1vw, 20px) 0",
              }}
            >
              <p
                style={{
                  marginBottom: "clamp(10px, 1vw, 20px)",
                  fontSize: "clamp(10px, 1vw, 16px)",
                }}
              >
                First Banner
                <br />
              </p>
              <UploadImage name="first_banner_img"></UploadImage>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "clamp(10px, 1vw, 20px) 0",
              }}
            >
              <p
                style={{
                  marginBottom: "clamp(10px, 1vw, 20px)",
                  fontSize: "clamp(10px, 1vw, 16px)",
                }}
              >
                Second Banner
                <br />
              </p>
              <UploadImage name="second_banner_img" />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "92%",
              border: "1px solid #d9d9d9",
              padding: "clamp(10px, 1vw, 20px)",
              margin: "clamp(10px, 2vw, 40px)",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "clamp(12px, 1vw, 16px)",
                marginBottom: "clamp(10px, 1vw, 20px)",
              }}
            >
              Taglines
            </p>
            <FormDynamicFields name="taglines" type="single" first="tagline" />
          </div>
        </div>
        <div
          style={{
            width: "92%",
            border: "1px solid #d9d9d9",
            padding: "clamp(10px, 1vw, 20px)",
            margin: "clamp(10px, 2vw, 40px)",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "clamp(12px, 1vw, 16px)",
              marginBottom: "clamp(10px, 1vw, 20px)",
            }}
          >
            FAQ
          </p>
          <FormDynamicFields
            name="faq"
            type="double"
            first="question"
            second="answer"
          />
        </div>
        <div
          style={{
            width: "92%",
            border: "1px solid #d9d9d9",
            padding: "clamp(10px, 1vw, 20px)",
            margin: "clamp(10px, 2vw, 40px)",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "clamp(12px, 1vw, 16px)",
              marginBottom: "clamp(10px, 1vw, 20px)",
            }}
          >
            Options
          </p>
          <FormDynamicFields
            name="options"
            type="double"
            first="name"
            second="price"
          />
        </div>
        <div
          style={{
            width: "92%",
            border: "1px solid #d9d9d9",
            padding: "clamp(10px, 1vw, 20px)",
            margin: "clamp(10px, 2vw, 40px)",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "clamp(12px, 1vw, 16px)",
              marginBottom: "clamp(10px, 1vw, 20px)",
            }}
          >
            Service Details
          </p>
          <DocEditor />
        </div>
        <Button
          disabled={creating}
          type="primary"
          style={{ margin: "clamp(10px, 1vw, 20px)" }}
          htmlType="submit"
          className="save-btn"
        >
          {creating ? <LoadingOutlined /> : "Create"}
        </Button>
      </Form>
    </div>
  );
}
