import { Button } from "antd";
import React from "react";

export default function MakeAdmin() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
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
            style={{ margin: "2vw auto", backgroundColor: "cadetblue" }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
