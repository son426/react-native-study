import { atom, selector } from "recoil";

export const authAtom = atom({
  key: "authAtom",
  default: {
    isAuthenticated: false,
    token: "",
  },
});

export const authSelector = selector({
  key: 'authSelector',
  get: ({ get }) => {
    const authState = get(authAtom);
    return authState.isAuthenticated;
  },
  set: ({ set }, newAuthState) => {
    set(authAtom, prevAuthState => ({
      ...prevAuthState,
      isAuthenticated: newAuthState,
    }));
  },
});
