import React from 'react';

export const HeroCard = () => {
  return (
    <div className='mb-16 md:mb-10'>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center">
            Discover & Share
            <br />
            <span className="pink_gradient text-center">
                Programming Tips
            </span>
        </h1>
        <p className="my-4 md:my-6 px-8 text-sm md:text-base md:px-72 text-center leading-7">
            CodeNest is a modern and open source tool that
            allows user to discover & share useful and worthwhile tips and tricks from programmers around the world.
        </p>
    </div>
  )
}
