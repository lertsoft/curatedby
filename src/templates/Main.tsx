import { ReactNode } from 'react';

import Link from 'next/link';

import { NavbarTwoColumns } from '@/components/NavbarTwoColumns';
import { Section } from '@/layout/Section';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// NAVBAR
const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      {/* <div className="border-b border-gray-300">  */}
      {/* <div className="pt-16 pb-8">
        <div className="text-3xl font-bold text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
      </div> */}
      <div>
        <Section yPadding="py-1">
          <NavbarTwoColumns logo="Curated By">
            <li className="mt-0">
              <Link href="/about">
                <a>List</a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/about">
                <a>About </a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </div>
    </div>

    {/* Body of the App */}

    <div className=" inset-full mx-0">{props.children}</div>

    {/* FOOTER  */}
    {/* <div className=" border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Created with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://www.ronnycoste.com">Ronny Coste</a>
    </div> */}
  </div>
);

export { Main };
