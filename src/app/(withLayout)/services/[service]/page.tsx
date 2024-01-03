"use client";
import { Breadcrumb, Button, Collapse, CollapseProps, Modal } from "antd";
import React, { Suspense, useEffect } from "react";
import "../../../../styles/ServiceDetailsPage.css";
import Image from "next/image";
import image from "../../../../assets/appliance-repair.svg";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import HowItWorks from "@/components/ui/HowItWorks";
import Link from "next/link";
import Loading from "@/app/loading";
import d from "@/assets/data.json";
import Shifting1 from "@/assets/HouseShiftingDetails1.svg";
import Shifting2 from "@/assets/HouseShiftingDetails2.svg";
import Appliance1 from "@/assets/HomeApplianceDetails1.svg";
import Appliance2 from "@/assets/HomeApplianceDetails2.svg";
import Cleaning1 from "@/assets/HomeCleaningDetails1.svg";
import Cleaning2 from "@/assets/HomeCleaningDetails2.svg";
import Plumbing1 from "@/assets/plumbingDetails1.svg";
import Plumbing2 from "@/assets/plumbingDetails2.svg";
import Electrician1 from "@/assets/electricianDetails1.svg";
import Electrician2 from "@/assets/electricianDetails2.svg";
export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  let data,
    idx = 0;
  const images = [
    [Shifting1, Shifting2],
    [Appliance1, Appliance2],
    [Cleaning1, Cleaning2],
    [Plumbing1, Plumbing2],
    [Electrician1, Electrician2],
  ];
  if (params.service === "house-shifting") {
    data = d[0];
    idx = 0;
  } else if (params.service === "home-appliance") {
    data = d[1];
    idx = 1;
  } else if (params.service === "home-cleaning") {
    data = d[2];
    idx = 2;
  } else if (params.service === "plumbing") {
    data = d[3];
    idx = 3;
  } else if (params.service === "electrician") {
    data = d[4];
    idx = 4;
  }

  const details = data?.details as string | "";
  const items: CollapseProps["items"] = [];

  if (items.length === 0) {
    data?.faq.map((f, index) => {
      items.push({
        key: index,
        label: (
          <p style={{ fontWeight: "bold", fontSize: "1.4vw" }}>{f.question}</p>
        ),
        children: (
          <div
            dangerouslySetInnerHTML={{ __html: f.answer }}
            style={{ lineHeight: "2.5" }}
          ></div>
        ),
      });
    });
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="service-details-page">
        <div className="service-details-banner">
          <div className="service-details">
            <Breadcrumb
              separator=" "
              style={{ fontSize: "1.3vw" }}
              items={[
                {
                  title: "• Home",
                  href: "/",
                },
                {
                  title: `• ${data?.title}`,
                },
              ]}
            />
            <p style={{ fontSize: "3vw", fontWeight: "bold" }}>
              {data?.title.trim().split(" ")[0]}{" "}
              <span className="gradient-span">
                {data?.title.trim().split(" ")[1]}
              </span>{" "}
              Service
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {data?.taglines.map((text) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    margin: "0.5vw",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="service-details-tagline-checked">
                    <CheckOutlined />
                  </div>
                  <p style={{ fontSize: "1.3vw" }}>{text}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                margin: "0 auto",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "2vw",
              }}
            >
              <Link href={`/add-to-cart/${params.service}`}>
                <button className="cart-btn">
                  Add To Cart <ShoppingCartOutlined />
                </button>
              </Link>
            </div>
          </div>

          <Image
            style={{ width: "50%" }}
            src={images[idx][0]}
            alt={`${data?.title}`}
          />
        </div>
        <div className="service-details-one">
          <div className="service-overview">
            <p style={{ fontSize: "2vw" }}>Service Overview</p>
            <a href="#faq">FAQ</a>
            <br />
            <a href="#details">Details</a>
          </div>
          <div id="faq">
            <p style={{ fontSize: "2vw" }}>FAQ</p>
            <Collapse
              defaultActiveKey={["0"]}
              ghost
              items={items}
              expandIconPosition="end"
            />
          </div>
        </div>
        <HowItWorks image={images[idx][1]} width="100%" />
        <div className="service-details-one">
          <div className="service-overview"></div>
          <div id="details">
            <p style={{ fontSize: "2vw" }}>Details</p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: details }}></div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
