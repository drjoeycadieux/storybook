import React, { useState } from 'react';
import supabase from '../../supabase';

interface ContactFormProps {
    onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    /**
     * Handles form submission, sending the form data to the Supabase 'contact' table.
     * If the submission is successful, calls the onSuccess callback.
     * If there is an error, logs the error to the console.
     * Sets submitting to true before making the request and sets it back to false when the request is resolved.
     * @param {React.FormEvent<HTMLFormElement>} event
     */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);

        try {
            const { data, error } = await supabase
                .from('contact')
                .insert({ name, email, message });

            if (error) {
                console.error(error);
            } else {
                onSuccess();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Get in touch</h2>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
            </div>
            <button
                type="submit"
                disabled={submitting}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {submitting ? 'Submitting...' : 'Send'}
            </button>
        </form>
    );
};

export default ContactForm;