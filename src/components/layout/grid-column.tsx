import React from "react";

const GridColumn = (props) => { 

    const bgColor = props.bgColor ? `bg-${props.bgColor }` : ''; 
    const colSpan = props.colSpan ? `col-span-${props.colSpan}` : '';

    return (
        <div className={`py-8 text-center ${bgColor} ${colSpan}`}>
            {props.children}
        </div>
    )
}

export default GridColumn;