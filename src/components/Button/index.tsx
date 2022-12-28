import React from "react";
import button from "./button.module.scss";

// With Function Component
interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

export function Button( {type = "button", onClick, children} : Props ) {
    return (
        <button 
            className={button["btn"]} 
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

// With Class Component //

// export class Button1 extends React.Component<{ 
//     type?: "button" | "submit" | "reset" | undefined;
//     onClick?: () => void
// }> {
//     render() {
//         const { type = "button", onClick } = this.props;
//         return (
//             <button 
//                 className={button["btn"]} 
//                 type={type}
//                 onClick={onClick}
//                 >
//                 {this.props.children}
//             </button>
//         );
//     }
// }