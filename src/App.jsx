import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { propertyAtom, totalNotificationSelector } from "./atoms/atoms";

const App = () => {
  // Get the entire state from propertyAtom
  const { jobsAtom, messagingAtom, networkAtom, notificationsAtom } =
    useRecoilValue(propertyAtom);

  // Use selector for the total notification value
  const totalNotificationValue = useRecoilValue(totalNotificationSelector);

  // Increment messaging count
  const setMessagingAtom = useSetRecoilState(propertyAtom);
  const handleAddMessage = () => {
    setMessagingAtom((prev) => ({
      ...prev,
      messagingAtom: prev.messagingAtom + 1,
    }));
  };

  return (
    <div className="flex justify-around items-center bg-blue-700 text-white py-3 px-6 fixed bottom-0 w-full shadow-lg z-50">
      <TaskbarItem icon="home" label="Home" />

      <TaskbarItem
        icon="group"
        label="Network"
        badgeValue={networkAtom >= 100 ? "99+" : networkAtom}
      />

      <TaskbarItem
        icon="work"
        label="Jobs"
        badgeValue={jobsAtom > 0 ? jobsAtom : undefined}
      />

      <TaskbarItem
        icon="chat"
        label="Messaging"
        badgeValue={messagingAtom > 0 ? messagingAtom : undefined}
      />

      <TaskbarItem
        icon="notifications"
        label="Notifications"
        badgeValue={notificationsAtom > 0 ? notificationsAtom : undefined}
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
  const setNotificationsAtom = useSetRecoilState(propertyAtom);

  const handleClick = () => {
    setNotificationsAtom((prev) => ({
      ...prev,
      notificationsAtom: prev.notificationsAtom + 1,
    }));
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
