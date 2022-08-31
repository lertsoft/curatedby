import React from 'react';

import MyMaps from '@/components/maps/Maps';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Curated By"
          description="This website was created with the purpose of better organizing all my saved places on google maps, and so that I can more easily find the places that i want to go or have been."
        />
      }
    >
      <MyMaps />
    </Main>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
