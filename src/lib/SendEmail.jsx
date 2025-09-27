import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const useEmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            }
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("✅ Email sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error);
                alert("❌ Failed: " + error.text);
            }
        );
    };

    return { form, sendEmail };
};
