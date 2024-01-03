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
import d from "@/assets/orderData.json";
import { useDispatch } from "react-redux";
import {
  addElectrician,
  addHomeAppliance,
  addHomeCleaning,
  addHouseShifting,
  addPlumbing,
  addSummary,
  removeElectrician,
  removeHomeAppliance,
  removeHomeCleaning,
  removeHouseShifting,
  removePlumbing,
} from "@/redux/features/addToCartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
export default function AddToCart({ params }: { params: { service: string } }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { houseShifting, homeAppliance, homeCleaning, plumbing, electrician } =
    useAppSelector((state) => state.addToCart) as any;
  let data: any,
    idx: number = 0;
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
  const handleAdd = (name: string) => {
    if (idx === 0) dispatch(addHouseShifting(name));
    else if (idx === 1) dispatch(addHomeAppliance(name));
    else if (idx === 2) dispatch(addHomeCleaning(name));
    else if (idx === 3) dispatch(addPlumbing(name));
    else dispatch(addElectrician(name));
  };
  const handleRemove = (name: string) => {
    if (idx === 0) dispatch(removeHouseShifting(name));
    else if (idx === 1) dispatch(removeHomeAppliance(name));
    else if (idx === 2) dispatch(removeHomeCleaning(name));
    else if (idx === 3) dispatch(removePlumbing(name));
    else dispatch(removeElectrician(name));
  };
  const handleProccedToCheckout = () => {
    if (idx === 1) {
      const items = [];
      if (homeAppliance.oneTonAC !== 0)
        items.push({
          title: "1 Ton AC",
          quantity: homeAppliance.oneTonAC,
          price: homeAppliance.oneTonAC * data?.items[0]?.price,
        });
      if (homeAppliance.twoTonAC !== 0)
        items.push({
          title: "2 Ton AC",
          quantity: homeAppliance.twoTonAC,
          price: homeAppliance.twoTonAC * data?.items[1]?.price,
        });
      if (homeAppliance.threeTonAC !== 0)
        items.push({
          title: "3 Ton AC",
          quantity: homeAppliance.threeTonAC,
          price: homeAppliance.threeTonAC * data?.items[2]?.price,
        });
      if (homeAppliance.fourTonAC !== 0)
        items.push({
          title: "4 Ton AC",
          quantity: homeAppliance.fourTonAC,
          price: homeAppliance.fourTonAC * data?.items[3]?.price,
        });
      if (homeAppliance.oven !== 0)
        items.push({
          title: "Oven",
          quantity: homeAppliance.oven,
          price: homeAppliance.oven * data?.items[4]?.price,
        });
      if (homeAppliance.washingMachine !== 0)
        items.push({
          title: "Washing Machine",
          quantity: homeAppliance.washingMachine,
          price: homeAppliance.washingMachine * data?.items[5]?.price,
        });
      if (homeAppliance.tv !== 0)
        items.push({
          title: "TV",
          quantity: homeAppliance.tv,
          price: homeAppliance.tv * data?.items[6]?.price,
        });
      dispatch(
        addSummary({
          name: "Home Appliance",
          items,
          subtotal:
            homeAppliance.oneTonAC * data?.items[0]?.price +
            homeAppliance.twoTonAC * data?.items[1]?.price +
            homeAppliance.threeTonAC * data?.items[2]?.price +
            homeAppliance.fourTonAC * data?.items[3]?.price +
            homeAppliance.oven * data?.items[4]?.price +
            homeAppliance.washingMachine * data?.items[5]?.price +
            homeAppliance.tv * data?.items[6]?.price,
        })
      );
      router.push("/checkout");
    } else if (idx === 0) {
      const items = [];
      if (houseShifting.singleBed !== 0)
        items.push({
          title: "Single Bed",
          quantity: houseShifting.singleBed,
          price: houseShifting.singleBed * data?.items[0]?.price,
        });
      if (houseShifting.doubleBed !== 0)
        items.push({
          title: "Double Bed",
          quantity: houseShifting.doubleBed,
          price: houseShifting.doubleBed * data?.items[1]?.price,
        });
      dispatch(
        addSummary({
          name: "House Shifting",
          items,
          subtotal:
            houseShifting.singleBed * data?.items[0]?.price +
            houseShifting.doubleBed * data?.items[1]?.price,
        })
      );
      router.push("/checkout");
    } else if (idx === 2) {
      const items = [];
      if (homeCleaning.fullHomeCleaning !== 0)
        items.push({
          title: "Full Home Cleaning",
          quantity: homeCleaning.fullHomeCleaning,
          price: homeCleaning.fullHomeCleaning * data?.items[0]?.price,
        });
      if (homeCleaning.kitchenCleaning !== 0)
        items.push({
          title: "Kitchen Cleaning",
          quantity: homeCleaning.kitchenCleaning,
          price: homeCleaning.kitchenCleaning * data?.items[1]?.price,
        });
      if (homeCleaning.bathroomCleaning !== 0)
        items.push({
          title: "Bathroom Cleaning",
          quantity: homeCleaning.bathroomCleaning,
          price: homeCleaning.bathroomCleaning * data?.items[2]?.price,
        });
      if (homeCleaning.fullWindowCleaning !== 0)
        items.push({
          title: "Full Window Cleaning",
          quantity: homeCleaning.fullWindowCleaning,
          price: homeCleaning.fullWindowCleaning * data?.items[3]?.price,
        });

      dispatch(
        addSummary({
          name: "Home Cleaning",
          items,
          subtotal:
            homeCleaning.fullHomeCleaning * data?.items[0]?.price +
            homeCleaning.kitchenCleaning * data?.items[1]?.price +
            homeCleaning.bathroomCleaning * data?.items[2]?.price +
            homeCleaning.fullWindowCleaning * data?.items[3]?.price,
        })
      );
      router.push("/checkout");
    } else if (idx === 3) {
      const items = [];
      if (plumbing.sinkRepair !== 0)
        items.push({
          title: "Sink Repair",
          quantity: plumbing.sinkRepair,
          price: plumbing.sinkRepair * data?.items[0]?.price,
        });
      if (plumbing.sinkInstallation !== 0)
        items.push({
          title: "Sink Installation",
          quantity: plumbing.sinkInstallation,
          price: plumbing.sinkInstallation * data?.items[1]?.price,
        });
      if (plumbing.waterTapRepair !== 0)
        items.push({
          title: "Water Tap Repair",
          quantity: plumbing.waterTapRepair,
          price: plumbing.waterTapRepair * data?.items[2]?.price,
        });
      if (plumbing.waterTapInstallation !== 0)
        items.push({
          title: "Water Tap Installation",
          quantity: plumbing.waterTapInstallation,
          price: plumbing.waterTapInstallation * data?.items[3]?.price,
        });

      dispatch(
        addSummary({
          name: "Plumbing",
          items,
          subtotal:
            plumbing.sinkRepair * data?.items[0]?.price +
            plumbing.sinkInstallation * data?.items[1]?.price +
            plumbing.waterTapRepair * data?.items[2]?.price +
            plumbing.waterTapInstallation * data?.items[3]?.price,
        })
      );
      router.push("/checkout");
    } else {
      const items = [];
      if (electrician.fan !== 0)
        items.push({
          title: "Ceiling Fan Service",
          quantity: electrician.fan,
          price: electrician.fan * data?.items[0]?.price,
        });
      if (electrician.light !== 0)
        items.push({
          title: "Light Servicing",
          quantity: electrician.light,
          price: electrician.light * data?.items[1]?.price,
        });
      if (electrician.mainBoard !== 0)
        items.push({
          title: "Main Board Servicing",
          quantity: electrician.mainBoard,
          price: electrician.mainBoard * data?.items[2]?.price,
        });

      dispatch(
        addSummary({
          name: "Electrician",
          items,
          subtotal:
            electrician.fan * data?.items[0]?.price +
            electrician.light * data?.items[1]?.price +
            electrician.mainBoard * data?.items[2]?.price,
        })
      );
      router.push("/checkout");
    }
  };
  return (
    <div className="add-to-cart-page">
      <p className="add-to-cart-page-title">{data?.title} Service</p>
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
            {data?.items.length} options available
          </p>
        </div>
      </div>
      <div className="add-to-cart">
        <div className="cart-section">
          <div>
            {data?.items.map((item: any) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "45vw",
                }}
                key={item.item}
              >
                <div style={{ margin: "2vw" }} key={item.item}>
                  <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>
                    {item.item}
                  </p>
                  <p style={{ fontSize: "14px", color: "grey" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "cadetblue",
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
                    onClick={() => handleRemove(item.item)}
                  >
                    <MinusOutlined />
                  </button>
                  {idx === 0 && item.item === "Single Bed / Room" && (
                    <p className="add-input">{houseShifting.singleBed}</p>
                  )}
                  {idx === 0 && item.item === "Double Bed / Room" && (
                    <p className="add-input">{houseShifting.doubleBed}</p>
                  )}
                  {idx === 1 && item.item === "1 Ton AC" && (
                    <p className="add-input">{homeAppliance.oneTonAC}</p>
                  )}
                  {idx === 1 && item.item === "2 Ton AC" && (
                    <p className="add-input">{homeAppliance.twoTonAC}</p>
                  )}
                  {idx === 1 && item.item === "3 Ton AC" && (
                    <p className="add-input">{homeAppliance.threeTonAC}</p>
                  )}
                  {idx === 1 && item.item === "4 Ton AC" && (
                    <p className="add-input">{homeAppliance.fourTonAC}</p>
                  )}
                  {idx === 1 && item.item === "Oven" && (
                    <p className="add-input">{homeAppliance.oven}</p>
                  )}
                  {idx === 1 && item.item === "TV" && (
                    <p className="add-input">{homeAppliance.tv}</p>
                  )}
                  {idx === 1 && item.item === "Washing Machine" && (
                    <p className="add-input">{homeAppliance.washingMachine}</p>
                  )}
                  {idx === 2 && item.item === "Full Home Cleaning" && (
                    <p className="add-input">{homeCleaning.fullHomeCleaning}</p>
                  )}
                  {idx === 2 && item.item === "Kitchen Cleaning" && (
                    <p className="add-input">{homeCleaning.kitchenCleaning}</p>
                  )}
                  {idx === 2 && item.item === "Bathroom Cleaning" && (
                    <p className="add-input">{homeCleaning.bathroomCleaning}</p>
                  )}
                  {idx === 2 && item.item === "Full Window Cleaning" && (
                    <p className="add-input">
                      {homeCleaning.fullWindowCleaning}
                    </p>
                  )}
                  {idx === 3 && item.item === "Sink Repair" && (
                    <p className="add-input">{plumbing.sinkRepair}</p>
                  )}
                  {idx === 3 && item.item === "Sink Installation" && (
                    <p className="add-input">{plumbing.sinkInstallation}</p>
                  )}
                  {idx === 3 && item.item === "Water Tap Installation" && (
                    <p className="add-input">{plumbing.waterTapInstallation}</p>
                  )}
                  {idx === 3 && item.item === "Water Tap Repair" && (
                    <p className="add-input">{plumbing.waterTapRepair}</p>
                  )}
                  {idx === 4 && item.item === "Ceiling Fan Service" && (
                    <p className="add-input">{electrician.fan}</p>
                  )}
                  {idx === 4 && item.item === "Light Servicing" && (
                    <p className="add-input">{electrician.light}</p>
                  )}
                  {idx === 4 && item.item === "Main Board Servicing" && (
                    <p className="add-input">{electrician.mainBoard}</p>
                  )}
                  <button
                    className="add-btn"
                    onClick={() => handleAdd(item.item)}
                  >
                    <PlusOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="price-section">
          <div className="price-calculation">
            {idx === 0 && houseShifting.singleBed > 0 && data && (
              <div className="single-price">
                <p>Single Bed - x{houseShifting.singleBed}</p>
                <p className="price">
                  {houseShifting.singleBed * data?.items[0]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 0 && houseShifting.doubleBed > 0 && data && (
              <div className="single-price">
                <p>Double Bed - x{houseShifting.doubleBed}</p>
                <p className="price">
                  {houseShifting.doubleBed * data?.items[1]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.oneTonAC > 0 && data && (
              <div className="single-price">
                <p>1 Ton AC - x{homeAppliance.oneTonAC}</p>
                <p className="price">
                  {homeAppliance.oneTonAC * data?.items[0]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.twoTonAC > 0 && data && (
              <div className="single-price">
                <p>2 Ton AC - x{homeAppliance.twoTonAC}</p>
                <p className="price">
                  {homeAppliance.twoTonAC * data?.items[1]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.threeTonAC > 0 && data && (
              <div className="single-price">
                <p>3 Ton AC - x{homeAppliance.threeTonAC}</p>
                <p className="price">
                  {homeAppliance.threeTonAC * data?.items[2]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.fourTonAC > 0 && data && (
              <div className="single-price">
                <p>4 Ton AC - x{homeAppliance.fourTonAC}</p>
                <p className="price">
                  {homeAppliance.fourTonAC * data?.items[3]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.oven > 0 && data && (
              <div className="single-price">
                <p>Oven - x{homeAppliance.oven}</p>
                <p className="price">
                  {homeAppliance.oven * data?.items[4]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.washingMachine > 0 && data && (
              <div className="single-price">
                <p>Washing Machine - x{homeAppliance.washingMachine}</p>
                <p className="price">
                  {homeAppliance.washingMachine * data?.items[5]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 1 && homeAppliance.tv > 0 && data && (
              <div className="single-price">
                <p>TV - x{homeAppliance.tv}</p>
                <p className="price">
                  {homeAppliance.tv * data?.items[6]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 2 && homeCleaning.fullHomeCleaning > 0 && data && (
              <div className="single-price">
                <p>Full Home Cleaning - x{homeCleaning.fullHomeCleaning}</p>
                <p className="price">
                  {homeCleaning.fullHomeCleaning * data?.items[0]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 2 && homeCleaning.kitchenCleaning > 0 && data && (
              <div className="single-price">
                <p>Kitchen Cleaning - x{homeCleaning.kitchenCleaning}</p>
                <p className="price">
                  {homeCleaning.kitchenCleaning * data?.items[1]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 2 && homeCleaning.bathroomCleaning > 0 && data && (
              <div className="single-price">
                <p>Bathroom Cleaning - x{homeCleaning.bathroomCleaning}</p>
                <p className="price">
                  {homeCleaning.bathroomCleaning * data?.items[2]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 2 && homeCleaning.fullWindowCleaning > 0 && data && (
              <div className="single-price">
                <p>Full Window Cleaning - x{homeCleaning.fullWindowCleaning}</p>
                <p className="price">
                  {homeCleaning.fullWindowCleaning * data?.items[3]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 3 && plumbing.sinkRepair > 0 && data && (
              <div className="single-price">
                <p>Sink Repair - x{plumbing.sinkRepair}</p>
                <p className="price">
                  {plumbing.sinkRepair * data?.items[0]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 3 && plumbing.sinkInstallation > 0 && data && (
              <div className="single-price">
                <p>Sink Installation - x{plumbing.sinkInstallation}</p>
                <p className="price">
                  {plumbing.sinkInstallation * data?.items[1]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 3 && plumbing.waterTapRepair > 0 && data && (
              <div className="single-price">
                <p>Water Tap Repair - x{plumbing.waterTapRepair}</p>
                <p className="price">
                  {plumbing.waterTapRepair * data?.items[2]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 3 && plumbing.waterTapInstallation > 0 && data && (
              <div className="single-price">
                <p>Water Tap Installation - x{plumbing.waterTapInstallation}</p>
                <p className="price">
                  {plumbing.waterTapInstallation * data?.items[3]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 4 && electrician.fan > 0 && data && (
              <div className="single-price">
                <p>Ceiling Fan Service - x{electrician.fan}</p>
                <p className="price">
                  {electrician.fan * data?.items[0]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 4 && electrician.light > 0 && data && (
              <div className="single-price">
                <p>Light Servicing - x{electrician.light}</p>
                <p className="price">
                  {electrician.light * data?.items[1]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            {idx === 4 && electrician.mainBoard > 0 && data && (
              <div className="single-price">
                <p>Main Board Servicing - x{electrician.mainBoard}</p>
                <p className="price">
                  {electrician.mainBoard * data?.items[2]?.price}
                  {""}
                  <span style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              </div>
            )}
            <div className="subtotal">
              <p>Subtotal</p>
              {idx === 0 && data && (
                <p className="price">
                  {houseShifting.singleBed * data?.items[0]?.price +
                    houseShifting.doubleBed * data?.items[1]?.price}
                  <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              )}
              {idx === 1 && data && (
                <p className="price">
                  {homeAppliance.oneTonAC * data?.items[0]?.price +
                    homeAppliance.twoTonAC * data?.items[1]?.price +
                    homeAppliance.threeTonAC * data?.items[2]?.price +
                    homeAppliance.fourTonAC * data?.items[3]?.price +
                    homeAppliance.oven * data?.items[4]?.price +
                    homeAppliance.washingMachine * data?.items[5]?.price +
                    homeAppliance.tv * data?.items[6]?.price}
                  <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              )}
              {idx === 2 && data && (
                <p className="price">
                  {homeCleaning.fullHomeCleaning * data?.items[0]?.price +
                    homeCleaning.kitchenCleaning * data?.items[1]?.price +
                    homeCleaning.bathroomCleaning * data?.items[2]?.price +
                    homeCleaning.fullWindowCleaning * data?.items[3]?.price}
                  <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              )}
              {idx === 3 && data && (
                <p className="price">
                  {plumbing.sinkRepair * data?.items[0]?.price +
                    plumbing.sinkInstallation * data?.items[1]?.price +
                    plumbing.waterTapRepair * data?.items[2]?.price +
                    plumbing.waterTapInstallation * data?.items[3]?.price}
                  <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              )}
              {idx === 4 && data && (
                <p className="price">
                  {electrician.fan * data?.items[0]?.price +
                    electrician.light * data?.items[1]?.price +
                    electrician.mainBoard * data?.items[2]?.price}
                  <span style={{ fontSize: "2vw", fontWeight: "bold" }}>
                    &#2547;
                  </span>
                </p>
              )}
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
