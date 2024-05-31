import React, { useState } from 'react';
import Fixtures from '../Fixtures'

function DashboardFixtures() {
    const [showBackBtn, setShowBackBtn] = useState(true)
    
    return (
        <div>
            <Fixtures showBackBtn={showBackBtn} />
        </div>
    )
}

export default DashboardFixtures