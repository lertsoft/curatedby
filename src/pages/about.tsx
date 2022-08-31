import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Curated By"
        description="What is this project about? Why Did I build this for? Here is all the info you need 😄"
      />
    }
  >
    <div className=" mx-auto flex h-48 max-w-6xl bg-white">
      <h1 className=" py-20 text-center text-5xl font-bold md:text-left md:text-5xl">
        {' '}
        About{' '}
      </h1>
    </div>
    <div className="mx-auto -mt-10 max-w-6xl bg-white pt-20">
      <p
        className="mx-4 text-2xl font-semibold leading-loose  md:text-4xl"
        style={{ lineHeight: '3rem' }}
      >
        This page / website / webapp was created with the purpuse for me to
        understand better the information that I had stored on google maps.{' '}
        <br></br>I would consider myself a poweruser of google maps so when
        google offerings were not meeting my needs and standards I when out of
        my way to build that thing that i wanted and needed to better understand
        all my maps information.
      </p>
      <p
        className="mx-4 text-2xl font-semibold leading-loose  md:text-4xl"
        style={{ lineHeight: '3rem' }}
      >
        <br></br>
        The website is pretty simple.<br></br>
        It was built using Google Maps API`s, Next, React, Tailwind, and
        Typescript / Javascript. Pretty osverengineer but 🤷🏽‍♂️.<br></br>
        This Website also works as a PWA or Progressive Web Application so tried
        it out!
      </p>
      <p
        className="mx-4 text-xl font-semibold leading-loose  md:text-2xl"
        style={{ lineHeight: '2rem' }}
      >
        <br></br>
        Build by <a href="https://ronnycoste.com"> Ronny Coste</a> <br></br>
        Source Code <a href="https://github.com/lertsoft/curatedby"> Github </a>
        <br></br>
      </p>
    </div>
  </Main>
);

export default About;
