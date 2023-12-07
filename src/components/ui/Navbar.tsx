"use client";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Button } from "antd";
import Link from "next/link";
import React from "react";
import type { MenuProps } from "antd";
import "@/styles/Navbar.css";
export default function Navbar() {
  const admin = true;
  const profileItems: MenuProps["items"] = [
    {
      label: (
        <p style={{ fontWeight: "bold", fontSize: "1.2vw" }}>Moklasur Rahman</p>
      ),
      key: "0",
    },
    {
      label: <Link href={"/dashboard/profile"}>Dashboard</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Button type="link" style={{ color: "red", fontWeight: "bold" }}>
          LogOut
        </Button>
      ),
      key: "3",
    },
  ];
  const serviceItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/services/house-shifting" style={{ fontSize: "1vw" }}>
          House Shifting
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/services/home-cleaning" style={{ fontSize: "1vw" }}>
          Home Cleaning
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/services/plumbing" style={{ fontSize: "1vw" }}>
          Plumbing
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href="/services/appliance-servicing" style={{ fontSize: "1vw" }}>
          Appliance Servicing
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/services/electrician" style={{ fontSize: "1vw" }}>
          Electrician
        </Link>
      ),
    },
  ];

  const user = true;
  return (
    <div className="navbar">
      <Link href={"/"} className="navbar-logo">
        SHOHOJOGI.COM
      </Link>
      <div className="navbar-items">
        <Dropdown menu={{ items: serviceItems }} placement="bottomLeft">
          <a className="all-services" onClick={(e) => e.preventDefault()}>
            All Services
          </a>
        </Dropdown>
        {user ? (
          <Dropdown menu={{ items: profileItems }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar
                size="large"
                style={{ cursor: "pointer" }}
                icon={<UserOutlined />}
                onClick={(e) => e?.preventDefault()}
              />
            </a>
          </Dropdown>
        ) : (
          <Link href={"/login"} className="navbar-item">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}
