import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/styles/contact.module.css";
const { contactContainer, contactForm, contactFormText, field } = styles
interface ContactForm {
    name: string;
    email: string;
    contactNumber: string;
    message: string;
}

const schema: ZodType<ContactForm> = z.object({
    name: z.string().min(1, "Please type your name."),
    email: z
        .string()
        .min(1, "Please type your email.")
        .email("Invalid email address."),
    contactNumber: z.string().min(1, "Please type your contact number."),
    message: z.string().min(1, "Please type your message."),
});

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactForm>({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(schema),
    });

    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSendingSuccessful, setIsSendingSuccessful] =
        useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const onSubmit: SubmitHandler<ContactForm> = async (formData) => {
        setIsSending(true);
        try {
            let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/email`, {
                method: "POST",
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw await response.json();
            }

            let data = await response.json();
            setMessage(data.message);
            setIsSendingSuccessful(true);
            reset();
        } catch (error: any) {
            setMessage(error.message);
            setIsSendingSuccessful(false);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className={`${contactContainer}`}>
            <div className="grid grid-cols-12 gap-1">
                <div className={`${contactForm} col-span-12 lg:col-span-6 px-8 md:px-12 lg:px-28 xl:px-36 py-16`}>
                    <h3 className="font-medium mb-4 text-left">Get in Touch</h3>
                    <p className={`${contactFormText} heading font-light mb-12 text-left`}>
                        Need to get in touch with us? We’re here to help and
                        answer any questions you might have. We look forward
                        to hearing from you!
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={`${field} mb-4`}>
                            {/* <label className="font-medium block mb-1">
                                Name:
                            </label> */}
                            <input
                                type="text"
                                className="w-full p-3"
                                {...register("name")}
                                placeholder="Name"
                            />
                            <span className="text-sm inline-block pt-1 text-red-600">
                                {errors?.name?.message}
                            </span>
                        </div>
                        <div className={`${field} mb-4`}>
                            {/* <label className="font-medium block mb-1">
                                Email:
                            </label> */}
                            <input
                                type="text"
                                className="w-full p-3"
                                {...register("email")}
                                placeholder="Email"
                            />
                            <span className="text-sm inline-block pt-1 text-red-600">
                                {errors?.email?.message}
                            </span>
                        </div>
                        <div className={`${field} mb-4`}>
                            {/* <label className="font-medium block mb-1">
                                Contact Number:
                            </label> */}
                            <input
                                type="text"
                                className="w-full p-3"
                                {...register("contactNumber")}
                                placeholder="Contact Number"
                            />
                            <span className="text-sm inline-block pt-1 text-red-600">
                                {errors?.contactNumber?.message}
                            </span>
                        </div>
                        <div className={`${field} mb-4`}>
                            {/* <label className="font-medium block mb-1">
                                Message:
                            </label> */}
                            <textarea
                                rows={5}
                                className="w-full p-3"
                                {...register("message")}
                                placeholder="Message"
                            ></textarea>
                            <span className="text-sm inline-block pt-1 text-red-600">
                                {errors?.message?.message}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <p
                                className={`${
                                    isSendingSuccessful
                                        ? "text-green-500"
                                        : "text-red-600"
                                }`}
                            >
                                {message ? message : ""}
                            </p>
                            <button
                                type="submit"
                                className={`px-4 py-2 ${
                                    isSending
                                        ? "opacity-50 text-black"
                                        : "text-white"
                                }`}
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <FontAwesomeIcon
                                        icon={faCircleNotch}
                                        spin
                                    />
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-span-12 lg:col-span-6 bg-cover bg-no-repeat bg-center px-8 md:px-12 lg:px-16 xl:px-24 py-16 flex items-center justify-center">
                    <img src="/images/contact-img.png" />
                </div>
            </div>
        </section>
    );
}
