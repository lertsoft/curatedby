import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import { AppConfig } from '@/utils/AppConfig';

type ISubPageProps = {
  children: ReactNode;
};

// NAVBAR
const SubPages = (props: ISubPageProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    <div className="mx-auto max-w-screen-xl">
      {/* <div className="border-b border-gray-300">  */}
      <div className="pt-10 pb-0">
        <div className="text-3xl font-bold text-blue-700">
          List of Locations
        </div>
        {/* <div className="text-xl">{AppConfig.description}</div> */}
        {/* </div> */}
        <div className="">
          <Navbar />
        </div>
      </div>
    </div>

    {/* Body of the App */}

    <div className=" inset-full mx-0">{props.children}</div>

    {/* FOOTER  */}
    <div className=" border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Created with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://www.ronnycoste.com">Ronny Coste</a>
    </div>
  </div>
);

export { SubPages };
