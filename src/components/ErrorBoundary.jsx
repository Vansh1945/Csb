import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              3D View Unavailable
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Your device doesn't support 3D graphics or WebGL is disabled.
            </p>
            {this.props.fallback && this.props.fallback}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
