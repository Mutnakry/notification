// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export interface Notification {
//     id: number;
//     orderId: string;
//     message: string;
//     time: string;
//     status: 'success' | 'error' | 'info';
// }

// export function useOrderNotifications() {
//     const [notifications, setNotifications] = useState<Notification[]>([]);

//     useEffect(() => {
//         const fetchNotifications = async () => {
//             try {
//                 const res = await axios.get<Omit<Notification, 'id'>[]>('http://localhost:3000/order-notify');
//                 // const res = await axios.get<Omit<Notification, 'id'>[]>('https://api.gmsgamers.com/order-notify');

//                 const formatted = res.data.map((n) => ({
//                     ...n,
//                     id: Date.now() + Math.random(),
//                 }));
//                 setNotifications(formatted);
//             } catch (err) {
//                 console.error('Failed to fetch notifications', err);
//             }
//         };

//         fetchNotifications();
//     }, []);

//     return [notifications, setNotifications] as const;
// }



// hooks/useOrderNotifications.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Notification {
  id: number;
  orderId: string;
  message: string;
  time: string;
  status: 'success' | 'error' | 'info';
}

export function useOrderNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get<Omit<Notification, 'id'>[]>('http://localhost:3000/order-notify');

        const formatted = res.data.map((n) => ({
          ...n,
          id: Date.now() + Math.random(),
        }));
        setNotifications(formatted);
      } catch (err) {
        console.error('Failed to fetch notifications', err);
      }
    };

    fetchNotifications();
  }, []);

  return [notifications, setNotifications] as const;
}
