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
        className="mx-4 text-xl font-normal leading-loose  md:text-xl"
        style={{ lineHeight: '3rem' }}
      >
        This page / website / web-app was created because google does not offer
        a way for me to surface my saved places on maps in a native way. If you
        have a lot of places like me you want to go to those places or so you
        would hope but google does not surface those places if you search. You
        need to purposely look for a saved place. How it works now is that you
        need to find the saved icon (a Green Marker) if you know where it is but
        usually, you don`t know that is why you are using maps. So the second
        step is going to that area but again you might find it or you might not
        but it will take a long time to do that eitherway. So the third option
        is just knowing the name and by that point, the feature is kind of
        useless because you are using the feature to outsource these things...
        And well, this is why I build this thing, now you go and enjoy.
        <br></br>
        <br></br>
        The way this app work is I could go to a neighborhood go to my app press
        locate me and it shows me every place saved in that area. If I want to
        go to a restaurant I press the restaurant Icon get some quick info and
        go there. I can easily surface the information that I need to go to the
        places that I have saved. The way I am using my data it will allow me to
        understand better the information that I had stored on google maps and
        act on it.
        <br></br>I would consider myself a google maps power-user as you can
        kind of assume from the paragraph above so when google offerings were
        not meeting my needs and standards I when out of my way to build that
        thing that I wanted and needed to better understand all my maps
        information.
      </p>
      <p
        className="mx-4 text-xl font-normal leading-loose  md:text-xl"
        style={{ lineHeight: '3rem' }}
      >
        <br></br>
        <span className="font-semibold"> The website is pretty simple.</span>
        <br></br>
        It has Icons to represent Bars, Restaurants, Japanese Restaurants, Parks
        / Hiking trails, Museums / Galleries, Clubs / Dance Venues, Cafes, and
        Places that I would like to travel to.
        <br></br>
        The data used on these maps came from my saved information from google.
        Google does not offer clean data or usable actionable data at all so you
        have clean and structure it manually... it took me 5 days to do so.
        <br></br> It was built using Google Maps API`s, Next, React, Tailwind,
        and Typescript / Javascript. Pretty over-engineer but 🤷🏽‍♂️.
        <br></br>
        This Website also works as a PWA or Progressive Web Application so tried
        it out! Install it on your phone 🕺🏽.
      </p>
      <p
        className="mx-4 text-lg font-semibold leading-loose  md:text-lg"
        style={{ lineHeight: '2rem' }}
      >
        <br></br>
        Build by <a href="https://ronnycoste.com"> Ronny Coste</a> <br></br>
        Source Code <a href="https://github.com/lertsoft/curatedby"> Github </a>
        <br></br>
        <br></br>
      </p>
    </div>
  </Main>
);

export default About;
