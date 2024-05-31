import React, { useState } from 'react';
import Accreditationcard from '../Accreditationcard';

function KitDetails() {
    const [showBtns, setShowBtns] = useState(true)
    return (
        <div>
            <Accreditationcard showBtns={showBtns} />
        </div>
    )
}

export default KitDetails