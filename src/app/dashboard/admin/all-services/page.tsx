"use client";
import React, { useEffect } from "react";
import { Button, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ServiceTableDataType } from "@/types";
import OrderTable from "@/components/ui/OrderTable";

import {
  useDeleteServiceMutation,
  useLazyGetServicesQuery,
} from "@/redux/api/serviceApi";
import Loading from "@/app/loading";
export default function AllServices() {
  const [trigger, { data, isLoading }] = useLazyGetServicesQuery({});
  const [deleteService] = useDeleteServiceMutation();
  const columns: ColumnsType<ServiceTableDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <p style={{ color: "#1D94A4", fontWeight: "bold" }}>{text}</p>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      dataIndex: "_id",
      render: (text) => (
        <>
          <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => handleDelete(text)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];
  const handleDelete = async (id: string) => {
    if (id) {
      const res: any = await deleteService(id);
      if (res?.data) {
        message.success("Deleted Successfully");
        trigger({});
      } else message.error("Failed to delete");
    }
  };

  useEffect(() => {
    trigger({});
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <OrderTable columns={columns} data={data} />
    </>
  );
}
