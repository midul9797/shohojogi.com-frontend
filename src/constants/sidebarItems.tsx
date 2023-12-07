import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  SolutionOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link href={`/dashboard/profile`} style={{ fontSize: "1vw" }}>
          Profile
        </Link>
      ),
      key: "profile",
      icon: <UserOutlined />,
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: (
        <Link
          href={`/dashboard/${role}/manage-orders`}
          style={{ fontSize: "1vw" }}
        >
          Manage Orders
        </Link>
      ),
      icon: <TableOutlined />,
      key: `/dashboard/${role}/manage-orders`,
    },
    {
      label: (
        <Link
          href={`/dashboard/${role}/make-admin`}
          style={{ fontSize: "1vw" }}
        >
          Make Admin
        </Link>
      ),
      icon: <SolutionOutlined />,
      key: `/dashboard/${role}/make-admin`,
    },
  ];
  const commonUserSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: (
        <Link href={`/dashboard/${role}/my-orders`} style={{ fontSize: "1vw" }}>
          My Orders
        </Link>
      ),
      icon: <TableOutlined />,
      key: `/dashboard/${role}/my-orders`,
    },
  ];

  if (role === "admin") return commonAdminSidebarItems;
  else if (role === "user") return commonUserSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
