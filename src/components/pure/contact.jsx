import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class.js';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>Nombre: { contact.name}</h2>
            <h3>Apellido: { contact.surname}</h3>
            <h3>Email: { contact.email}</h3>
            <h3>Conectado: { contact.isconnected ? 'Contacto en Linea':' Contacto no Disponible'}</h3>
        </div>
    );
};


Contact.propTypes = {
    contact:PropTypes.instanceOf(Contact),
    
    
};


export default ContactComponent;
