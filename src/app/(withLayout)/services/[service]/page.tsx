import { Breadcrumb, Button, Collapse, CollapseProps, Modal } from "antd";
import React from "react";
import "../../../../styles/ServiceDetailsPage.css";
import Image from "next/image";
import image from "../../../../assets/appliance-repair.svg";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import HowItWorks from "@/components/ui/HowItWorks";
import Link from "next/link";

export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];
  return (
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
                title: `• ${params.service}`,
              },
            ]}
          />
          <p style={{ fontSize: "3vw", fontWeight: "bold" }}>
            House <span className="gradient-span">Shifting</span> Service
          </p>
          <div
            style={{
              display: "flex",
              margin: "2vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="service-details-tagline-checked">
              <CheckOutlined />
            </div>
            <p style={{ fontSize: "1.5vw" }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              margin: "2vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="service-details-tagline-checked">
              <CheckOutlined />
            </div>
            <p style={{ fontSize: "1.5vw" }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              margin: "2vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="service-details-tagline-checked">
              <CheckOutlined />
            </div>
            <p style={{ fontSize: "1.5vw" }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div
            style={{
              margin: "0 auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href={`/add-to-cart/${params.service}`}>
              <button className="cart-btn">
                Add To Cart <ShoppingCartOutlined />
              </button>
            </Link>
          </div>
        </div>

        <Image src={image} alt={`${params.service}`} />
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
            defaultActiveKey={["1"]}
            ghost
            items={items}
            expandIconPosition="end"
          />
        </div>
      </div>
      <HowItWorks image={image} />
      <div className="service-details-one">
        <div className="service-overview"></div>
        <div id="details">
          <p style={{ fontSize: "2vw" }}>Details</p>
          <br />
          <p>
            Planning a hassle-free house shifting in Bangladesh? Look no
            further! SHOHOJOGI.COM offers top-notch house shifting services at
            competitive prices, ensuring a safe and seamless relocation
            experience.
          </p>
          <p
            style={{ color: "blueviolet", fontSize: "1.6vw", padding: "2vw 0" }}
          >
            Our Home Shifting Service:{" "}
          </p>
          <p style={{ color: "blueviolet", fontSize: "1.4vw" }}>
            Home Shifting Service for Families:{" "}
          </p>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "2vw",
              padding: "2vw 0",
            }}
          >
            <li>Competitive pricing for safe relocation from your doorstep.</li>
            <li>Competitive pricing for safe relocation from your doorstep.</li>
            <li>Competitive pricing for safe relocation from your doorstep.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
