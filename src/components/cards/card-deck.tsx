import { useQuery } from "@apollo/client";
import React from "react";
import CONTENTFUL_BLOGPOSTS from "../../apollo/schema/blogPosts";
import Grid from "../layout/grid";
import Card from "./card";

const CardDeck = (props) => { 

  const {loading, error, data} = useQuery(CONTENTFUL_BLOGPOSTS);

  const errorFeedback = (err: Object) => { 
    console.log(err);
    return <p>:( nope.</p> 
  }
  
   if (loading) return <p>Loading...</p>;
   if (error) return errorFeedback(error);


    return ( 
      <Grid colCount="1" smColCount="2" xxlColCount="4" gridGap="6">
          {data.posts.map((card, index) => { 
            return <Card key={index} title={card.postTitle} subtitle={card.author} />
          })}
      </Grid>  
    );
}

export default CardDeck;