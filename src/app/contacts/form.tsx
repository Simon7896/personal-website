'use client'

import { FormEventHandler } from "react";

type FormInputs = {
    email: string;
    message: string;
}

export default function Form() {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <h1 className="text-4xl text-center">Send A Message</h1>
                <label className="m-5 flex justify-center text-black">
                    <textarea name="message" rows={10} cols={40} />
                </label>
                <button className="p-4 rounded-full bg-slate-500 text-xl" type="submit">Send</button>
            </form>
        </div>
    )
}
