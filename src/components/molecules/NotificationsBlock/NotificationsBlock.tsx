import { Toaster } from 'react-hot-toast';

export const NotificationsBlock = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        success: {
          style: {
            background: 'green',
          },
        },

        error: {
          duration: 3000,
          style: {
            background: 'black',
          },
        },
      }}
    />
  );
};
