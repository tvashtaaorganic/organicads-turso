"use client";
import { useEffect } from "react";

const GetQuoteForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        data-fillout-id="bBpksmrcG1us"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      ></div>
    </div>
  );
};

export default GetQuoteForm;
