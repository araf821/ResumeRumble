"use client";

import React from "react";

const PDFViewer = ({ url }: { url: string }) => {
  return (
    <iframe
      onResize={() => {}}
      src={`https://docs.google.com/gview?url=${url}&embedded=true`}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default PDFViewer;
