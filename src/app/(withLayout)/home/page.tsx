"use client";

import CountUp from "react-countup";
import React, { Suspense } from "react";
import Image from "next/image";
import HomeBanner from "../../../assets/home-banner.svg";
import Support from "../../../assets/support.svg";
import Safe from "../../../assets/safe.svg";
import Glove from "../../../assets/gloves.svg";
import Mask from "../../../assets/mask.svg";
import WhyChooseUsBanner from "../../../assets/why-choose-use-banner.svg";
import HowItWorksBanner from "../../../assets/how-it-works-1.svg";
import "@/styles/HomePage.css";
import Link from "next/link";
import HowItWorks from "@/components/ui/HowItWorks";
import Reveal from "@/components/ui/Reveal";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import Loading from "@/app/loading";

export default function HomePage() {
  const { data, isLoading } = useGetServicesQuery({});
  if (isLoading) return <Loading />;
  return (
    <Suspense fallback={<Loading />}>
      <div className="home-page">
        <div className="home">
          <div className="home-left">
            <div className="home-headline">
              <Reveal>
                <span>Simplifying Your</span>
              </Reveal>
              <Reveal>
                <span className="gradient-span">{"Home's"} Needs.</span>
              </Reveal>
            </div>
            <Reveal>
              <p className="home-sub-headline">
                One Destination. Infinite Services. Order On Demand
              </p>
            </Reveal>
          </div>
          <Reveal width="fit-content">
            <div className="home-banner">
              <Image src={HomeBanner} alt="Home Banner"></Image>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <span
            className="gradient-span"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 3rem)",
              textAlign: "center",
              display: "block",
              fontWeight: "bold",
              margin: "3vw",
              width: "100%",
            }}
          >
            Top Services
          </span>
        </Reveal>
        <div className="services">
          {Array(4)
            .fill(1)
            .map((el, index) => (
              <Reveal key={index}>
                <Link href={`/services/${data ? data[index]?.route_name : ""}`}>
                  <div className="service">
                    <Image
                      width={150}
                      height={150}
                      className="service-image"
                      src={data ? data[index]?.thumbnail : ""}
                      alt={data ? data[index]?.name : ""}
                    />
                    <p
                      style={{
                        fontSize: "clamp(0.8rem, 1.5vw, 1.5rem)",
                        fontWeight: "bold",
                        width: "120%",
                      }}
                    >
                      {data ? data[index]?.name : ""}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>
        <Reveal>
          <div className="why-choose-us">
            <div className="why-choose-us-left">
              <p
                style={{
                  color: "#031E17",
                  fontSize: "clamp(0.8rem, 1vw, 1rem)",
                }}
              >
                WHY CHOOSE US
              </p>
              <br />
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "clamp(1.5rem, 3vw, 3rem)",
                  margin: "0 0 2.5vw 0",
                }}
              >
                Your <span className="gradient-span">Safety</span> matters to us
              </p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div className="safeties">
                  <div className="safety">
                    <Image
                      src={Support}
                      style={{
                        width: "clamp(2rem, 5vw, 5rem)",
                        height: "clamp(2rem, 5vw, 5rem)",
                        marginRight: "2vw",
                      }}
                      alt="24h Support"
                    ></Image>
                    <p>24H Support</p>
                  </div>
                  <div className="safety">
                    <Image
                      src={Mask}
                      style={{
                        width: "clamp(2rem, 5vw, 5rem)",
                        height: "clamp(2rem, 5vw, 5rem)",
                        marginRight: "2vw",
                      }}
                      alt="Masking"
                    ></Image>
                    <p>Masking</p>
                  </div>
                </div>
                <div className="safeties">
                  <div className="safety">
                    <Image
                      src={Safe}
                      style={{
                        width: "clamp(2rem, 5vw, 5rem)",
                        height: "clamp(2rem, 5vw, 5rem)",
                        marginRight: "2vw",
                      }}
                      alt="Sanitizing"
                    ></Image>
                    <p>Sanitizing</p>
                  </div>
                  <div className="safety">
                    <Image
                      src={Glove}
                      style={{
                        width: "clamp(2rem, 5vw, 5rem)",
                        height: "clamp(2rem, 5vw, 5rem)",
                        marginRight: "2vw",
                      }}
                      alt="Glove Assurance"
                    ></Image>
                    <p>Glove Assurance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-us-right">
              <Image src={WhyChooseUsBanner} alt="Why Choose Us Banner"></Image>
            </div>
          </div>
        </Reveal>
        <div className="records">
          <div>
            <span
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              className="gradient-span"
            >
              <CountUp end={10000} duration={2} suffix="+" enableScrollSpy />
            </span>
            <p>Service Professionals</p>
          </div>
          <div>
            <span
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              className="gradient-span"
            >
              <CountUp end={300000} duration={2} suffix="+" enableScrollSpy />
            </span>
            <p>Order Placed</p>
          </div>
          <div>
            <span
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              className="gradient-span"
            >
              <CountUp end={100000} duration={2} suffix="+" enableScrollSpy />
            </span>
            <p>5 Star Received</p>
          </div>
        </div>
        <Reveal>
          <HowItWorks image={HowItWorksBanner} />
        </Reveal>
      </div>
    </Suspense>
  );
}
