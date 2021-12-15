import React from "react";
import "./divider.css";

export interface DividerProps {
    /**
     * Divider text alignment
     */
     alignment?: "start" | "center" | "end";
    /**
     * Line style modifier
     */
     style?: "solid" | "dashed" | "dotted";
    /**
     * Weight modifiers
     */
     weight?: "light" | "regular" | "heavy";
    /**
     * Label modifier
     */
     label: string;
}

/**
 * Primary UI component
 */
 const Divider = ({
    alignment = "center",
    style = "solid",
    weight = "regular",
    label,
    }: DividerProps) => {
    let alignmentClass = "";
    switch (alignment) {
        case "start":
            alignmentClass = "start";
            break;
        case "center":
            alignmentClass = "center";
        case "end":
            alignmentClass = "end";
        default:
            break;
    }

    let styleClass = "";
    switch (style) {
        case "solid":
            styleClass = "solid";
            break;
        case "dashed":
            styleClass = "dashed";
        case "dotted":
            styleClass = "dotted";
        default:
            break;
    }

    let weightClass = "";
    switch (weight) {
        case "light":
            weightClass = "light";
            break;
        case "regular":
            weightClass = "regular";
        case "heavy":
            weightClass = "heavy";
        default:
            break;
    }
    return (
        <div className={`custom-divider ${alignment} ${style} ${weight}`}>
            <span className="divider-text">{label}</span>
        </div>
    );
};

export default Divider;