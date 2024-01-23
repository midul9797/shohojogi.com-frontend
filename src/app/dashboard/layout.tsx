"use client";
import React, { Suspense, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, ConfigProvider, Layout, Menu } from "antd";
import theme from "@/utils/theme/theme";
import SideBar from "@/components/ui/SideBar";
import Contents from "@/components/ui/Contents";
import Loading from "../loading";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb
                separator=" "
                style={{
                  fontSize: "1.3vw",
                  margin: "2vw 1vw",
                  fontWeight: "bold",
                }}
                items={[
                  {
                    title: "• Home",
                    href: "/",
                  },
                  {
                    title: `• Dashboard`,
                  },
                ]}
              />
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: "white",
                }}
              >
                <Contents>{children}</Contents>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              &copy; 2023 SHOHOJOGI | ALL RIGHTS RESERVED
            </Footer>
          </Layout>
        </Layout>
      </Suspense>
    </ConfigProvider>
  );
};

export default DashboardLayout;
