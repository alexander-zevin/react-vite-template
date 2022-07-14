import ReactDOM from 'react-dom/client';
import { ErrorHandling } from '@components';
import App from './App';

import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <ErrorHandling>
    <App />
  </ErrorHandling>,
);
