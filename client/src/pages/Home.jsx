import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import ErrorModal from '../components/ErrorModal/index.tsx';


const Home = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div className='flex flex-col justify-center'>
            <article id='hero' className='hero h-screen min-h-screen flex-col'>
                <h1 className='self-center pb-5 text-red-accent text-4xl'>Tipsy Gnome</h1>
                <img src={require('../assets/ff_logo_round-02-modified.png')} alt='Site Logo Gnome' className='p-4 px-10'/>
                <p className='mb-10 px-5 text-center text-xl md:text-lg'>Welcome to the world of craft cocktail foraging</p>
                <div className='flex flex-wrap justify-around'>
                    <Link to='/cocktails' className='flex hero-btn btn justify-center'>
                        <span className='self-center'>Recipes</span>
                    </Link>
                    <button className='hero-btn btn'>Interactive Map</button>
                    <Link to='/encyclopedia' className='flex hero-btn btn justify-center'>
                        <span className='self-center p-1'>Encyclopedia</span>
                    </Link>
                </div>
            </article>

            <div id='about-us-sect' className='w-screen p-2 my-10 flex justify-center flex-col'>
                <span className='section-header mb-1'>A Little About Us</span>                
                <p className='text-black text-base'>Welcome to our site, and to the exploration of the world around us through localized
                    foraging! This world is filled with a litany of ingredients just waiting to be discovered. Through
                    this project we aim to prepare you on your expedition out into nature to discover new flavors,
                    ingredients, and experiences to enhance your creative cocktail journey.</p>
            </div>
            <div id='do-dont-sect' className='w-screen p-2 my-10 flex justify-center flex-col'>
                <span className='section-header mb-1'>Do's and Don'ts</span> 
                <p className='my-2 text-xl'>RULE #1: NEVER EAT ANYTHING, WITHOUT BEING ABSOLUTLY POSITIVE YOU KNOW WHAT IT IS!</p>
                <p className='text-black my-2'>The world of foraging can be a magical experience filled with the joys of finding,
                    identifying and gathering your own ingredients, it can also be a very dangerous pastime if not
                    fully equipped with the proper knowledge and practices utilized by experienced foragers.
                    For some helpful tips, tricks, and reading material click more info.</p>
                <p className='text-sm italic opacity-50'>Disclaimer: The purpose of this site is to inspire you to get out and experience nature. Please do not use 
                    this site as a definative source of info, as it's content is user driven and not always verified. We do not 
                    accept any responsiblity for misidentified finds. Please exercise caution whenever choosing to ingest anything found
                    in the wild.
                </p>
                <Link to='/references' className='btn self-end inline-block'>More Info</Link>
            </div>
            <div id='link-sect' className='w-screen p-2 my-10 flex justify-center flex-col'>
                <Link to='/cocktails' className='link-sect-btn'>
                    <h3 className='text-warm-white border-b inline-block'>Cocktail Recipes</h3> 
                    <p>Check out our library of locally foraged cocktails submitted by our users. All of the recipes have been checked to ensure saftey, and deliciousness!</p>    
                </Link>
                <Link to='/encyclopedia' className='link-sect-btn'>
                    <h3 className='text-warm-white border-b inline-block'>Ingredient Encyclopedia</h3>
                    <p>Search for inspiration in our foraging Encyclopedia. Find everything from herbs, mushrooms, fruits and vegitables in your local area.</p>    
                </Link>
                <Link to='/references' className='link-sect-btn'>
                    <h3 className='text-warm-white border-b inline-block'>References</h3> 
                    <p>Looking for more info on cocktails or foraging? Check out some of our helpful references here.</p>
                </Link>
            </div>
        </div>
        
    )
};

export default Home;