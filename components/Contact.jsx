import React, { useState } from 'react';
import sendDataToServer from './lib/api';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});



function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const clearErrorMessage = () => {
        setStatusMessage('');
    };

    const clearSuccessMessage = () => {
        setStatusMessage('');
    };

    const [responseStatus, setResponseStatus] = useState(null); //status
    const [statusMessage, setStatusMessage] = useState(""); //message


    const handleSubmitForm = async (data) => {
        try {
            console.log(data);
            const response = await sendDataToServer(data);


            if (response.message === "success") {
                setResponseStatus(true);
                setStatusMessage("Thank you");
                setTimeout(clearSuccessMessage, 9000);
            } else {
                setResponseStatus(false);
                setStatusMessage("Failed to send email. Please try again.");
                setTimeout(clearErrorMessage, 9000);
            }
        }
        catch (error) {
            console.error('Error:', error);
            setResponseStatus(false);
            setStatusMessage("An error occurred. Please try again later.");
        }

    }

    return (
        <div id="contact">
            <h1 className="p-10 text-2xl text-secondary text-center">Get in touch with us</h1>
            <form className="flex flex-col items-center gap-5 md:max-w-screen-lg mx-auto"
                onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">


                    <input
                        {...register("name")}
                        type="text" name="name"
                        placeholder="Full Name"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />  <p className="text-[.8rem] text-primary">{errors.name?.message}</p>

                    <input {...register("subject")} placeholder="Subject" type="subject" name="subject"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />  <p className="text-[.8rem] text-primary">{errors.subject?.message}</p>
                </div>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">
                    <input {...register("email")} placeholder="Email" type="email" name="email"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />  <p className="text-[.8rem] text-primary">{errors.email?.message}</p>
                </div>
                <div className='flex flex-row gap-3'>

                    <label>Select a role</label>
                    <select  {...register('role')} id="role" name="role" form="role">
                        <option value="Investor">Investor</option>
                        <option value="Buyer/shop owner">Buyer/shop owner</option>
                        <option value="Affliate marketer">Affliate marketer</option>
                    </select>
                </div>

                <p className="text-[.8rem] text-primary">{errors.message?.message}</p>
                <textarea {...register("message")} rows={10} cols={10} name="message"
                    className="border-secondary rounded border-2 focus:outline-none w-[85%]"
                    placeholder="let us know how we can be of some help"
                >
                </textarea>

                <button type="submit" className="form-btn text-white bg-primary px-8 py-3 text-xl rounded-lg"
                >Send
                </button>

                {responseStatus ? <div className="text-4xl text-green-600">{statusMessage}</div> : <div className="text-red-600">{statusMessage}</div>}
            </form>
        </div>

    );
}

export default Contact;