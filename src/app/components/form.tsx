'use client'

import { useId, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sendMsg from "../contacts/sendMsg";

export default function Form() {
    
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const resetForm = () => {
        setMessage('');
        setName('');
    }

    const send = (formData: FormData) => {
        sendMsg(formData)
        resetForm()
        notify()
    }

    const notify = () => toast.success("Message Sent!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
    });

    const nameId = useId();
    const messageId = useId();

    return (
        <div className="w-3/4 lg:w-1/2">
            <h1 className="p-5 text-4xl text-center flex-col">Send A Message</h1>
            <form action={send} className="flex flex-col justify-center">
                <label className="py-5 text-xl" htmlFor={nameId}>Name</label>
                <input 
                    id={nameId}
                    className="p-2 text-black rounded w-full" 
                    name="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    type="text"
                />
                <label className="py-5 text-xl" htmlFor={messageId}>Message</label>
                <textarea 
                    id={messageId}
                    className="p-2 text-black rounded w-full"
                    name="message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    rows={5}
                />
                <button className="ease-in-out duration-300 my-8 p-4 rounded-full bg-slate-500 text-xl hover:scale-110 w-full" type="submit">Send</button>
            </form>
            <ToastContainer/>
        </div>
    )
}
