"use client";

import React from "react";

const PDFViewer = ({ url }: { url: string }) => {
  return (
    <iframe
      onResize={() => {}}
      src={`https://docs.google.com/gview?url=${url}&embedded=true`}
      className="h-full w-full"
    />
  );
};

export default PDFViewer;
