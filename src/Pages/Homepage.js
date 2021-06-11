import React from 'react';
import Topbar from '../Components/Topbar/Topbar';
import Searchbar from '../Components/Searchbar/Searchbar';
import Menubar from '../Components/Menubar/Menubar';
import Banner from '../Components/Banner/Banner';
import Eservices from '../Components/E-services/Eservices';

export default function Homepage() {
    return (
        <div>
            <Topbar />
            <Searchbar />
            <Menubar />
            <Banner />
            <Eservices />
        </div>
    )
}
