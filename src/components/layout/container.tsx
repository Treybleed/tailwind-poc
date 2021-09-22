import React from "react";

// export default class Container extends React.Component {

//      public render(): void { 
//         this.props.children;
//     }
// }


const Container = (props) => { 
    return ( 
        <div className="container px-4">
            {props.children}
        </div>
    )
}

export default Container;