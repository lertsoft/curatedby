import React from 'react';

import bars from '@/data/Bars';

import Navbar from './Navbar';

// import cafes from '@/data/Cafes';
// import cultural from '@/data/Cultural';
// import parks from '@/data/Parks';

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
    <section className="bg-white ">
      <div className="mx-auto h-20 max-w-5xl ">
        <h1
          className=" py-16 text-center text-4xl font-bold md:text-left md:text-4xl"
          id="title"
        >
          List of all the locations
        </h1>
      </div>
      <div className="flex">
        <div className="mx-auto h-10 max-w-6xl self-center">
          <Navbar />
        </div>
      </div>
      <div className="mt-4">
        <div className="mx-auto grid max-w-xl grid-cols-1 pt-20 ">
          {/* List Card */}
          {bars.features.map((bar, key) => (
            <>
              <LocationCard
                key={key}
                name={bar.properties.name}
                description={bar.properties.description}
                visited={bar.properties.visited}
                visits={bar.properties.visits}
                kind={bar.properties.kind}
              />
              {key === bars.features.length - 1 ? null : (
                // eslint-disable-next-line tailwindcss/no-custom-classname
                <div className="divider-container -mt-2 flex flex-col items-center">
                  <div
                    className={`text-base  ${
                      bar.properties.visited === true
                        ? 'relative z-10 h-4 w-4  rounded-full bg-green-500'
                        : 'relative z-10 h-4 w-4  rounded-full bg-red-500'
                    }`}
                  >
                    <div
                      className={`text-base  ${
                        bar.properties.visited === true
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
  );
}
