import { useQuery } from "@apollo/client";
import React, { FC, Fragment } from "react";
import CONTENTFUL_HEROS from "../../apollo/schema/hero";

interface IHeroCenterText { 
    title: String;
    copy: String 
}

const HeroCenterContent:FC<IHeroCenterText> = (props) => {

    const {title, copy} = props;
    const {loading, error, data} = useQuery(CONTENTFUL_HEROS);

    if (loading) return <p>Loading&hellip;</p>
    if (error) return <p>:( nope.</p>
    return ( 
        <Fragment>
        {data.hero.map((item, index) => {
            return <div key={index} className="px-6 py-10 bg-yellow-400 w-full flex flex-col items-center justify-center text-center mb-6">
                        <div className="w-full lg:w-9/12 flex flex-col items-center justify-center text-center">
                            <h1>{item.title}</h1>
                            <p>{item.paragraphCopy}</p>
                            <a className="mt-5 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded" href={item.buttonUrl} rel="noopener noreferrer">{item.buttonTitle}</a>
                        </div>
                    </div>
        })}
        </Fragment>
    )
}

export default HeroCenterContent;