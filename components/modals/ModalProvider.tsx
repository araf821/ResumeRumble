"use client";

import { useEffect, useState } from "react";
import FileUploadModal from "./FileUploadModal";
import CreateRoomModal from "./CreateRoomModal";

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
      <CreateRoomModal />
    </>
  );
};

export default ModalProvider;
