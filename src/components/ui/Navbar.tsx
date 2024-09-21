"use client";
import { ProfileFilled, UserOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Button, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import "@/styles/Navbar.css";
import { isLoggedIn, removeUserInfo } from "@/service/auth.service";
import { useLazyProfileQuery, useProfileQuery } from "@/redux/api/profileApi";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import ButtonPrimary from "./ButtonPrimary";
export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [trigger, { data }] = useLazyProfileQuery({});
  const allServices = useGetServicesQuery({});

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);
  console.log(data);
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
  const serviceItems: MenuProps["items"] = [];
  allServices.data?.map((item: any, idx: number) => {
    serviceItems.push({
      key: idx,
      label: (
        <Link
          href={`/services/${item?.route_name}`}
          style={{ fontSize: "1vw" }}
        >
          {item?.name}
        </Link>
      ),
    });
  });
  useEffect(() => {
    trigger({});
  }, [trigger]);
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
                src={data?.profileImg || <UserOutlined />}
                onClick={(e) => e?.preventDefault()}
              />
            </a>
          </Dropdown>
        ) : (
          <div className="navbar-login-signup">
            <Link href={"/login"} className="navbar-item">
              LOGIN
            </Link>
            <Link href={"/signup"} className="navbar-item">
              <ButtonPrimary text="SIGN UP"></ButtonPrimary>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
