"use client";
import { setText } from "@/redux/features/docEditorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
const ReactQuill = dynamic(
  () => import("react-quill"),

  {
    ssr: false,
  }
);
import "react-quill/dist/quill.snow.css";
export default function DocEditor() {
  const dispatch = useAppDispatch();
  const quillRef = useRef() as any;
  const { service_details } = useAppSelector((state) => state.docEditor) as any;
  useEffect(() => {
    const init = (quill: any) => {
      console.log(quill);
    };
    const check = () => {
      if (quillRef.current) {
        init(quillRef.current);
        return;
      }
      setTimeout(check, 200);
    };
    check();
  }, [quillRef]);

  return (
    <div>
      <ReactQuill
        style={{ margin: "0 auto", width: "60vw" }}
        // ref={quillRef}
        value={service_details}
        onChange={(value) => dispatch(setText(value))}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ color: [] }],
            ["link"],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "link",
          "color",
          "align",
          "list",
          "bullet",
        ]}
      />
    </div>
  );
}
