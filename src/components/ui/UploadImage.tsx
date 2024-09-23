"use client";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import {
  CameraOutlined,
  LoadingOutlined,
  PictureOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/svg+xml";
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
  const { setValue } = useFormContext();
  const { data } = useProfileQuery({});
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
      // setValue(name, info.file.originFileObj);
      getBase64(info.file.originFileObj as RcFile, async (url) => {
        setLoading(false);
        setImageUrl(url);
        setValue(name, url);
      });
    }
  };
  useEffect(() => {
    if (data?.profileImg && name === "profileImg") setImageUrl(data.profileImg);
  }, []);
  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <Avatar
          src={imageUrl}
          icon={name === "profileImg" ? <UserOutlined /> : <PictureOutlined />}
          shape={"square"}
          size={{ md: 40, lg: 64, xl: 80, xxl: 100 }}
        />
      )}
    </div>
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {name === "profileImg" && loading && <LoadingOutlined />}
        {name === "profileImg" && !loading && (
          <Avatar
            src={imageUrl}
            icon={<UserOutlined />}
            shape="square"
            size={150}
          />
        )}

        <Upload
          name={name}
          className="avatar-uploader"
          showUploadList={false}
          action="/api/file"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          style={{
            position: "relative",
            right: "40px",
          }}
        >
          {name === "profileImg" ? (
            <CameraOutlined
              style={{
                fontSize: "clamp(12px, 2vw, 24px)",
                color: "black",
                position: "relative",
                right: "25px",
                top: "60px",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </div>
    </>
  );
};

export default UploadImage;
