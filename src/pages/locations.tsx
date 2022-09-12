import React from 'react';

// import List from '@/components/List';
// import MapsRegion from '@/components/D3Maps/MapsRegion';
import D3Maps from '@/components/D3Maps/D3Maps';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Locations = () => {
  return (
    <Main
      meta={
        <Meta
          title="Curated By"
          description="This website was created with the purpose of better organizing all my saved places on google maps, and so that I can more easily find the places that i want to go or have been."
        />
      }
    >
      <div className="App">
        {/* <Navbar /> */}
        <D3Maps />
      </div>
    </Main>
  );
};

export default Locations;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
