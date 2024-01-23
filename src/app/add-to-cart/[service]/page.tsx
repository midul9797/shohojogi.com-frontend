"use client";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import "../../../styles/AddToCart.css";
import { useDispatch } from "react-redux";
import {
  setName,
  addService,
  removeService,
} from "@/redux/features/addToCartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useGetServiceQuery } from "@/redux/api/serviceApi";
import { isLoggedIn } from "@/service/auth.service";

export default function AddToCart({ params }: { params: { service: string } }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data } = useGetServiceQuery({ id: params.service });
  console.log(data);
  const { options, total, name } = useAppSelector(
    (state) => state.addToCart
  ) as any;

  const handleAdd = (option: any) => {
    dispatch(addService(option));
  };
  const handleRemove = (option: any) => {
    dispatch(removeService(option));
  };
  const handleProccedToCheckout = () => {
    dispatch(setName(data?.name));
    if (isLoggedIn()) router.push("/checkout");
    else {
      router.push("/login");
    }
  };

  return (
    <div className="add-to-cart-page">
      <p className="add-to-cart-page-title">{data?.name} Service</p>
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
              ></p>
            </Link>
          </div>
          <p style={{ fontWeight: "bold" }}>
            {data?.options?.length} options available
          </p>
        </div>
      </div>
      <div className="add-to-cart">
        <div className="cart-section">
          <div>
            {data?.options?.map((item: any) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "45vw",
                }}
                key={item.name}
              >
                <div style={{ margin: "2vw" }} key={item.item}>
                  <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: "14px", color: "grey" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#1D94A4",
                      }}
                    >
                      {item.price}
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "bolder",
                        }}
                      >
                        &#2547;
                      </span>
                    </span>
                    /unit
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="add-btn"
                    onClick={() => handleRemove(item)}
                  >
                    <MinusOutlined />
                  </button>
                  <p className="add-input">
                    {options
                      ? options.find(
                          (service: any) => service.name === item.name
                        )?.quantity | 0
                      : 0}
                  </p>
                  <button className="add-btn" onClick={() => handleAdd(item)}>
                    <PlusOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="price-section">
          <div className="price-calculation">
            {options &&
              options.map((option: any) => (
                <div className="single-price" key={option.name}>
                  <p>
                    {option.name} - x{option.quantity}
                  </p>
                  <p className="price">
                    {option.price * option.quantity}
                    {""}
                    <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                      &#2547;
                    </span>
                  </p>
                </div>
              ))}

            <div className="subtotal">
              <p>Subtotal</p>

              <p className="price">
                {total}
                <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
                  &#2547;
                </span>
              </p>
            </div>
          </div>
          <button
            className="check-out-btn"
            onClick={() => handleProccedToCheckout()}
          >
            Procced To Checkout{" "}
            <ArrowRightOutlined style={{ marginTop: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
