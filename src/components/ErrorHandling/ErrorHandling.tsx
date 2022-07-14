import { Component } from 'react';

import type { ErrorHandlingProps, ErrorHandlingState } from './ErrorHandling.types';

class ErrorHandling extends Component<ErrorHandlingProps, ErrorHandlingState> {
  constructor(props: ErrorHandlingProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorHandlingState {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h1>Что-то пошло не так...</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorHandling;
