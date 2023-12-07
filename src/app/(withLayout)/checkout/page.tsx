"use client";
import {
  ContactsOutlined,
  EditOutlined,
  FileDoneOutlined,
  FormOutlined,
  HomeOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import "../../../styles/Checkout.css";
import {
  Button,
  ConfigProvider,
  DatePicker,
  DatePickerProps,
  Modal,
  TimePicker,
} from "antd";
import { useState } from "react";
import theme from "@/utils/theme/theme";
export default function CheckoutPage() {
  const today = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [isScheduleModalOpen, setIsScheduleModalOpen] =
    useState<boolean>(false);
  const [day, setDay] = useState<number>(today.getDate());
  const [month, setMonth] = useState<string>(monthNames[today.getMonth()]);
  const [year, setYear] = useState<number>(today.getFullYear());
  const [time, setTime] = useState<string>("00:00 am");
  const handleModalClose = () => {
    setIsScheduleModalOpen(false);
    setDay(today.getDate());
    setMonth(monthNames[today.getMonth()]);
    setYear(today.getFullYear());
    setTime("00:00 am");
  };
  const handleOk = () => {
    setIsScheduleModalOpen(false);
  };
  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    const d = dateString.split("-");
    if (d.length >= 0) {
      setDay(parseInt(d[0]));
      setMonth(monthNames[parseInt(d[1]) - 1]);
      setYear(parseInt(d[2]));
    }
  };
  const onTimeChange = (time: Dayjs | null, timeString: string) => {
    setTime(timeString);
  };
  return (
    <ConfigProvider theme={theme}>
      <div className="checkout-page">
        <div className="order-info">
          <div className="schedule">
            <div className="icon-and-title">
              <ScheduleOutlined className="icon" />
              <p style={{ fontWeight: "bold" }}>Schedule</p>
            </div>
            <p className="sub">
              Expert will arrive at your given address at {time}
            </p>
            <div className="schedule-time">
              <p>
                {day} {month}, {year} | {time}
              </p>
              <button
                className="change-btn"
                onClick={() => setIsScheduleModalOpen(true)}
              >
                <EditOutlined />
                Change
              </button>
              <Modal
                title="Pick your schedule"
                onCancel={handleModalClose}
                open={isScheduleModalOpen}
                footer={(_, { OkBtn, CancelBtn }) => (
                  <>
                    <Button type="default" onClick={handleModalClose}>
                      Close
                    </Button>
                    <Button
                      type="primary"
                      style={{ backgroundColor: "#1D94A4" }}
                      onClick={handleOk}
                    >
                      OK
                    </Button>
                  </>
                )}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <p>Date</p>
                    <DatePicker onChange={onDateChange} format={"DD-MM-YYYY"} />
                  </div>
                  <div>
                    <p>Time</p>
                    <TimePicker
                      changeOnBlur={true}
                      use12Hours
                      format="h:mm a"
                      onChange={onTimeChange}
                    />
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="contact">
            <div className="icon-and-title">
              <ContactsOutlined className="icon" />
              <p style={{ fontWeight: "bold" }}>Contact Person</p>
            </div>
            <p className="sub">Expert will contact with the following person</p>
            <div className="name-and-number">
              <p style={{ color: "grey" }}>House Shifting</p>
              <p style={{ color: "grey" }}>number</p>
              <button className="change-btn">
                <EditOutlined />
                Change
              </button>
            </div>
          </div>
          <div className="address">
            <div className="icon-and-title">
              <HomeOutlined className="icon" />
              <p style={{ fontWeight: "bold" }}>Address</p>
            </div>
            <p className="sub">Expert will arrive at the address given below</p>
            <div className="address-inputs">
              <div className="address-input">
                <p>House No./Name</p>
                <input type="text" className="address-input-field" />
              </div>
              <div className="address-input">
                <p>Road No./Name</p>
                <input type="text" className="address-input-field" />
              </div>
            </div>
            <div className="address-inputs">
              <div className="address-input">
                <p>Block</p>
                <input type="text" className="address-input-field" />
              </div>
              <div className="address-input">
                <p>Ward No.</p>
                <input type="text" className="address-input-field" />
              </div>
            </div>
            <div>
              <div className="address-input">
                <p>Others</p>
                <input type="text" className="address-input-field" />
              </div>
            </div>
          </div>
          <div className="service-detail">
            <div className="icon-and-title">
              <FileDoneOutlined className="icon" />
              <p style={{ fontWeight: "bold" }}>Service Details</p>
            </div>
            <p className="sub">
              Our service provider will call you to confirm the service
            </p>
            <p>House Shifting</p>
            <ul>
              <li>1 Bed</li>
              <li>2 Flat</li>
            </ul>
          </div>
        </div>
        <div className="order-summary">
          <p className="order-heading">Order Summary</p>
          <p style={{ fontWeight: "bold" }}>House Shifting</p>
          <div className="price-details">
            <p>1 Bed x2</p>
            <p className="price">price</p>
          </div>
          <div className="subtotal">
            <p>subtotal</p>
            <p className="price">price</p>
          </div>
          <div className="subtotal">
            <p>Delivery Fee</p>
            <p className="price">price</p>
          </div>
          <div
            className="subtotal"
            style={{ borderTop: "1px solid #d7d7d7", padding: "1.5vw 0" }}
          >
            <p style={{ fontWeight: "bold" }}>Amount to be paid</p>
            <p className="price">price</p>
          </div>
          <p className="terms">
            *Prices are VAT included
            <br />
            *Price may vary considering on product availability
          </p>
          <div className="icon-and-title">
            <FormOutlined className="icon" />
            <p>Do you want to add any additional notes</p>
          </div>
          <input className="message-input-area" type="text" />
          <button className="place-order-btn">Place Order </button>
        </div>
      </div>
    </ConfigProvider>
  );
}
