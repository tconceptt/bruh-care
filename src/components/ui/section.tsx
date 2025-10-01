import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section id={id} className={`py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
};
