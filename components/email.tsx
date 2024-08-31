import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, contactNumber, message
}) => (
  <div>
    <h1>Message from Timeless Treasures PH's Contact Form</h1>
    <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Contact Number: {contactNumber}</li>
        <li>Message: {message}</li>
    </ul>
  </div>
);