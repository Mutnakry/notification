
// import { Bell, CheckCircle, XCircle, Info } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { useOrderSocket } from './hooks/useOrderSocket';
// import { Badge } from './components/ui/badge';
// import { useOrderNotifications } from './hooks/useOrderNotifications';

// interface Props {
//   userId?: string;
// }

// export interface Notification {
//   id: number;
//   orderId: string;
//   message: string;
//   time: string;
//   status: 'success' | 'error' | 'info';
// }

// export default function NotificationDropdown({ userId }: Props) {
//   const socket = useOrderSocket(userId);
//   const [notifications, setNotifications] = useOrderNotifications();
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (!socket) return;

//     const handleOrderCreated = (order: any) => {
//       const message = order.count
//         ? `Your order #${order.count} created: ${order.orderId}`
//         : `New order created: ${order.orderId}`;

//       setNotifications((prev) => [
//         {
//           id: Date.now(),
//           orderId: order.orderId ?? 'unknown',
//           message,
//           time: new Date().toLocaleTimeString(),
//           status: 'success',
//         },
//         ...prev,
//       ]);
//     };

//     const handleOrderStatus = ({ orderId, status }: any) => {
//       setNotifications((prev) => [
//         {
//           id: Date.now(),
//           orderId,
//           message: `Order ${orderId} status updated: ${status}`,
//           time: new Date().toLocaleTimeString(),
//           status: 'info',
//         },
//         ...prev,
//       ]);
//     };

//     const handleOrderError = ({ orderId, error }: any) => {
//       setNotifications((prev) => [
//         {
//           id: Date.now(),
//           orderId,
//           message: `Order ${orderId} Error: ${error}`,
//           time: new Date().toLocaleTimeString(),
//           status: 'error',
//         },
//         ...prev,
//       ]);
//     };

//     socket.on('order-created', handleOrderCreated);
//     socket.on('order-status', handleOrderStatus);
//     socket.on('order-error', handleOrderError);

//     return () => {
//       socket.off('order-created', handleOrderCreated);
//       socket.off('order-status', handleOrderStatus);
//       socket.off('order-error', handleOrderError);
//     };
//   }, [socket]);

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="relative rounded-full p-2 hover:bg-gray-100 focus:outline-none"
//       >
//         <Bell className="h-6 w-6 text-gray-600" />
//         {notifications.length > 0 && (
//           <Badge className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full">
//             {notifications.length}
//           </Badge>
//         )}
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border z-50">
//           <div className="p-4 border-b font-medium">
//             Notifications ({notifications.length})
//           </div>
//           <ul className="max-h-80 overflow-auto">
//             {notifications.length === 0 && (
//               <div className="p-4 text-center text-gray-500">
//                 No new notifications.
//               </div>
//             )}
//             {notifications.map((notif) => (
//               <li
//                 key={notif.id}
//                 className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 border-b last:border-0"
//               >
//                 {notif.status === 'success' && (
//                   <CheckCircle className="text-green-500 h-5 w-5" />
//                 )}
//                 {notif.status === 'error' && (
//                   <XCircle className="text-red-500 h-5 w-5" />
//                 )}
//                 {notif.status === 'info' && (
//                   <Info className="text-blue-500 h-5 w-5" />
//                 )}
//                 <div className="flex-1">
//                   <p className="text-sm font-semibold text-gray-800">
//                     {notif.message}
//                   </p>
//                   <p className="text-xs text-gray-400">{notif.time}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="p-2 text-center border-t">
//             <button
//               className="text-sm text-blue-500 hover:underline"
//               onClick={() => setNotifications([])}
//             >
//               Clear all notifications
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import { Bell, CheckCircle, XCircle, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useOrderSocket } from './hooks/useOrderSocket';
import { Badge } from './components/ui/badge';
import { useOrderNotifications } from './hooks/useOrderNotifications';

interface Props {
  userId?: string;
}

export interface Notification {
  id: number;
  orderId: string;
  message: string;
  time: string;
  status: 'success' | 'error' | 'info';
}

export default function NotificationDropdown({ userId }: Props) {
  const socket = useOrderSocket(userId);
  const [notifications, setNotifications] = useOrderNotifications();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!socket) return;

    const handleOrderCreated = (order: any) => {
      const message = order.count
        ? `Your order #${order.count} created: ${order.orderId}`
        : `New order created: ${order.orderId}`;

      setNotifications((prev) => [
        {
          id: Date.now(),
          orderId: order.orderId ?? 'unknown',
          message,
          time: new Date().toLocaleTimeString(),
          status: 'success',
        },
        ...prev,
      ]);
    };

    const handleOrderStatus = ({ orderId, status }: any) => {
      setNotifications((prev) => [
        {
          id: Date.now(),
          orderId,
          message: `Order ${orderId} status updated: ${status}`,
          time: new Date().toLocaleTimeString(),
          status: 'info',
        },
        ...prev,
      ]);
    };

    const handleOrderError = ({ orderId, error }: any) => {
      setNotifications((prev) => [
        {
          id: Date.now(),
          orderId,
          message: `Order ${orderId} Error: ${error}`,
          time: new Date().toLocaleTimeString(),
          status: 'error',
        },
        ...prev,
      ]);
    };

    socket.on('order-created', handleOrderCreated);
    socket.on('order-status', handleOrderStatus);
    socket.on('order-error', handleOrderError);

    return () => {
      socket.off('order-created', handleOrderCreated);
      socket.off('order-status', handleOrderStatus);
      socket.off('order-error', handleOrderError);
    };
  }, [socket]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative rounded-full p-2 hover:bg-gray-100 focus:outline-none"
      >
        <Bell className="h-6 w-6 text-gray-600" />
        {notifications.length > 0 && (
          <Badge className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full">
            {notifications.length}
          </Badge>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border z-50">
          <div className="p-4 border-b font-medium">
            Notifications ({notifications.length})
          </div>
          <ul className="max-h-80 overflow-auto">
            {notifications.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                No new notifications.
              </div>
            )}
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 border-b last:border-0"
              >
                {notif.status === 'success' && (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                )}
                {notif.status === 'error' && (
                  <XCircle className="text-red-500 h-5 w-5" />
                )}
                {notif.status === 'info' && (
                  <Info className="text-blue-500 h-5 w-5" />
                )}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">
                    {notif.message}
                  </p>
                  <p className="text-xs text-gray-400">{notif.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-2 text-center border-t">
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={() => setNotifications([])}
            >
              Clear all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
