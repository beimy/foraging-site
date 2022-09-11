import React, { FC, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Listbox } from '@headlessui/react';
// import { SelectorIcon } from '@heroicons/react/solid';
import { useSiteContext } from '../utils/GlobalState';
import { TOGGLE_ERROR_MODAL } from '../utils/actions';
import IngredientCard from '../components/IngredientCard/index.tsx';

interface EncycloProps {

};

// const fakerData = [
//     {id: 1, img: 'Test', name: 'Test Name', sciName: 'Test SciName', region: 'Test Region', season: 'Test Season'},
//     {id: 2, img: 'Test', name: 'Test Name', sciName: 'Test SciName', region: 'Test Region', season: 'Test Season'},
//     {id: 3, img: 'Test', name: 'Test Name', sciName: 'Test SciName', region: 'Test Region', season: 'Test Season'},
//     {id: 4, img: 'Test', name: 'Test Name', sciName: 'Test SciName', region: 'Test Region', season: 'Test Season'},
// ]

const filters = [
    {id: 1, param: 'Browse'},
    {id: 2, param: 'Name'},
    {id: 3, param: 'Flavor'},
    {id: 4, param: 'Region'}
];

const fakerData = [
    {id: 1, name: 'Snow Fungus', sciName: '', region: '', season: '', img: 'snow_fungus_img01.png'},
    {id: 2, name: 'Wild Ginger', sciName: '', region: '', season: '', img: 'ginger_img01.png'},
    {id: 3, name: 'Partridge Berry', sciName: '', region: '', season: '', img: 'partridge_berry_img01.png'},
    {id: 4, name: 'Purple Amoranth', sciName: '', region: '', season: '', img: 'purple_amoranth_img01.png'},
    {id: 5, name: 'Smooth Chanterelle', sciName: '', region: '', season: '', img: 'smooth_chanterelle_img01.png'}
];

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const EncycloPage: FC<EncycloProps> = ({}) => {
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [state, dispatch] = useSiteContext();

    function toggleErrorModal() {
        dispatch({type: TOGGLE_ERROR_MODAL});
    };

    return (
        <div className="p-2">
            <h1 className="section-header my-2">Encyclopedia</h1>
            <div id="disclaimer" className="my-6 pb-14 border-b h-fit">
                <span className="text-justify">Here you can find info on all sorts of flora. You can use the search bar to search by name, region, or flavors, or just 
                browse!<br /> <br /> This part of the site is still under construction until we can fill our database with useful info. If you are looking for info for potential ingredients
                check out some of our reference materials by clicking Learn More.</span>
                <Link to='/references' className="btn float-right">Learn More</Link>
            </div>

            <div id="search-sect" className="flex mt-10 ">
                <Listbox value={selectedFilter} onChange={setSelectedFilter}>
                    <div>
                        <Listbox.Label className='py-2 m-1 text-sm'>Search by:</Listbox.Label>
                        <div className="relative mt-2">
                            <Listbox.Button className='relative w-full cursor-default bg-warm-white border-b py-1 pl-1 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                                <span className="block truncate">{selectedFilter.param}</span>     
                            </Listbox.Button>
                            <Listbox.Options className='absolute w-fit pr-8 bg-true-grey'>
                                {filters.map((filter) => (
                                    <Listbox.Option
                                    key={filter.id}
                                    value={filter}
                                    className='m-2'
                                    >
                                {filter.param}
                                </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </div>
                </Listbox>
                {selectedFilter.id != 1 &&
                    <div className="mx-1">
                        <label className="m-1 text-sm">Search:</label>
                        <input type='text' id="search-field" className="mt-2 input-field h-1/2" placeholder="e.g. Rosemary" onClick={toggleErrorModal}></input>
                    </div>
                }
            </div>
            {selectedFilter.id == 1 &&
                <div id='browse-alpha' className="flex w-full flex-wrap justify-evenly my-2">
                    {alphabet.map((letter) => (
                        <button
                            id={`${letter}`}
                            key={letter}
                            className='alpha-btn' 
                            onClick={toggleErrorModal}   
                        >{letter}
                        </button>
                    ))}
                </div>
            }
            <div id="results-sect" className="flex flex-wrap justify-between my-10">
                {fakerData.map((item) => (
                    <IngredientCard
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        sciName={item.sciName}    
                        region={item.region}
                        season={item.season}
                    />
                ))}
            </div>
        </div>
    )
};

export default EncycloPage;