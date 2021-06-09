import React from 'react';
import Topbar from '../Components/Topbar/Topbar';
import Searchbar from '../Components/Searchbar/Searchbar';
import Menubar from '../Components/Menubar/Menubar';
import Banner from '../Components/Banner/Banner';

export default function Homepage() {
    return (
        <div>
            <Topbar />
            <Searchbar />
            <Menubar />
            <Banner />
        </div>
    )
}
