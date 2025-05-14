import React, { createContext, useContext, useState } from 'react';
import '../../style/notification.css';


const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const showNotification = (message, type = 'info', duration = 3000) => {
    setNotification({ message, type });
    setIsExiting(false);

    setTimeout(() => {
      setIsExiting(true);

      // Animatsiyaga vaqt berish
      setTimeout(() => {
        setNotification(null);
      }, 300); // CSS chiqish animatsiyasi 0.3s
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className={`notification ${notification.type} ${isExiting ? 'exit' : ''}`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);




