import * as React from "react";

export interface ErrorBoundaryProps {
  scope?: string;
  additionalInfo?: string;
  noFallbackRender?: boolean;
  onError?: () => void;
  customMessage?: React.ReactNode;
  children?: React.ReactElement;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(e: unknown, info: unknown) {
    if (this.props.scope) {
      console.error(`Error boundary in ${this.props.scope}`, {
        additionalInfo: this.props.additionalInfo,
        e,
        info,
      });
    }

    this.props.onError && this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      if (!this.props.noFallbackRender) {
        const message = this.props.customMessage
          ? this.props.customMessage
          : "Something went wrong";

        return (
          <div className="error-boundary">
            <h1>{message}</h1>
          </div>
        );
      }
      return null;
    } else {
      return this.props.children ? this.props.children : null;
    }
  }
}
