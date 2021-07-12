/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './user.scss'
import {Home, Phone, Mail, Event, LocationOn, LinkedIn} from "@material-ui/icons"


const User = () => {
    return (
        <div className="user">
            <div
             className="user__avatar-container"
             style={{ 
                backgroundImage: `url("./images/avatar.jpg")`
             }}>
              {/*<img src="./images/avatar.jpg" alt="Kévin Degregory" className="user__avatar" />  */}
            </div>
                <h1 className="user__name">Kévin Degregory</h1>
                <p className="user__profession">Développeur Web Junior JS REACT</p>
                <div className="user__infos">
                    <p className="user__info"><Home/>26 rue Martinon à Gradignan</p>
                    <p className="user__info">
                        <Phone/>
                        <a href="+33662223972">06.62.22.39.72</a>
                     </p>
                    <p className="user__info">
                        <Mail/>
                        <a href="maito:  degregory.kevin@gmail.com">
                        degregory.kevin@gmail.com
                    </a>
                    </p>
                    <p className="user__info"> <LinkedIn/><a href="https://www.linkedin.com/in/k%C3%A9vin-degregory-060919203/"> Profil LinkedIn</a></p>
                    <p className="user__info">  <Event/>  28 Ans</p>
                    <p className="user__info"> <LocationOn/> Disponible: Bordeaux et alentours </p>
                    
                </div>
        </div>
    );
};

export default User;