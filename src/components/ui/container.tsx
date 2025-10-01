import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-[80rem] px-4 sm:px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
