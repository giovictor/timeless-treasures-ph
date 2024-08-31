import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, contactNumber, message} = JSON.parse(req.body)
    const { data, error } = await resend.emails.send({
        from: "Timeless Treasures PH <onboarding@resend.dev>",
        to: ["giorodriguez021@gmail.com"],
        subject: "Timeless Treasures PH",
        react: EmailTemplate({
            name: name,
            email: email,
            contactNumber: contactNumber,
            message: message,
        }),
    });

    if (error) {
        return res.status(400).json({error: error, message: 'There was an error sending the email.'});
    }

    res.status(200).json({ data: data, message: 'Email was sent successfully!'});
};
