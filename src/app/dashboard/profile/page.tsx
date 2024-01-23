"use client";
import UploadImage from "@/components/ui/UploadImage";
import React, { useEffect, useState } from "react";
import "../../../styles/Profile.css";
import { HomeOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Spin, message } from "antd";
import {
  useLazyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
export default function Profile() {
  const [trigger, { data, isLoading, isFetching }] = useLazyProfileQuery({});
  const [updateProfile, { isLoading: saving }] = useUpdateProfileMutation();
  const handleSubmit = async (values: any) => {
    Object.keys(values).forEach(
      (key) => values[key] === undefined && delete values[key]
    );
    Object.keys(values.address).forEach(
      (key) => values.address[key] === undefined && delete values.address[key]
    );
    if (values.address && data.address) {
      let address = { ...data.address };
      Object.keys(values.address).forEach(
        (key) => (address[key] = values.address[key])
      );
      values.address = address;
    }
    const res: any = await updateProfile({ ...values });
    if (res?.data?.email) {
      message.success("Saved");

      trigger({});
    } else message.error("failed to save");
  };
  useEffect(() => {
    if (saving) message.info("Saving...");
  }, [saving]);
  useEffect(() => {
    trigger({});
  }, []);

  return (
    <Form submitHandler={handleSubmit}>
      <div className="profile-page">
        <div>
          <p
            style={{ fontSize: "2vw", fontWeight: "bold", marginBottom: "2vw" }}
          >
            Edit Profile
          </p>
          {isLoading || data === undefined || isFetching ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <Spin></Spin>
              </div>

              <br />
            </>
          ) : (
            <>
              <div className="edit-profile-inputs">
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    name="first_name"
                    label="First Name"
                    defaultValue={data?.first_name}
                  />
                </div>
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    name="last_name"
                    label="Last Name"
                    defaultValue={data?.last_name}
                  />
                </div>
              </div>
              <div>
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    name="email"
                    label="Email"
                    value={data?.email}
                  />
                </div>
              </div>{" "}
              <div>
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    label="Contact Number"
                    name="contactNo"
                    defaultValue={data?.contactNo}
                  />
                </div>
              </div>
              <div className="edit-profile-inputs">
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    label="House"
                    name="address.house"
                    defaultValue={data?.address?.house}
                  />
                </div>
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    label="Road"
                    name="address.road"
                    defaultValue={data?.address?.road}
                  />
                </div>
              </div>
              <div className="edit-profile-inputs">
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    label="Block"
                    name="address.block"
                    defaultValue={data?.address?.block}
                  />
                </div>
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    label="Ward"
                    name="address.ward"
                    defaultValue={data?.address?.ward}
                  />
                </div>
              </div>
              <div className="edit-profile-inputs">
                <div className="edit-profile-input">
                  <FormInput
                    type="number"
                    label="Zip Code"
                    name="address.zip"
                    defaultValue={data?.address?.zip}
                  />
                </div>
                <div className="edit-profile-input">
                  <FormInput
                    type="text"
                    label="City"
                    name="address.city"
                    defaultValue={data?.address?.city}
                  />
                </div>
              </div>
            </>
          )}
          <Button
            disabled={saving}
            type="primary"
            style={{ margin: "1vw" }}
            htmlType="submit"
            className="save-btn"
          >
            {saving ? <LoadingOutlined /> : "Save"}
          </Button>
        </div>
        <UploadImage name="profileImg"></UploadImage>
      </div>
    </Form>
  );
}
