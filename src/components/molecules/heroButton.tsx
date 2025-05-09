import React from "react";

interface HeroButtonProps {
  href: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, label, className, style }) => {
  return (
    <a
      href={href}
      aria-label={label}
      tabIndex={0}
      className={className}
      style={{ boxShadow: "4px 4px 0px #ff8800", ...style }}
    >
      {label}
    </a>
  );
};

export default HeroButton;