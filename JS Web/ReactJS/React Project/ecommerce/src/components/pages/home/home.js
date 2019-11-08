import React from 'react';
import './home.css';

import SidebarLeft from '../../sidebar-left/sidebar-left';
import Items from '../../items/items';

function Home() {
    return (
        <div>
            <SidebarLeft />
            <Items />
        </div>
    );
}

export default Home;