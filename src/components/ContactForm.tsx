import React, { useState } from "react";
import Contact from "../interfaces/contact";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
    onAdd: (contact: Contact) => void
}

const ContactForm: React.FC<Props> = ({ onAdd }) => {
    const [contact, setContact] = useState<Contact>(
        {
            id: Date.now(),
            name: '',
            email: '',
            phone: '',
        }
    );

    const HandleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
            ...contact, [e.target.name]: [e.target.value]
        });
    };

    const HandleSubmit = (e: React.FormEvent) => {
        if (!contact.name || !contact.phone || !contact.email)
            return;
        onAdd(contact)
        setContact({
            id: Date.now(),
            name: '',
            email: '',
            phone: '',
        })
    }

    return (
        <>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1 } }}

            >
                <div>
                    <TextField label="Name" id="outlined-size-normal" />
                </div>
                <div>
                    <TextField label="Email" id="outlined-size-normal" />
                </div>
                <div>
                    <TextField label="Phone" id="outlined-size-normal" />
                </div>
            </Box>
l
        </>
    )

}


export default ContactForm;