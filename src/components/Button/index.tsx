import React from "react";
import button from "./button.module.scss";

export class Button extends React.Component<{ 
    type?: "button" | "submit" | "reset" | undefined 
}> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button className={button["btn"]} type={type}>
                {this.props.children}
            </button>
        );
    }
}