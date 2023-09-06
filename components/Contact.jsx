import React, { useState } from 'react';
import sendDataToServer from './lib/api';


const formVal = {
    name: "",
    email: "",
    subject: "",
    role: "",
    message: ""
} //rewireor rewrite this codes
const initState = { values: formVal };


function Contact() {

    const clearErrorMessage = () => {
        setStatusMessage('');
    };

    const clearSuccessMessage = () => {
        setStatusMessage('');
    };

    const [responseStatus, setResponseStatus] = useState(null); //status
    const [statusMessage, setStatusMessage] = useState(""); //message
    const [state, setState] = useState(initState);
    const [selectedRole, setSelectedRole] = useState("Investor");
    const { values } = state;
    values.role = selectedRole;
    function handleChange({ target }) {
       
            setSelectedRole((prevRole) =>{
                if(target.name === "role"){
                    return target.value;
                }
                return prevRole;
            });
   

            setState((prev) => ({
                ...prev, values: {
                    ...prev.values,
                    [target.name]: target.value
                }
            }))
        }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await sendDataToServer(values);
            

            if (response.message === "success") {
                setStatusMessage("Thank you");
                setState(initState);
                setResponseStatus(true);
                setTimeout(clearSuccessMessage, 9000);
            } else {
                setResponseStatus(false);
                setStatusMessage("Failed to send email. Please try again.");
                setTimeout(clearErrorMessage, 9000);
            }
            // console.log(values);
        }
        catch (error) {
            console.error('Error:', error);
            setResponseStatus(false);
            setStatusMessage("An error occurred. Please try again later.");
        }
        console.log(values)    

    }


    return (
        <div id="contact">
            <h1 className="p-10 text-2xl text-secondary text-center">Get in touch with us</h1>
            <form className="flex flex-col items-center gap-5 md:max-w-screen-lg mx-auto"
                onSubmit={handleSubmit}>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">

                    <input placeholder="Full Name" type="text" name="name" value={values.name}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                    <input placeholder="Subject" type="subject" name="subject" value={values.subject}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                </div>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">
                    <input placeholder="Email" type="email" name="email" value={values.email}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />


                    {/* <input placeholder="what is your budget?" type="text" name="budget" value={values.budget}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    /> */}
                </div>
                <div className='flex flex-row gap-3'>

                    <label>Select a role</label>
                    <select id="role" name="role" form="role">
                        <option value="Investor">Investor</option>
                        <option value="Buyer/shop owner">Buyer/shop owner</option>
                        <option value="Affliate marketer">Affliate marketer</option>
                    </select>
                </div>
                <textarea rows={10} cols={10} name="message" value={values.message} onChange={handleChange}
                    className="border-secondary rounded border-2 focus:outline-none w-[85%]"
                    placeholder="let us know how we can be of some help"
                >
                </textarea>
                <button type="submit" className="text-white bg-primary px-8 py-3 text-xl rounded-lg"
                >Send
                </button>

                {responseStatus ? <div className="text-4xl text-green-600">{statusMessage}</div> : <div className="text-red-600">{statusMessage}</div>}
                {/* {successMessage && <div className="text-green-600">{successMessage}</div>}
            {errorMessage && <div className="text-red-600">{errorMessage}</div>} */}
            </form>
        </div>

    );
}

export default Contact;