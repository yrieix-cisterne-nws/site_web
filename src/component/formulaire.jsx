import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const isLoading = status === 'loading';

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Évite un double envoi

    setStatus('loading');
    try {
      //"Template" de base de emailJS retrouvé juste ici : https://www.emailjs.com/docs/examples/reactjs/
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      form.current.reset(); // Reset du formulaire si réussi
      setStatus('success');
    } catch (error) {
      console.error('Échec de l’envoi du formulaire', error?.text ?? error); // Le message saisi reste dans le formulaire
      setStatus('error');
    }
  };

  // Efface le message de résultat dès que l'utilisateur modifie le formulaire
  const clearResult = () => {
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  return (
    <div className='flex flex-col gap-4'>
    <h1 className='text-3xl'>Formulaire de contact</h1>
    <form ref={form} onSubmit={sendEmail} onChange={clearResult} aria-busy={isLoading} className='flex flex-col gap-2 rounded-lg w-full max-w-[550px]'>
      <input type="text" name="user_name" placeholder='Prénom et nom' required className='bg-gray-200 w-[300px] p-1'/>
      <input type="email" name="user_email" placeholder='Email' required className='bg-gray-200 w-[300px] p-1'/>
      <textarea name="message" required placeholder="Message" className='bg-gray-200 w-[300px] h-[75px] p-1'/>
      <input type="submit" value={isLoading ? 'Envoi en cours…' : 'Envoyer'} disabled={isLoading} className='bg-[#F2CC0F] hover:bg-[#8487BF] py-2 px-2 cursor-pointer transition-all duration-500 rounded-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#F2CC0F]'/>
      <div role="status" aria-live="polite" className='text-sm w-[300px]'>
        {status === 'success' && (
          <p className='text-green-800'>Votre message a bien été envoyé. Je vous répondrai rapidement.</p>
        )}
        {status === 'error' && (
          <p className='text-red-800'>
            L’envoi a échoué. Réessayez ou écrivez-moi à{' '}
            <a href="mailto:ycisterne@normandiewebschool.fr" className='underline'>ycisterne@normandiewebschool.fr</a>.
          </p>
        )}
      </div>
      <p className='text-xs w-[300px]'>
        Vos données sont utilisées uniquement pour répondre à votre message.{' '}
        <Link to="/mentions-legales" className='underline'>En savoir plus</Link>
      </p>
    </form>
    </div>
  );
};