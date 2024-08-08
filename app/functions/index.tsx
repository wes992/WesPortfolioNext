import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

/**  * using gmail with nodemailer  */

const config = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: config.EMAIL_USER, pass: config.EMAIL_PASS },
});

const myName = `${config.FIRST_NAME} ${config.LAST_NAME}`;

type EmailInfo = {
  name: string;
  email: string;
  message: string;
};

export const emailMe = (emailInfo: EmailInfo) => {
  const { name, email, message } = emailInfo;
  const mailOptions = {
    from: `${myName} <no-reply@weshampton.dev>`,
    to: config.PERSONAL_EMAIL,
    subject: "Contact Form Message", // email subject
    html: `<div>             
            <div> ${config.FIRST_NAME}, </div>
            <br/>
            <p> You have received a new message from your portfolio.</p>
            <p> Here is the information: </p>
            <br/>
            <div> Name: ${name} </div>
            <div> Email: ${email}  </div>
            <div> Message: ${message} </div>
            
          </div>`, // email content in HTML
  };
  // returning result
  try {
    transporter.sendMail(mailOptions);
    NextResponse.json({ mesasge: `Message sent to ${config.PERSONAL_EMAIL}` });
  } catch (e) {
    throw e;
  }
};

export const emailUser = (emailInfo: EmailInfo) => {
  const { name, email, message } = emailInfo;

  const mailOptions = {
    from: `${myName} <no-reply@weshampton.dev>`,
    to: email,
    subject: "I got your message", // email subject
    html: `<div>             
            <div> Hey ${name}, </div>
            <br/>
            <div>  Thank you for reaching out. I have received your message and I will get back to you as soon as I can.</div>
            <br/>
            <div> Here is the information I received: </div>
            <br/>
            <div> Name: ${name}</div>
            <div> Email: ${email} </div>
            <div> Message: ${message}</div>
            <br/>
            <div> Best, </div>
            <div> ${myName} </div>
          </div>`, // email content in HTML
  };

  try {
    transporter.sendMail(mailOptions);
    emailMe(emailInfo);

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (e) {
    throw e;
  }
};
