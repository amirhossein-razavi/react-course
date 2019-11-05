import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: null,
    };
  }

  static getDerivedStateFromError(err) {
    // Update state so the next render will show the fallback UI.
    return { err };
  }

  componentDidCatch(err) {
    console.log(err.message);
  }

  render() {
    const { children } = this.props;
    const { err } = this.state;

    if (err) {
      return (
        <div className="text-danger">
          {err.message}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
