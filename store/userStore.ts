import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface LoginData {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  phone?: string;
  saveLoginData: (loginData: Partial<LoginData>) => void;
  clearLoginData: () => void;
  isLoggedIn: () => boolean;
}

export const useLoginStore = create<LoginData>()(
  persist(
    (set, get) => ({
      id: '',
      username: '',
      firstname: '',
      lastname: '',
      phone: '',
      isLoggedIn: () => !!get().id,
      saveLoginData: (loginData: Partial<LoginData>) => set((state) => ({...state, ...loginData})),
      clearLoginData: () =>
        set(() => ({
          id: '',
          username: '',
          firstname: '',
          lastname: '',
          phone: '',
        })),
    }),
    {
      name: 'login',
      storage: createJSONStorage(() => sessionStorage),
    },
  )
)