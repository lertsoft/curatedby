import React from 'react';

import List from '@/components/List';
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
      <List />
    </Main>
  );
};

export default Locations;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
