import React from "react";
import "./button.css";

export interface ButtonProps  {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * How large should the button be?
     */
    size?: "sm" | "md" | "lg";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
    primary = true,
    size = "md",
    onClick,
    label,
    }: ButtonProps) => {
    const mode = primary
        ? "btn-primary"
        : "btn-secondary";
    return (
        <button
        type="button"
        className={["btn", `btn-${size}`, mode].join(
            " "
        )}
        onClick={onClick}
        >
        {label}
        </button>
    );
};

export default Button;