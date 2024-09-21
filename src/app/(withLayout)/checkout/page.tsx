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
  message,
} from "antd";
import { useState } from "react";
import theme from "@/utils/theme/theme";
import { useProfileQuery } from "@/redux/api/profileApi";
import { useAppSelector } from "@/redux/hooks";
import { usePlaceOrderMutation } from "@/redux/api/orderApi";
import { useInitPaymentMutation } from "@/redux/api/paymentApi";
import { useRouter } from "next/navigation";
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
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [placeOrder] = usePlaceOrderMutation();
  const [day, setDay] = useState<number>(today.getDate());
  const [month, setMonth] = useState<string>(monthNames[today.getMonth()]);
  const [year, setYear] = useState<number>(today.getFullYear());
  const [time, setTime] = useState<string>("00:00 am");
  const { data } = useProfileQuery({});
  const { options, total, name } = useAppSelector(
    (state) => state.addToCart
  ) as any;
  const [contact, setContact] = useState(data?.contact_no);
  const [fullName, setFullName] = useState(
    data?.first_name + " " + data?.last_name
  );
  const [house, setHouse] = useState("");
  const [road, setRoad] = useState("");
  const [ward, setWard] = useState("");
  const [block, setBlock] = useState("");
  const [others, setOthers] = useState("");
  const [note, setNote] = useState(" ");
  const router = useRouter();
  const handleScheduleModalClose = () => {
    setIsScheduleModalOpen(false);
    setDay(today.getDate());
    setMonth(monthNames[today.getMonth()]);
    setYear(today.getFullYear());
    setTime("00:00 am");
  };
  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
    setContact(data.contact_no);
    setFullName(data.first_name + " " + data.last_name);
  };
  const handleOk = () => {
    setIsScheduleModalOpen(false);
    setIsContactModalOpen(false);
  };
  const handleAddress = (e: any, name: string) => {
    if (name === "house") setHouse(e.target.value);
    else if (name === "road") setRoad(e.target.value);
    else if (name === "ward") setWard(e.target.value);
    else if (name === "block") setBlock(e.target.value);
    else setOthers(e.target.value);
  };
  const onDateChange: DatePickerProps["onChange"] = (
    date: Dayjs | null,
    dateString: string | string[]
  ) => {
    const d = typeof dateString === "string" ? dateString.split("-") : [];
    if (d.length >= 0) {
      setDay(parseInt(d[0]));
      setMonth(monthNames[parseInt(d[1]) - 1]);
      setYear(parseInt(d[2]));
    }
  };
  const onTimeChange = (time: Dayjs | null, dateString: string | string[]) => {
    setTime(Array.isArray(dateString) ? dateString[0] : dateString);
  };
  const onNameChange = (e: any) => {
    setFullName(e.target.value);
  };
  const onContactChange = (e: any) => {
    setContact(e.target.value);
  };
  const handleNote = (e: any) => {
    setNote(e.target.value);
  };
  const handlePlaceOrder = async () => {
    console.log(total);
    if (
      house === "" ||
      road === "" ||
      ward === "" ||
      others === "" ||
      block === ""
    )
      message.error("Full Address Required");
    else if (!contact) message.error("Contact Required");
    else if (total === 0) {
      message.error("No service selected");
      router.push("/");
    } else {
      let service_details: string = "";
      options.map((item: any) => {
        if (item?.quantity > 0)
          service_details += `${item?.name} x${item?.quantity}, `;
      });
      const res: any = await placeOrder({
        delivery_time: time + ", " + day + " " + month + " " + year,
        service: name,
        contact: contact,
        address:
          house + " , " + road + " , " + block + " , " + ward + " , " + others,
        order_details: service_details,
        subtotal: total,
        delivery_fee: 100,
        total_amount: total + 100,
        note: note,
      }).unwrap();

      if (res) {
        message.success("Order Placed");
        router.push("/checkout/success");
      }
    }
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
                onCancel={handleScheduleModalClose}
                open={isScheduleModalOpen}
                footer={(_, { OkBtn, CancelBtn }) => (
                  <>
                    <Button type="default" onClick={handleScheduleModalClose}>
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
                      onChange={(
                        time: Dayjs,
                        dateString: string | string[]
                      ) => {
                        onTimeChange(
                          time,
                          Array.isArray(dateString) ? dateString[0] : dateString
                        );
                      }}
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
              <p style={{ color: "grey" }}>{fullName}</p>
              <p style={{ color: "grey" }}>
                {contact ? contact : "Contact Number"}
              </p>
              <button
                className="change-btn"
                onClick={() => setIsContactModalOpen(true)}
              >
                <EditOutlined />
                Change
              </button>
              <Modal
                title="Contact Person Details"
                onCancel={handleContactModalClose}
                open={isContactModalOpen}
                footer={(_, { OkBtn, CancelBtn }) => (
                  <>
                    <Button type="default" onClick={handleContactModalClose}>
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
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p style={{ margin: "10px" }}>Name : </p>
                    <input
                      type="text"
                      className="address-input-field"
                      onBlur={(e) => onNameChange(e)}
                      defaultValue={data?.first_name + " " + data?.last_name}
                    />
                  </div>
                  <div>
                    <p style={{ margin: "10px" }}>Contact NO. : </p>
                    <input
                      type="number"
                      className="address-input-field"
                      onBlur={(e) => onContactChange(e)}
                      defaultValue={data}
                    />
                  </div>
                </div>
              </Modal>
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
                <input
                  type="text"
                  className="address-input-field"
                  onBlur={(e) => handleAddress(e, "house")}
                />
              </div>
              <div className="address-input">
                <p>Road No./Name</p>
                <input
                  type="text"
                  className="address-input-field"
                  onBlur={(e) => handleAddress(e, "road")}
                />
              </div>
            </div>
            <div className="address-inputs">
              <div className="address-input">
                <p>Block</p>
                <input
                  type="text"
                  className="address-input-field"
                  onBlur={(e) => handleAddress(e, "block")}
                />
              </div>
              <div className="address-input">
                <p>Ward No.</p>
                <input
                  type="text"
                  className="address-input-field"
                  onBlur={(e) => handleAddress(e, "ward")}
                />
              </div>
            </div>
            <div>
              <div className="address-input">
                <p>Others</p>
                <input
                  type="text"
                  className="address-input-field"
                  onBlur={(e) => handleAddress(e, "others")}
                />
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
            <p>{name}</p>
            <ul>
              {options.map((item: any) => (
                <li key={item.name}>
                  {item?.name} x{item?.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-summary">
          <p className="order-heading">Order Summary</p>
          <p style={{ fontWeight: "bold" }}>House Shifting</p>
          {options.map((item: any) => (
            <div className="price-details" key={item.name}>
              <p>
                {item?.name} x{item?.quantity}
              </p>
              <p className="price">
                {item?.price}
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
              {""}
              <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                &#2547;
              </span>
            </p>
          </div>
          <div className="subtotal">
            <p>Delivery Fee</p>
            <p className="price">
              100{""}
              <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                &#2547;
              </span>
            </p>
          </div>
          <div
            className="subtotal"
            style={{ borderTop: "1px solid #d7d7d7", padding: "1.5vw 0" }}
          >
            <p style={{ fontWeight: "bold" }}>Amount to be paid</p>
            <p className="price">
              {total + 100}
              {""}
              <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                &#2547;
              </span>
            </p>
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
          <input
            className="message-input-area"
            type="text"
            onBlur={() => handleNote}
          />
          <button
            className="place-order-btn"
            onClick={() => handlePlaceOrder()}
          >
            Place Order{" "}
          </button>
        </div>
      </div>
    </ConfigProvider>
  );
}
