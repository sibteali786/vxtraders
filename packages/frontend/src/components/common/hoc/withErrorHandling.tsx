import { ComponentType } from "react";
import { Error } from "@/components/common/Error/Error";

type ErrorComponentProps = {
  isError: boolean;
  error?: string;
};

function withErrorHandling<P extends object>(
  Component: ComponentType<P>,
): React.FC<P & ErrorComponentProps> {
  const withError: React.FC<P & ErrorComponentProps> = ({
    isError,
    error,
    ...props
  }: P & ErrorComponentProps) => {
    // return Error if there is an error
    if (isError) {
      return <Error>{error || "Something went wrong, please try again!"}</Error>;
    }
    // otherwise return the component itself
    return <Component {...(props as P)} />;
  };
  return withError;
}

export default withErrorHandling;
