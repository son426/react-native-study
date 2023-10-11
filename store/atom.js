import { atom, selector } from "recoil";
export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-07-14"),
  },
  {
    id: "e2",
    description: "Bananas",
    amount: 59.99,
    date: new Date("2021-09-14"),
  },
  {
    id: "e3",
    description: "Two books",
    amount: 59.99,
    date: new Date("2021-11-14"),
  },
  {
    id: "e4",
    description: "Two books",
    amount: 59.99,
    date: new Date("2021-11-14"),
  },
  {
    id: "e5",
    description: "Two books",
    amount: 59.99,
    date: new Date("2021-11-14"),
  },
  {
    id: "e6",
    description: "Two books",
    amount: 59.99,
    date: new Date("2021-11-14"),
  },
  {
    id: "e7",
    description: "Two books",
    amount: 59.99,
    date: new Date("2021-11-14"),
  },
  {
    id: "e8",
    description: "Two books",
    amount: 59.99,
    date: new Date("2021-11-14"),
  },
];

export const expensesState = atom({
  key: "expensesState",
  default: DUMMY_EXPENSES,
});

export const expensesStateWithActions = selector({
  key: "expensesStateWithActions",
  get: ({ get }) => get(expensesState),
  set: ({ set }, newValue) => set(expensesState, newValue),
});
