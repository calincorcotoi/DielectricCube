import React from "react";
import { Button } from "@mui/material";

interface ButtonHoverEffectProps {
  onClick: () => void;
  startIcon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

const ButtonHoverEffect: React.FC<ButtonHoverEffectProps> = ({
  onClick,
  startIcon,
  color,
  children,
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      startIcon={startIcon}
      sx={() => ({
        py: 1.5,
        px: 4,
        bgcolor: color,
        color: "white",
        fontWeight: 600,
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "all 0.3s",
        "&:hover": {
          bgcolor: "white",
          color: color,
          boxShadow: `0 6px 15px rgba(0,0,0,0.2), 0 0 0 2px ${color}`,
        },
      })}
    >
      {children}
    </Button>
  );
};

export default ButtonHoverEffect;
