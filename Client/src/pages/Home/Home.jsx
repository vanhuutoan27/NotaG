import React from 'react';

import Layout from '../../layouts/Layout';
import Hero from './Hero/Hero';
import Save from './Save/Save';
import Trending from './Trending/Trending';
import TopSelling from './TopSelling/TopSelling';
import TopRated from './TopRated/TopRated';
import Collection from './Collection/Collection';
import Deal from './Deal/Deal';

function Home() {
  return (
    <Layout>
      <Hero />
      <Save />
      <Trending />
      <TopSelling />
      <TopRated />
      <Collection />
      <Deal />
    </Layout>
  );
}

export default Home;
