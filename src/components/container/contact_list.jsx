import React from 'react';
import {Contact} from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    const defaultContact=new Contact('Francis','Torres',true,'harukakasugano31@gmail.com')
    return (
        <div>
            Contacto:
            <div>
                <ContactComponent contact={defaultContact}></ContactComponent>
            </div>
        </div>
    );
};


export default ContactListComponent;
