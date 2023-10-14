"use client";

import { useEffect, useState } from "react";
import FileUploadModal from "./FileUploadModal";

const ModalProvider = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <FileUploadModal />
    </>
  );
};

export default ModalProvider;
