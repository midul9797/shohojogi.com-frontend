import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import "../../../styles/AddToCart.css";
export default function AddToCart({ params }: { params: { service: string } }) {
  return (
    <div className="add-to-cart-page">
      <p className="add-to-cart-page-title">House Shifting Service</p>
      <div className="available-option">
        <div className="available-option-div">
          <div>
            <Link href={"/"} style={{ display: "flex" }}>
              <ArrowLeftOutlined />
              <p
                style={{
                  marginLeft: "1vw",
                  fontSize: "1.2vw",
                }}
              >
                {params.service}
              </p>
            </Link>
          </div>
          <p style={{ fontWeight: "bold" }}>4 option available</p>
        </div>
      </div>
      <div className="add-to-cart">
        <div className="cart-section">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "45vw",
              }}
            >
              <div style={{ margin: "2vw" }}>
                <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>1 Bed</p>
                <p style={{ fontSize: "10px", color: "grey" }}>
                  Price Range 2000-4000
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="add-btn">
                  <MinusOutlined />
                </button>
                <input type="text" value="0" className="add-input" />
                <button className="add-btn">
                  <PlusOutlined />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="price-section">
          <div className="price-calculation">
            <div className="single-price">
              <p>1 Bed - x{1}</p>
              <p className="price">2000Tk</p>
            </div>
            <div className="subtotal">
              <p>Subtotal</p>
              <p className="price">1000tk</p>
            </div>
          </div>
          <button className="check-out-btn">
            Procced To Checkout{" "}
            <ArrowRightOutlined style={{ marginTop: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
