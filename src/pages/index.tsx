import React from 'react';

import { FloatControl } from '@/components/FloatControl';
// import { Detail } from '@/components/maps/Detail';
import MyMaps from '@/components/maps/maps';
import { Modal } from '@/components/Modal';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { about, current, setCurrent, setAbout } from '@/utils/store';

import About from './about';

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
      {/* <MyMaps city={city} data={data} geo={filteredGeo} filter={filter} /> */}

      <FloatControl />

      <Modal value={!!current} setValue={() => setCurrent(null)}>
        {/* {current ? <Detail shop={current} /> : null} */}
      </Modal>
      <Modal value={about} setValue={() => setAbout(false)}>
        <About />
      </Modal>
    </Main>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
