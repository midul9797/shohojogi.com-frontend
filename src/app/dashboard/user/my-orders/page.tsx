"use client";
import OrderTable from "@/components/ui/OrderTable";
import { OrderTableDataType } from "@/types";
import { Button, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
let colors = ["geekblue", "green", "volcano"];
const columns: ColumnsType<OrderTableDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <p style={{ color: "cadetblue", fontWeight: "bold" }}>{text}</p>
    ),
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Services",
    key: "services",
    dataIndex: "services",
    render: (_, { services }) => (
      <>
        {services.map((tag, index) => {
          let color = colors[index % 3];
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Button type="primary" style={{ backgroundColor: "red" }}>
        Cancel
      </Button>
    ),
  },
];

const data: OrderTableDataType[] = [
  {
    key: "1",
    name: "John Brown",
    contact: "01891662526",
    address: "New York No. 1 Lake Park",
    services: ["House Shifting", "Cleaning"],
  },
  {
    key: "2",
    name: "Jim Green",
    contact: "01891662526",
    address: "London No. 1 Lake Park",
    services: ["Plumbing"],
  },
  {
    key: "3",
    name: "Joe Black",
    contact: "01891662526",
    address: "Sydney No. 1 Lake Park",
    services: ["Appliance Repair"],
  },
];
export default function MyOrders() {
  return (
    <>
      <OrderTable columns={columns} data={data} />
    </>
  );
}
