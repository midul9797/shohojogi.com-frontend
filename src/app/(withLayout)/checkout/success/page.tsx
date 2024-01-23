import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { Result } from "antd";
import Link from "next/link";
import React from "react";

export default function Success() {
  return (
    <Result
      style={{ paddingTop: "120px" }}
      status="success"
      title="Order has been placed successfully"
      subTitle="Our expert will contact you as soon as possible."
      extra={[
        <Link href={"/home"} key="home">
          <ButtonPrimary text="Home" key="home"></ButtonPrimary>
        </Link>,
      ]}
    />
  );
}
