import React from "react";

const Grid = (props) => {

    // Grid Breakpoints
    const smCols = props.smColCount ? `sm:grid-cols-${props.smColCount} ` : '';
    const mdCols = props.mdColCount ? `md:grid-cols-${props.mdColCount} ` : '';
    const lgCols = props.lgColCount ? `lg:grid-cols-${props.lgColCount} ` : '';
    const xlCols = props.xlColCount ? `xl:grid-cols-${props.xlColCount} ` : '';
    const xxlCols = props.xxlColCount ? `2xl:grid-cols-${props.xxlColCount} ` : '';

    // Grid Gaps
    const gridGap = props.gridGap ? `gap-${props.gridGap}` : '';

    // // Grid Span
    // const gridSpan = props.gridSpan ? `col-span-${props.colSpan}` : '';

    return (
        <div className={`grid grid-cols-${props.colCount} ${smCols}${mdCols}${lgCols}${xlCols}${xxlCols}${gridGap}`}>
            {props.children}
        </div>
    );
}

export default Grid;
