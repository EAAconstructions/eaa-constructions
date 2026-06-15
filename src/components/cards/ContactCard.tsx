import { useRef } from 'react';
import emailjs from '@emailjs/browser'
  

export function ContactCard() {

const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_01z22af",
        "template_91vkpke",
        form.current,
        "pYfznQrUudDV_U1ak"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <form 
        ref={form}
        onSubmit={sendEmail}
        className="grid gap-4 text-black"
      >
        <input 
          className="p-4 rounded-lg text-black border" 
          placeholder="Full Name" 
          type="text" 
          name="user_name"
          required
        />

        <input 
          className="p-4 rounded-lg text-black border" 
          placeholder="Email" 
          type="email" 
          name="user_email"
          required
        />

        <input 
          className="p-4 rounded-lg text-black border" 
          placeholder="Phone number" 
          type="phone" 
          name="user_phone"
          required
        />


        <textarea
          className="p-4 rounded-lg border h-50"
          placeholder="Request a service"
          name="message"
          required
        />

        <button 
          type="submit"
          className="bg-black text-white py-3 rounded-lg font-medium hover:opacity-80"
        >
          Submit
        </button>
      </form>
  )
}