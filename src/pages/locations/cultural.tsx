import React from 'react';

import data from '@/data/Cultural';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { SubPages } from '@/templates/SubPages';

const LocationCard = ({ name, description, kind, visited, visits }) => {
  if (!description)
    return (
      <>
        <h1> There is no data to show! </h1>
        <p>
          Contact <a href="https://twitter.com/costeronny"> Ronny Coste </a>
          And he will take care of this as soon as possible
        </p>
      </>
    );
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="location-card relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl">
      <h1 className="absolute -top-10 text-4xl font-bold text-blue-300  md:-left-10 md:-top-10">
        Have I been? {String(visited)}
      </h1>
      <h1 className="text-xl font-semibold">{name}</h1>
      <a href={visits} className="text-blue-500">
        {kind}
      </a>
      <p className="my-2 text-blue-400 dark:text-blue-600">{description}</p>
    </div>
  );
};

// All the data display on this component is store in the data.json file
// that way this component is more minimal and not as long as it would have been.
export default function Location() {
  return (
    <Main
      meta={
        <Meta
          title="Curated By"
          description="This page has a list of museum, galliers, and art centers that I have been to and/or I would like to go to. To Learn more check the about page 😄"
        />
      }
    >
      <SubPages>
        <section className="bg-white ">
          <div className="flex">
            <div className="mx-auto h-10 max-w-6xl self-center">
              {/* <Navval /> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="mx-auto grid max-w-xl grid-cols-1 pt-20 ">
              {/* List Card */}
              {data.features.map((val, key) => (
                <>
                  <LocationCard
                    key={key}
                    name={val.properties.name}
                    description={val.properties.description}
                    visited={val.properties.visited}
                    visits={val.properties.visits}
                    kind={val.properties.kind}
                  />
                  {key === data.features.length - 1 ? null : (
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    <div className="divider-container -mt-2 flex flex-col items-center">
                      <div
                        className={`text-base  ${
                          val.properties.visited === true
                            ? 'relative z-10 h-4 w-4  rounded-full bg-green-500'
                            : 'relative z-10 h-4 w-4  rounded-full bg-red-500'
                        }`}
                      >
                        <div
                          className={`text-base  ${
                            val.properties.visited === true
                              ? 'relative z-10 h-4 w-4 animate-ping rounded-full bg-green-500'
                              : 'relative z-10 h-4 w-4 animate-ping rounded-full bg-red-500'
                          }`}
                        ></div>
                      </div>

                      <div className="-mt-2 h-24 w-1 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
      </SubPages>
    </Main>
  );
}
