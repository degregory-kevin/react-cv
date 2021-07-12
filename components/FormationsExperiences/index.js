import React from 'react';
import './formationsExperiences.scss'
import dataFormation from '../../data/Formations';
import Formations from '../Formations';
import dataExperiences from '../../data/Experiences';
import Experiences from '../Experiences';

const FormationsExperiences = () => {
    return (
        <div>
            <Formations
            data={dataFormation}
            />
            <Experiences
            data={dataExperiences}
            />
            
        </div>
    );
};

export default FormationsExperiences;