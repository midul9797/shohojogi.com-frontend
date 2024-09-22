"use client";
import { Breadcrumb, Button, Collapse, CollapseProps, Modal } from "antd";
import React, { Suspense, useEffect } from "react";
import "../../../../styles/ServiceDetailsPage.css";
import Image from "next/image";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import HowItWorks from "@/components/ui/HowItWorks";
import Link from "next/link";
import Loading from "@/app/loading";
import { useGetServiceQuery } from "@/redux/api/serviceApi";
export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const { data, isLoading }: any = useGetServiceQuery({ id: params.service });
  if (isLoading) return <Loading />;
  const items: CollapseProps["items"] = [];

  if (items.length === 0) {
    data?.faq.map((f: any, index: number) => {
      items.push({
        key: index,
        label: (
          <p style={{ fontWeight: "bold", fontSize: "1.4vw" }}>
            {index + 1}.{f.question}
          </p>
        ),
        children: <div style={{ lineHeight: "2.5" }}>{f.answer}</div>,
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
              style={{ fontSize: "clamp(14px, 1.3vw, 20px)" }}
              items={[
                {
                  title: "• Home",
                  href: "/",
                },
                {
                  title: `• ${data?.name}`,
                },
              ]}
            />
            <p className="service-details-name">
              {data?.name.trim().split(" ")[0]}{" "}
              <span className="gradient-span">
                {data?.name.trim().split(" ")[1]}
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
              {data?.taglines.map((text: string) => (
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
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.3vw)" }}>
                    {text}
                  </p>
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
            width={300}
            height={300}
            src={data?.first_banner_img}
            alt={`First Banner Image`}
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
            <p style={{ fontSize: "clamp(1.25rem, 2vw, 2.5rem)" }}>FAQ</p>
            <Collapse
              defaultActiveKey={["0"]}
              ghost
              items={items}
              expandIconPosition="end"
            />
          </div>
        </div>
        <HowItWorks image={data?.second_banner_img} width="100%" />
        <div className="service-details-one">
          <div className="service-overview"></div>
          <div id="details">
            <div
              dangerouslySetInnerHTML={{ __html: data?.service_details }}
            ></div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
