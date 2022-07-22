import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-aq78iva3.us.auth0.com"
      clientId="DK8vtodf96Hu528XLQjfN3fvyJr4zBUf"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
