import { ReactNode } from 'react';

export interface ErrorHandlingState {
  hasError: boolean;
}

export interface ErrorHandlingProps {
  children: ReactNode;
}
