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
        <p style={{ fontSize: "clamp(18px, 1.6vw, 32px)", fontWeight: "bold" }}>
          Create Admin
        </p>
        <p style={{ fontSize: "clamp(12px, 1vw, 16px)", color: "grey" }}>
          Enter user email address whom you want to make admin
        </p>
        <input
          type="text"
          name="email"
          placeholder="Email"
          style={{
            width: "clamp(200px, 40vw, 300px)",
            marginTop: "clamp(16px, 2vw, 32px)",
            padding: "clamp(7px, 0.7vw, 14px) clamp(10px, 1vw, 20px)",
            border: "1px solid #1D94A4",
          }}
        />
        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: "clamp(16px, 2vw, 32px) auto",
              backgroundColor: "#1D94A4",
            }}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
