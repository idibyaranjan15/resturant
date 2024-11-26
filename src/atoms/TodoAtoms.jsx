import { atom } from "recoil";

export const TodoList = atom({
  key: "todo",
  default: [
    {
      id: Math.floor(Math.random() * 9 + 1),
      title: `Shop ${Math.floor(Math.random() * 99 + 1)} `,
      description: `Buy essentials ${Math.floor(Math.random() * 999 + 1)} `,
    },
  ],
});
