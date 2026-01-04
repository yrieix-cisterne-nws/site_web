import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_SECRET_KEY;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
//"Template" de base de emailJS retrouvé juste ici : https://www.emailjs.com/docs/examples/reactjs/
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          form.current.reset() // Reset du formulaire si réussi
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='flex flex-col gap-4'>
    <h1 className='text-3xl'>Formulaire de contact</h1>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 rounded-lg w-full max-w-[550px]'>
      <input type="text" name="user_name" placeholder='Prénom et nom' required className='bg-gray-200 w-[300px] p-1'/>
      <input type="email" name="user_email" placeholder='Email' required className='bg-gray-200 w-[300px] p-1'/>
      <textarea name="message" required placeholder="Message" className='bg-gray-200 w-[300px] h-[75px] p-1'/>
      <input type="submit" value="Envoyer" className='bg-[#F2CC0F] hover:bg-[#8487BF] py-2 px-2 cursor-pointer transition-all duration-500 rounded-full'/>
    </form>
    </div>
  );
};