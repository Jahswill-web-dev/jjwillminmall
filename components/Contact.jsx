import React, { useState } from 'react';
import sendDataToServer from './lib/api';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/router';



const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('phone is required'),
    // message: yup.string().required('Message is required'),
    payment_mode: yup.string().oneOf(['outright', 'installments']).required('select a mode of payment'),
    unit_type: yup.string().oneOf(['single_unit', 'double_unit']),
    // quantity: yup.number().min(1).typeError('input a number'),
    quantity: yup.string(),
    floor_level: yup
        .array()
        .of(yup.string())
        .min(0, 'Select at least one floor level')
        .nullable().typeError('Select at least one floor level')
});



function Contact() {
    const router = useRouter();
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
                router.push('/thank-you');
                setTimeout(clearSuccessMessage, 9000);
            } else {
                setResponseStatus(false);
                setStatusMessage("Failed to send email. Please try again.");
                setTimeout(clearErrorMessage, 9000);
            }
            reset()
        }
        catch (error) {
            console.error('Error:', error);
            setResponseStatus(false);
            setStatusMessage("An error occurred. Please try again later.");
        }

    }

    return (
        <div id="contact" className="pt-[1rem] mx-3 mb-5 outline outline-offset-2 outline-primary">
            <h1 id="" className="pt-10 text-2xl text-secondary text-center">Make Your Selection</h1>
            <p className="text-center text-secondar w-[93%] mx-auto pb-3"> Take The First Step To Reaping High Returns Reserve Your Spot and Tailor Your Real Estate Investment</p>
            {/* <p>Begin your empowering journey to a brighter financial future through </p> */}

            <form  className="text-secondary flex flex-col items-center gap-5 md:max-w-screen-lg mx-auto"
                onSubmit={handleSubmit(handleSubmitForm)}>

                <div className="flex flex-col w-[85%]  gap-5 md:items-center md:flex-row md:justify-center">
                    <div>
                        <input
                            {...register("name")}
                            type="text" name="name"
                            placeholder="Full Name"
                            className="border-primary rounded border-b-2 focus:outline-none w-[100%]"
                        />  <p className="text-[.8rem] text-primary">{errors.name?.message}</p>
                    </div>
                    <div>

                        <input {...register("email")} placeholder="Email" type="email" name="email"
                            className="border-primary rounded border-b-2 focus:outline-none w-[100%]"
                        />  <p className="text-[.8rem] text-primary">{errors.email?.message}</p>
                    </div>
                </div>
                <div className="flex flex-col w-[85%] gap-5 md:flex-col md:items-center md:justify-center">
                    <input {...register("phone")} placeholder="Phone Number" type="text" name="phone"
                        className="border-primary rounded border-b-2 focus:outline-none w-[100%] md:w-[50%]"
                    />  <p className="text-[.8rem] text-primary">{errors.phone?.message}</p>
                </div>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">
                    <div className=''>
                        <label className="text-lg"><u>Unit Type:</u></label>
                        <div><input {...register("unit_type")} type="radio" name="unit_type" value="single_unit" className="mr-2" /> Single Unit</div>
                        <div><input {...register("unit_type")} type="radio" name="unit_type" value="double_unit" className="mr-2" /> Double Unit</div>
                        <p className="text-[.8rem] text-primary">{errors.unit?.message}</p>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <label className="">Number of Unit:</label>
                            <input type="number" {...register("quantity")} name="quantity" min="1" max="100" className="w-[2rem] text-center  border-b-2 rounded border-primary focus:outline-none " />
                        </div>
                        <p className="text-[.8rem] text-primary">{errors.quantity?.message}</p>
                    </div>

                    <div className="flex flex-col">
                        <label>Chooose a Floor</label>
                        <div><input {...register("floor_level")} type="checkbox" name="floor_level" value="1st" /> 1st</div>
                        <div><input {...register("floor_level")} type="checkbox" name="floor_level" value="2nd" /> 2nd</div>
                        <div><input {...register("floor_level")} type="checkbox" name="floor_level" value="3rd" /> Ground floor</div>
                        <p className="text-[.8rem] text-primary">{errors.floor_level?.message}</p>
                    </div>
                    <div>
                        <label>Mode of Payement:</label>
                        <div><input {...register("payment_mode")} type="radio" name="payment_mode" value="outright" /> Outright Purchase</div>
                        <div><input {...register("payment_mode")} type="radio" name="payment_mode" value="installments" /> Monthly Installments</div>
                        <p className="text-[.8rem] text-primary">{errors.payment_mode?.message}</p>
                    </div>

                </div>

                {/*<div className='flex flex-row gap-3'>

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
                </textarea> */}

                <button type="submit" className="mb-10 hover:bg-secondary form-btn text-white bg-primary px-8 py-3 text-xl rounded-lg"
                >Place Your Order
                </button>
                {/* {responseStatus ? <div className="text-4xl text-green-600">{statusMessage}</div> : <div className="text-red-600">{statusMessage}</div>} */}
                
            </form>
        </div>

    );
}

export default Contact;