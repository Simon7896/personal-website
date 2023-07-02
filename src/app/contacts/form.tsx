'use client'

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sendMsg from "./sendMsg";
import { Toast } from "react-toastify/dist/components";

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

    return (
        <div>
            <form action={send}>
                <h1 className="p-5 text-4xl text-center">Send A Message</h1>
                <label className="flex justify-center">
                    Name:<input 
                        className="mx-5 text-black" 
                        name="name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        type="text"
                    />
                </label>
                <label className="m-5 flex justify-center text-black">
                    <textarea 
                        name="message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        rows={10} 
                        cols={40} 
                    />
                </label>
                <button className="p-4 rounded-full bg-slate-500 text-xl" type="submit">Send</button>
            </form>
            <ToastContainer/>
        </div>
    )
}
