import { createRoot } from 'react-dom/client';
import { ErrorHandling } from '@components';
import App from './App';

import '@styles/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <ErrorHandling>
    <App />
  </ErrorHandling>,
);
