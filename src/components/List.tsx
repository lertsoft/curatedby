import React from 'react';

import bars from '@/data/Bars';
// import cafes from '@/data/Cafes';
// import cultural from '@/data/Cultural';
// import parks from '@/data/Parks';

const LocationCard = ({ name, description, kind, visited, visits }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="experience-card relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl dark:bg-gray-800">
      <h1 className="absolute -top-10 text-4xl font-bold text-gray-200  md:-left-10 md:-top-10">
        {visited}
      </h1>
      <h1 className="text-xl font-semibold">{name}</h1>
      <a href={visits} className="text-gray-500">
        {kind}
      </a>
      <p className="my-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

// All the data display on this component is store in the data.json file
// that way this component is more minimal and not as long as it would have been.
export default function Experience() {
  return (
    <section className="bg-white ">
      <div className="mx-auto h-48 max-w-6xl bg-white ">
        <h1 className=" py-20 text-center text-5xl font-bold md:text-left md:text-5xl">
          List of all the locations
        </h1>
      </div>
      <div className="-mt-4 bg-white ">
        <div className="mx-auto grid max-w-xl grid-cols-1 pt-20 ">
          {/* Experience card */}
          {bars.features.map((bar, idx) => (
            <>
              <LocationCard
                key={bar.geometry.coordinates[0]}
                name={bar.name}
                description={bar.description}
                visited={bar.visited}
                visits={bar.visits}
                kind={bar.kind}
              />
              {idx === bars.features.length - 1 ? null : (
                // eslint-disable-next-line tailwindcss/no-custom-classname
                <div className="divider-container -mt-2 flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full bg-green-500">
                    <div className="relative z-10 h-4 w-4 animate-ping rounded-full bg-green-500"></div>
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
