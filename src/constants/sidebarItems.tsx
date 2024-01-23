import type { MenuProps } from "antd";
import {
  DatabaseOutlined,
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

    {
      label: <p style={{ fontSize: "1vw" }}>Manage Services</p>,
      icon: <DatabaseOutlined />,
      key: `/dashboard/${role}/manage-services`,
      children: [
        {
          label: (
            <Link
              href={`/dashboard/${role}/add-service`}
              style={{ fontSize: "1vw" }}
            >
              Add Service
            </Link>
          ),
          key: `/dashboard/${role}/add-service`,
        },
        {
          label: (
            <Link
              href={`/dashboard/${role}/all-services`}
              style={{ fontSize: "1vw" }}
            >
              All Services
            </Link>
          ),

          key: `/dashboard/${role}/all-services`,
        },
      ],
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
  else if (role === "customer") return commonUserSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
