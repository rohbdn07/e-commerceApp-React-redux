import React from 'react';
import Topbar from '../Components/Topbar/Topbar';
import Searchbar from '../Components/Searchbar/Searchbar';
import Menubar from '../Components/Menubar/Menubar';
import Banner from '../Components/Banner/Banner';
import Eservices from '../Components/E-services/Eservices';
import ProductsList from '../Components/ProductsContainer/ProductsList';
import PartnersList from '../Components/OurBrands/PartnersList';
import DemoApp from '../Components/DownloadApp/DemoApp';
import FooterList from '../Components/Footer/FooterList';

export default function Homepage() {
    return (
        <div>
            <Topbar />
            <Searchbar />
            <Menubar />
            <Banner />
            <Eservices />
            <ProductsList />
            <PartnersList />
            <DemoApp />
            <FooterList />
        </div>
    )
}
