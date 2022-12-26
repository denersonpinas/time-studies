import React from "react";
import button from "./button.module.scss";

export class Button extends React.Component {
    render() {
        return (
            <button className={button["btn"]}>
                {this.props.children}
            </button>
        );
    }
}