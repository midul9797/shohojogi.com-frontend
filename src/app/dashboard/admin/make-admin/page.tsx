"use client";
import { useMakeAdminMutation } from "@/redux/api/profileApi";
import { Button, message } from "antd";
import React, { useState } from "react";

export default function MakeAdmin() {
  const [makeAdmin] = useMakeAdminMutation();
  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (e.target.email.value !== "") {
      const res: any = await makeAdmin({ email: e.target.email.value });

      if (res.data.count > 0) message.success("Admin Created Successfully");
      else if (res.data.count === 0) message.error("User not found");
      else message.error("failed to create admin");
      e.target.reset();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <form onSubmit={(e) => handleCreate(e)}>
        <p style={{ fontSize: "1.6vw", fontWeight: "bold" }}>Create Admin</p>
        <p style={{ fontSize: "1vw", color: "grey" }}>
          Enter user email address whom you want to make admin
        </p>
        <input
          type="text"
          name="email"
          placeholder="Email"
          style={{
            width: "300px",
            marginTop: "2vw",
            padding: "0.7vw 1vw",
            border: "1px solid cadetblue",
          }}
        />
        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: "2vw auto",
              backgroundColor: "cadetblue",
            }}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
