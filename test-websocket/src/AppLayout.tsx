

// src/AppLayout.tsx
import NotificationDropdown from './OrderNotifications';

export default function AppLayout() {

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="text-xl font-semibold">Your App</div>
        <div className="flex items-center gap-4">
          <NotificationDropdown/>
      
        </div>
      </header>

      <main className="p-4">{/* Main content goes here */}</main>
    </div>
  );
}
