"use client";
import React, { useEffect } from "react";
import { Button, Space, Spin, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { OrderTableDataType } from "@/types";
import OrderTable from "@/components/ui/OrderTable";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useLazyGetOrdersQuery,
} from "@/redux/api/orderApi";
let colors = ["geekblue", "green", "volcano"];

export default function MangeOrders() {
  const [trigger, { data, isLoading }] = useLazyGetOrdersQuery({});
  const [deleteOrder] = useDeleteOrderMutation();
  const columns: ColumnsType<OrderTableDataType> = [
    {
      title: "Name",
      dataIndex: "customer",
      key: "first_name",
      render: (text) => (
        <p style={{ color: "#1D94A4", fontWeight: "bold" }}>
          {text.first_name}
        </p>
      ),
      responsive: ["lg"],
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      responsive: ["lg"],
    },
    {
      title: "Service",
      key: "service",
      dataIndex: "service",
    },
    {
      title: "Schedule Time",
      key: "schedule time",
      dataIndex: "delivery_time",
      responsive: ["md"],
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "total_amount",
      render: (text) => (
        <p style={{ fontWeight: "bold" }}>
          {text}
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>&#2547;</span>
        </p>
      ),
      responsive: ["md"],
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (text) => (
        <Button
          type="primary"
          style={{ backgroundColor: "red" }}
          onClick={() => handleDelete(text)}
        >
          Cancel
        </Button>
      ),
    },
  ];
  const handleDelete = async (id: string) => {
    if (id) {
      const res: any = await deleteOrder(id);
      if (res?.data) {
        message.success("Deleted Successfully");
        trigger({});
      } else message.error("Failed to delete");
    }
  };
  useEffect(() => {
    trigger({});
  }, []);
  console.log(data);
  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin></Spin>
      </div>
    );
  return (
    <>
      <OrderTable columns={columns} data={data} />
    </>
  );
}
