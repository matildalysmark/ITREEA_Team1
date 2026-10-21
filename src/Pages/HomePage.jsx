import React from 'react';
import '../style/HomePage.css';
import HomeInfo from '../Widgets/HomeInfo';
import AlertPanel from '../Widgets/AlertPanel'
import RegularGeoChart from '../Charts/RegularGeoChart';
import Notice from '../Widgets/Notice';
import InfoPanels from '../Widgets/InfoPanels';
import { MapPin } from 'lucide-react';

export default function HomePage() {

    return (
        <section className='supplier-dashboard-container'>
            <div className="hero"></div>
            <h1 className="home-font">
                ITREEA
            </h1>
            <div className='main-part'>
                <Notice></Notice>
                <HomeInfo></HomeInfo>
                <div className='map-panel-wrapper'>
                    <div className='map-container dashboard-panel-card'>
                        <div className='map-header'>
                            <div className='header-box'>
                                <MapPin size={18}></MapPin>
                            </div>
                            <h3>
                                Amount of suppliers in each country
                            </h3>
                        </div>
                        <RegularGeoChart
                            axes={["Country", "Value"]}
                            inputData={[
                                ["Poland", 42], ["Lithuania", 17], ["Sweden", 14],
                                ["Germany", 6], ["Romania", 4], ["Czech Republic", 3],
                                ["Latvia", 4], ["Slovakia", 6], ["Croatia", 1],
                                ["Finland", 2], ["France", 2], ["Spain", 1],
                                ["Ukraine", 1], ["Slovenia", 3], ["Estonia", 1],
                                ["Hungary", 1], ["Portugal", 3], ["Bulgaria", 1],
                                ["Denmark", 1], ["Bosnia and Herzegovina", 1], ["Switzerland", 2],
                                ["Serbia", 1], ["Norway", 1], ["Netherlands", 2],
                                ["Austria", 1], ["Italy", 1], ["Luxembourg", 1],
                                ["Belgium", 1], ["China", 13], ["Vietnam", 6],
                                ["Thailand", 1], ["Türkiye", 1], ["India", 1],
                                ["Indonesia", 1], ["United States", 1], ["Canada", 1],
                                ["Brazil", 2], ["New Zealand", 1]
                            ]}
                            valueColor={["#e0f7fa", "#147D55"]}
                            backgroundColor="#42619e"
                        />
                    </div>
                    <AlertPanel></AlertPanel>
                </div>
            </div>
            <InfoPanels></InfoPanels>
        </section>

    )
}
