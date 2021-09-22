import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import Container from "../components/layout/container";
import CardDeck from '../components/cards/card-deck';
import HeroCenterContent from '../components/heros/hero-center-text';
import { Helmet } from "react-helmet"
import fetch from 'cross-fetch';

// Testing CI

const Home = (props) => {
  
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000',
      fetch
    }),
    // uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
    <Helmet>
      <meta name="Summary of Blog Listings for our Digital Estate, find out more here." />
      <link rel="preload" as="image" href="https://www.wexphotovideo.com/globalassets/blog-images/2020/06-june/bw-portraits/01-orlando_h5div0051ivan-weiss_b.jpg" />
      <title>Welcome to Alex Digital</title>
    </Helmet>
    <main>
    
      <HeroCenterContent />
      <Container>
        <CardDeck />
      </Container>
    </main>
    </ApolloProvider>
  )
}

export default Home;