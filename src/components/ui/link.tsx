import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const Link = ({
  href,
  children,
  className,
  onClick,
  target,
  rel,
  ...props
}: LinkProps) => {
  return (
    <RouterLink
      to={href}
      className={className}
      onClick={onClick}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
