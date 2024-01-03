import Image from "next/image";

import "../../styles/HowItWorks.css";
export default function HowItWorks({ image, width = "90%" }: any) {
  return (
    <div className="how-it-works" style={{ width: width }}>
      <p style={{ marginTop: "3vw", fontSize: "1.2vw" }}>HOW IT WORKS</p>
      <Image src={image} alt="How it works image" style={{ width: "40vw" }} />
      <div className="how-it-works-details">
        <p style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
          Hassel Free <span className="gradient-span"> Service Request </span>
        </p>
        <div className="how-it-works-detail">
          <div className="how-it-works-detail-number">1</div>
          <p style={{ fontSize: "2vw" }}>Select the service</p>
        </div>
        <div className="how-it-works-detail">
          <div className="how-it-works-detail-number">2</div>
          <p style={{ fontSize: "2vw" }}>Pick your schedule</p>
        </div>
        <div className="how-it-works-detail">
          <div className="how-it-works-detail-number">3</div>
          <p style={{ fontSize: "2vw" }}>Place Order</p>
        </div>
      </div>
    </div>
  );
}
