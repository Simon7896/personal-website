'use server'

import nodemailer from "nodemailer"

export default async function sendMsg(formData: FormData) {
    'use server'

    const formJson = Object.fromEntries(formData);

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 's47026454@gmail.com',
            pass: process.env.EMAIL_PASSWORD,
        },
        secure: true,
    })

    const info = await transporter.sendMail({
        from: "<s47026454@gmail.com>",
        to: "s47026454@gmail.com",
        subject: `Message From ${formJson["name"].toString()}`,
        text: formJson["message"].toString(),
        html: `<div><p>${formJson["message"]}<p></div>`
    });

    console.log("Message sent: %s", info.messageId);
}
