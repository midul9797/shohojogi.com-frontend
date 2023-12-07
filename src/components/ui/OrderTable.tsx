"use client";
import React from "react";
import { Table } from "antd";

export default function OrderTable({ columns, data }: any) {
  return (
    <div>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
}
