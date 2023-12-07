"use client";
import UploadImage from "@/components/ui/UploadImage";
import React from "react";
import "../../../styles/Profile.css";
import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function Profile() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.firstName.value);
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
            />
          </div>
          <div className="edit-profile-input">
            <p>Last Name</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="lastName"
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
            />
          </div>
          <div className="edit-profile-input">
            <p>Road No./Name</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="road"
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
            />
          </div>
          <div className="edit-profile-input">
            <p>Ward No.</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="ward"
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
            />
          </div>
          <div className="edit-profile-input">
            <p>City</p>
            <input
              type="text"
              className="edit-profile-input-field"
              name="city"
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
