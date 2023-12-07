"use client";

import { useState } from "react";
import { Avatar, Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";

import { getUserInfo } from "@/service/auth.service";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  //   const { role } = getUserInfo() as any;
  const role = "admin";

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={180}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {!collapsed && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "3vw auto",
          }}
        >
          <Link
            href={"/"}
            style={{ fontWeight: "bold", fontSize: "1.5vw", color: "white" }}
          >
            SHOHOJOGI.COM
          </Link>
        </div>
      )}
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
