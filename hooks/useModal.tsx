import { create } from "zustand";

export type ModalType = "addFile"

interface ModalData {
  
}

interface ModalStoreProps {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStoreProps>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => {
    set({ isOpen: true, type, data });
  },
  onClose: () => set({ type: null, isOpen: false }),
}));