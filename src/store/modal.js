import { create } from 'zustand'

export const useStore = create((set) => ({
  modal: false,
  radio: undefined,
  openModal: (data) => set((state) => ({ modal: true, radio: data})),
  closeModal: ()=> set((state)=> ({ modal: false, radio: undefined})),
}))

