import Link from "next/link";
import React from "react";
import "../../styles/Footer.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <p style={{ fontWeight: "bold" }}>
          Get In Touch
          <br /> With Us.
        </p>
        <div>
          <p>
            9999
            <br />
            info@shohojogi.com
            <br />
            EDU Tower
            <br />
            Agrabad Commercial Area
            <br />
            Chattogram
          </p>
        </div>
        <div>
          <Link href="/"> • All Services</Link>
          <br />
          <div className="footer-icons">
            <LinkedinFilled />

            <FacebookFilled />

            <InstagramFilled />
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", paddingTop: "4vw", fontSize: "15px" }}>
        &copy; 2023 SHOHOJOGI | ALL RIGHTS RESERVED
      </p>
    </div>
  );
}
