import React from "react";
import { FC } from "react";


interface ICard { 
    title: String,
    subtitle: String
}

const Card:FC<ICard> = (props) => { 


    const {title, subtitle } = props;

    return ( 
        <div className="card flex flex-col flex-grow">
            <div className="relative h-96">
                <div className="absolute group h-full w-full z-10 hover:bg-primary mix-blend-multiply transition-all flex">
                    <div className="opacity-0 group-hover:opacity-100 ml-auto pt-8 pr-6 flex flex-col transition-opacity">
                        <a rel="noopener noreferrer" className="rounded-full bg-black p-5 mb-2" href="mailto:alex.marsh@profound.digital"></a>
                        <a rel="noopener noreferrer" target="_blank" className="rounded-full bg-black p-5 mb-2" href="#"></a>
                        <a rel="noopener no referrer" target="_blank" className="rounded-full bg-black p-5" href="#"></a>
                    </div>
                </div>
                <img height="800" width="572" alt="Team Member" className="object-cover w-full h-full object-center" src="https://www.wexphotovideo.com/globalassets/blog-images/2020/06-june/bw-portraits/01-orlando_h5div0051ivan-weiss_b.jpg" />
            </div>
            <div className="self-end bg-gray-700 w-full p-12 text-white text-center flex-grow">
                <p className="pb-3 text-2xl font-display uppercase">{title}</p>
                <p className="font-body text-base">{subtitle}</p>
            </div>
        </div>
    );
}

export default Card;
