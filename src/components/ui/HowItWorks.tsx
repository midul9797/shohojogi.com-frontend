import Image from "next/image";

import "../../styles/HowItWorks.css";
export default function HowItWorks({ image, width = "90%" }: any) {
  return (
    <>
      <div className="how-it-works" style={{ width: width }}>
        <div className="how-it-works-title">
          <p>HOW IT WORKS</p>
        </div>
        <Image
          src={image}
          width={300}
          height={300}
          alt="How it works image"
          style={{ width: "40vw" }}
        />
        <div className="how-it-works-details">
          <p className="how-it-works-details-title">
            Hassel Free <span className="gradient-span"> Service Request </span>
          </p>
          <div className="how-it-works-detail">
            <div className="how-it-works-detail-number">1</div>
            <p className="how-it-works-detail-title">Select the service</p>
          </div>
          <div className="how-it-works-detail">
            <div className="how-it-works-detail-number">2</div>
            <p className="how-it-works-detail-title">Pick your schedule</p>
          </div>
          <div className="how-it-works-detail">
            <div className="how-it-works-detail-number">3</div>
            <p className="how-it-works-detail-title">Place Order</p>
          </div>
        </div>
      </div>
    </>
  );
}
