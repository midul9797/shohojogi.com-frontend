"use client";
import UploadImage from "@/components/ui/UploadImage";
import React from "react";
import "../../../styles/Profile.css";
import { HomeOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
export default function Profile() {
  const { data } = useProfileQuery({}) as any;
  const [updateProfile] = useUpdateProfileMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res: any = await updateProfile({
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      contactNo: e.target.contactNumber.value,
      address: {
        house: e.target.house.value,
        road: e.target.road.value,
        ward: e.target.ward.value,
        block: e.target.block.value,
        zip: e.target.zipCode.value,
        city: e.target.city.value,
      },
    });
    console.log({
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      contactNo: e.target.contactNumber.value,
      address: {
        house: e.target.house.value,
        road: e.target.road.value,
        ward: e.target.ward.value,
        zip: e.target.zipCode.value,
        city: e.target.city.value,
      },
    });
    if (res?.data?.id) message.success("Saved");
    else message.error("failed to save");
  };
  return (
    <div className="profile-page">
      <form className="edit-profile" onSubmit={handleSubmit}>
        <p style={{ fontSize: "2vw", fontWeight: "bold", marginBottom: "2vw" }}>
          Edit Profile
        </p>
        <div className="edit-profile-inputs">
          <div className="edit-profile-input">
            <p>First Name</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="firstName"
              defaultValue={data?.first_name}
            />
          </div>
          <div className="edit-profile-input">
            <p>Last Name</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="lastName"
              defaultValue={data?.last_name}
            />
          </div>
        </div>
        <div>
          <div className="edit-profile-input">
            <p>Email</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="email"
              value={data?.email}
            />
          </div>
        </div>{" "}
        <div>
          <div className="edit-profile-input">
            <p>Contact Number</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="contactNumber"
              defaultValue={data?.contactNo}
            />
          </div>
        </div>
        <div className="edit-profile-inputs">
          <div className="edit-profile-input">
            <p>House No./Name</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="house"
              defaultValue={data?.address?.house}
            />
          </div>
          <div className="edit-profile-input">
            <p>Road No./Name</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="road"
              defaultValue={data?.address?.road}
            />
          </div>
        </div>
        <div className="edit-profile-inputs">
          <div className="edit-profile-input">
            <p>Block</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="block"
              defaultValue={data?.address?.block}
            />
          </div>
          <div className="edit-profile-input">
            <p>Ward No.</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="ward"
              defaultValue={data?.address?.ward}
            />
          </div>
        </div>
        <div className="edit-profile-inputs">
          <div className="edit-profile-input">
            <p>Zip Code</p>
            <input
              type="number"
              className="edit-profile-input-field"
              name="zipCode"
              defaultValue={data?.address?.zip}
            />
          </div>
          <div className="edit-profile-input">
            <p>City</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="city"
              defaultValue={data?.address?.city}
            />
          </div>
        </div>
        <Button
          type="primary"
          style={{ margin: "1vw" }}
          htmlType="submit"
          className="save-btn"
        >
          Save
        </Button>
      </form>
      <UploadImage name="Midul"></UploadImage>
    </div>
  );
}
