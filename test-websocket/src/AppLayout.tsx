// // src/AppLayout.tsx
// import OrderNotifications from './OrderNotifications';
// import { useAuth } from './hooks/useAuth';

// export default function AppLayout() {
//   const { user } = useAuth();

//   return (
//     <div>
//       <header className="p-4 bg-blue-600 text-white">
//         Welcome, {user?.username || 'Guest'}
//       </header>

//       <main>
//         {/* Your main application components here */}
//       </main>

//       {user?.id && <OrderNotifications userId={user.id} />}
//     </div>
//   );
// }


// src/AppLayout.tsx
import NotificationDropdown from './OrderNotifications';
import { useAuth } from './hooks/useAuth';

export default function AppLayout() {
  const { user } = useAuth();

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="text-xl font-semibold">Your App</div>
        <div className="flex items-center gap-4">
          {user?.id && <NotificationDropdown userId={user.id} />}
          <div className="rounded-full bg-indigo-500 text-white h-8 w-8 flex items-center justify-center">
            {user?.username.charAt(0).toUpperCase() || 'U'}
          </div>
        </div>
      </header>

      <main className="p-4">
        {/* Main content goes here */}
      </main>
    </div>
  );
}
