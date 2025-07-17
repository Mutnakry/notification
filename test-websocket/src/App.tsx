// // import { render } from '@testing-library/react';
// // import App from './App';
// // import { io } from 'socket.io-client';

// // jest.mock('socket.io-client', () => {
// //   const mSocket = {
// //     emit: jest.fn(),
// //     on: jest.fn(),
// //     disconnect: jest.fn(),
// //   };
// //   return {
// //     io: jest.fn(() => mSocket),
// //   };
// // });

// // describe('App socket.io connection', () => {
// //   it('connects and emits join event on mount', () => {
// //     render(<App />);
// //     expect(io).toHaveBeenCalledWith('http://localhost:3000');

// //     const socket = io.mock.results[0].value;
// //     expect(socket.emit).toHaveBeenCalledWith('join', { userId: 'USER_ID' });
// //     expect(socket.on).toHaveBeenCalledWith('order-created', expect.any(Function));
// //     expect(socket.on).toHaveBeenCalledWith('order-status', expect.any(Function));
// //     expect(socket.on).toHaveBeenCalledWith('order-error', expect.any(Function));
// //   });
// // });


// import { useEffect } from 'react';
// import { io } from 'socket.io-client';

// function App() {
//   useEffect(() => {
//     const socket = io('http://localhost:3000');
//     socket.emit('join', { userId: 'USER_ID' });

//     socket.on('order-created', (data) => {
//       console.log('🎉 Order Created:', data);
//     });

//     socket.on('order-status', (data) => {
//       console.log('📦 Order Status:', data);
//     });

//     socket.on('order-error', (data) => {
//       console.error('❌ Order Error:', data);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return <h1>Socket.IO App</h1>;
// }

// export default App;




// Example usage in App.tsx or Layout.tsx
import OrderNotifications from './OrderNotifications';

export default function AppLayout() {
  const userId = 'user-id-from-auth-context'; 
  
  return (
    <div>
      {/* Other components */}
      <OrderNotifications userId={userId} />
    </div>
  );
}
