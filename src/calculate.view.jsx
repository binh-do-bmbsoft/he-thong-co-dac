import React, { useState } from 'react';
import { MainEquipment } from './calculate/main-equipment.jsx';

export function CalculatesView(props) {
    return (
        <div className="col-6">
            <MainEquipment />
        </div>
    )
}