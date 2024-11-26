import React, { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms/atoms";

const App = () => {
  const networkValue = useRecoilValue(networkAtom);
  const jobsValue = useRecoilValue(jobsAtom);
  const messageValue = useRecoilValue(messagingAtom);
  const notificationValue = useRecoilValue(notificationsAtom);

  const incrementMessaging = useSetRecoilState(messagingAtom);

  // const totalNotification = useMemo(() => {
  //   return notificationValue + messageValue + jobsValue + networkValue;
  // }, [notificationValue, messageValue, jobsValue, networkValue]);
  const handleAddMessage = () => {
    incrementMessaging((value) => value + 1);
  };
  const totalNotificationValue = useRecoilValue(totalNotificationSelector);

  return (
    <div className="flex justify-around items-center bg-blue-700 text-white py-3 px-6 fixed bottom-0 w-full shadow-lg z-50">
      <TaskbarItem icon="home" label="Home" />

      <TaskbarItem
        icon="group"
        label="Network"
        badgeValue={networkValue >= 100 ? "99+" : networkValue}
      />

      <TaskbarItem
        icon="work"
        label="Jobs"
        badgeValue={jobsValue > 0 ? jobsValue : undefined}
      />

      <TaskbarItem
        icon="chat"
        label="Messaging"
        badgeValue={messageValue > 0 ? messageValue : undefined}
      />

      <TaskbarItem
        icon="notifications"
        label="Notifications"
        badgeValue={notificationValue > 0 ? notificationValue : undefined}
      />

      <TaskbarItem
        icon="person"
        label="Me"
        onClick={handleAddMessage}
        badgeValue={totalNotificationValue}
      />

      <ButtonComp />
    </div>
  );
};

const TaskbarItem = ({ icon, label, badgeValue, onClick }) => {
  return (
    <div
      className="flex flex-col items-center gap-1 hover:text-gray-300 cursor-pointer relative transition"
      onClick={onClick}
    >
      <span className="material-icons text-3xl">{icon}</span>
      <span className="text-sm">{label}</span>
      {badgeValue && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow">
          {badgeValue}
        </span>
      )}
    </div>
  );
};

const ButtonComp = () => {
  const incrementNotifications = useSetRecoilState(notificationsAtom);

  const handleClick = () => {
    incrementNotifications((value) => value + 1);
  };

  return (
    <div>
      <button
        className="bg-red-300 hover:bg-blue-400 px-5 py-2 rounded"
        onClick={handleClick}
      >
        Add Notification
      </button>
    </div>
  );
};

export default App;
