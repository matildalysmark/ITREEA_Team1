import '../style/HomePage.css';
import HomeInfo from '../Widgets/HomeInfo';
import AlertPanel from '../Widgets/AlertPanel'
import RegularGeoChart from '../Charts/RegularGeoChart';
import Notice from '../Widgets/Notice';
import InfoPanels from '../Widgets/InfoPanels';

export default function HomePage() {

    return (
        <section className='home-page'>
            <div className="hero"></div>
            <h1 className="home-font">
                ITREEA
            </h1>
            <div className='main-part'>
                <Notice></Notice>
                <HomeInfo></HomeInfo>
                <div className='map-panel-wrapper'>
                    <div className='map-container'>
                        <RegularGeoChart
                            axes={["Country", "Value"]}
                            inputData={[
                                ["Poland", 29],
                                ["Lithuania", 12],
                                ["Sweden", 8],
                                ["Germany", 6],
                                ["Romania", 3],
                                ["Czech Republic", 3],
                                ["Latvia", 3],
                                ["Slovakia", 3],
                                ["Croatia", 1],
                                ["Finland", 2],
                                ["France", 2],
                                ["Spain", 1],
                                ["Ukraine", 0.6],
                                ["Slovenia", 1],
                                ["Estonia", 0.5],
                                ["Hungary", 1],
                                ["Portugal", 1],
                                ["Bulgaria", 0.2],
                                ["Denmark", 0.3],
                                ["Bosnia and Herzegovina", 0.1],
                                ["Switzerland", 0.5],
                                ["Serbia", 0.1],
                                ["Norway", 1],
                                ["Netherlands", 0.01],
                                ["Austria", 0.1],
                                ["Italy", 0.2],
                                ["Luxembourg", 0.01],
                                ["Belgium", 0.1],
                                ["China", 11],
                                ["Vietnam", 3],
                                ["Thailand", 0.5],
                                ["Türkiye", 0.1],
                                ["India", 0.003],
                                ["Indonesia", 0.1],
                                ["United States", 0.1],
                                ["Canada", 0.01],
                                ["Brazil", 0.1],
                                ["New Zealand", 0.01]
                            ]}
                            valueColor={["#e0f7fa", "#147D55"]}
                            backgroundColor="#42619e"
                        />
                    </div>
                    <AlertPanel></AlertPanel>
                </div>
                <InfoPanels></InfoPanels>
            </div>
        </section>

    )
}
