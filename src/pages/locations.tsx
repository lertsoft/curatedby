import React from 'react';

// import List from '@/components/List';
import D3Maps from '@/components/D3Maps/D3Maps';
import Draw from '@/components/Draw';
import data from '@/data/everything.json';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Locations = () => {
  return (
    <Main
      meta={
        <Meta
          title="Something to Do"
          description="This website was created with the purpose of better organizing all my saved places on google maps, and so that I can more easily find the places that i want to go or have been."
        />
      }
    >
      {/* <React.StrictMode> */}
      <div className="App">
        <h1>My Places</h1>
        <D3Maps data={data} />
      </div>
      <Draw />

      {/* </React.StrictMode> */}
    </Main>
  );
};

export default Locations;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
