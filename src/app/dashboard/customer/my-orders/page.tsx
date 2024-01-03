"use client";
import OrderTable from "@/components/ui/OrderTable";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { OrderTableDataType } from "@/types";
import { Button, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
let colors = ["geekblue", "green", "volcano"];
const columns: ColumnsType<OrderTableDataType> = [
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

const dat: OrderTableDataType[] = [
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
  const { data } = useGetOrdersQuery({});
  console.log(data);
  return (
    <>
      <OrderTable columns={columns} data={dat} />
    </>
  );
}
