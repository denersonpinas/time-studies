import React from "react";
import button from "./button.module.scss";

export class Button extends React.Component<{ 
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button 
                className={button["btn"]} 
                type={type}
                onClick={onClick}
                >
                {this.props.children}
            </button>
        );
    }
}