"use client";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import {
  CameraOutlined,
  LoadingOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { useEffect, useState } from "react";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

type ImageUploadProps = {
  name: string;
};

const UploadImage = ({ name }: ImageUploadProps) => {
  const { data } = useProfileQuery({});
  console.log(data);
  const [profile] = useUpdateProfileMutation();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      //   setValue(name, info.file.originFileObj);
      getBase64(info.file.originFileObj as RcFile, async (url) => {
        setLoading(false);
        setImageUrl(url);
        const res = await profile({ profileImg: url });
        console.log(res);
        if (res) message.success("Image Uploaded Successfully");
      });
    }
  };
  useEffect(() => {
    if (data?.profileImg) setImageUrl(data.profileImg);
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <LoadingOutlined />
        ) : (
          <Avatar src={imageUrl} icon={<UserOutlined />} size={150} />
        )}

        <Upload
          name={name}
          className="uploader"
          showUploadList={false}
          action="/api/file"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          style={{ position: "relative", right: "40px" }}
        >
          <CameraOutlined
            style={{
              fontSize: "20px",
              color: "black",
              position: "relative",
              right: "25px",
              top: "60px",
            }}
          />
        </Upload>
      </div>
    </>
  );
};

export default UploadImage;
