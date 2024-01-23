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
        <p style={{ fontSize: "2vw", fontWeight: "bold", marginBottom: "2vw" }}>
          New Service
        </p>
        <div
          style={{
            padding: "15px",
            margin: "15px",
          }}
        >
          <div className="">
            <p>
              Name
              <br />
            </p>
            <FormInput
              size="small"
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
              padding: "15px",
              marginTop: "15px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "20px 0",
              }}
            >
              <p style={{ marginBottom: "15px" }}>
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
                margin: "20px 0",
              }}
            >
              <p style={{ marginBottom: "15px" }}>
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
                margin: "20px 0",
              }}
            >
              <p style={{ marginBottom: "15px" }}>
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
              padding: "15px",
              margin: "29px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",

                marginBottom: "10px",
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
            padding: "15px",
            margin: "29px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",

              marginBottom: "10px",
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
            padding: "15px",
            margin: "29px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "10px",
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
            padding: "15px",
            margin: "29px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            Service Details
          </p>
          <DocEditor />
        </div>
        <Button
          disabled={creating}
          type="primary"
          style={{ margin: "1vw" }}
          htmlType="submit"
          className="save-btn"
        >
          {creating ? <LoadingOutlined /> : "Create"}
        </Button>
      </Form>
    </div>
  );
}
