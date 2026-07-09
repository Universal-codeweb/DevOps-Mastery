import type { ReactNode } from "react";
type CardProps={
    children: ReactNode;
};
function Card(props: CardProps){
    return (

    <div
        style={{
            border: "2px solid gray",
            borderRadius: "10px",
            padding: "20px",
            margin: "15px",
        }}
    >
        {props.children}
    </div>

);
    
}
export default Card;
