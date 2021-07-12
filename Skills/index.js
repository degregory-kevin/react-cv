import React from 'react';
import Interests from '../Interests';
import Skill from '../Skill';
import './skills.scss'


const Skills = () => {
    return (
      <>
        <div className="skills">
            <h2 className="h2">Compétences</h2>   
            <Skill title="HTML" rating="4"/> 
            <Skill title="CSS" rating="4"/>   
            <Skill title="SASS" rating="4"/>   
            <Skill title="Semantic ui" rating="3"/>   
            <Skill title="JavaScript" rating="4"/>   
            <Skill title="NodeJS" rating="3"/>   
            <Skill title="Express" rating="3"/>   
            <Skill title="Sequelize" rating="4"/>
            <Skill title="REACT V17" rating="4"/>   
            <Skill title="Redux" rating="4"/>              
            <Skill title="JS ES7" rating="3"/>   
            <Skill title="GITLAB / GITHUB" rating="3"/>   
            <Interests/>
        </div>
      </>
    );
};

export default Skills;