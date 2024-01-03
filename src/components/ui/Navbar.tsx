"use client";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Button, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import "@/styles/Navbar.css";
import { isLoggedIn, removeUserInfo } from "@/service/auth.service";
import { useProfileQuery } from "@/redux/api/profileApi";
export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { data } = useProfileQuery({});

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);
  const profileItems: MenuProps["items"] = [
    {
      label: (
        <p style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
          {data?.first_name} {data?.last_name}
        </p>
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
        <Button
          type="link"
          style={{ color: "red", fontWeight: "bold" }}
          onClick={() => {
            removeUserInfo("accessToken");
            setLoggedIn(false);
            message.success("User logged out successfully");
          }}
        >
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
        <Link href="/services/home-appliance" style={{ fontSize: "1vw" }}>
          Home Appliance
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
        {loggedIn ? (
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <Link href={"/login"} className="navbar-item">
              LOGIN
            </Link>
            <Link href={"/signup"} className="navbar-item">
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
