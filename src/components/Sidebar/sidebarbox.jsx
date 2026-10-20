import React, {useState} from 'react';
import { ExitDemoButton, NavItem, UserProfile } from './SidebarItems';
import '../../style/Sidebar.css';
import { useNavigate } from 'react-router-dom'
import { House, BookOpenText, ChartColumnStacked } from 'lucide-react';


export function SidebarBox() {
    const [activeTab, setActiveTab] = useState('Home');
    const navigate = useNavigate()

    return(
        <aside className='sidebar-container'>
            {/*Logotyp och titel*/}
            <div className='sidebar-header'>
                <div className='logo-box'>WS</div>
                <div className='logo-text'>
                    <h3>Wood Source</h3>
                </div>
            </div>

             {/*MenyLista*/}
            <nav className='sidebar-nav'>
                <NavItem
                    label='Home'
                    icon={<House size={18} color='currentColor'/>}
                    isActive={activeTab == 'Home'}
                    onClick={() => {
                        navigate(`/app`)
                        setActiveTab('Home')
                    }}
                />
                 <NavItem
                    label='Suppliers'
                    icon={<BookOpenText size={18} color='currentColor'/>}
                    isActive={activeTab == 'Suppliers'}
                    onClick={() => {
                        navigate(`/app/suppliers`)
                        setActiveTab('Suppliers')
                    }}
                />
                 <NavItem
                    label='Compare'
                    icon={<ChartColumnStacked size={18} color='currentColor'/>}
                    isActive={activeTab == 'Compare'}
                    onClick= {() => {
                        navigate(`/app/compare`)
                        setActiveTab('Compare')
                    }}
                />
            </nav>

            <div className='above-footer'>
                <ExitDemoButton onClick={() => navigate('/')} />
            </div>

            <div className='sidebar-footer'>
                <UserProfile
                    initials='J'
                    name = 'Johan'
                    role = 'Wood Sourcing Leader'
                />
            </div>
        </aside>
    )
}