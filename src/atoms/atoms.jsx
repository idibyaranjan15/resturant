import { atom, selector } from "recoil";

export const propertyAtom = atom({
  key: "propertyAtom",
  default: {
    networkAtom: 102,
    jobsAtom: 0,
    messagingAtom: 0,
    notificationsAtom: 12,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const { networkAtom, jobsAtom, messagingAtom, notificationsAtom } =
      get(propertyAtom);

    return networkAtom + jobsAtom + messagingAtom + notificationsAtom;
  },
});
