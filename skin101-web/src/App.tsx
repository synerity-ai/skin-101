import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

const App = () => (
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

export default App;
