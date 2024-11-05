import React, { useState } from 'react';
import supabase from '../../supabase';

interface ContactFormProps {
    onSubmit: (data: { name: string; email: string; message: string; file: string | null }) => void;
}

/**
 * A form component for sending a message to the website owner.
 *
 * It requires an `onSubmit` prop which is a callback function that will be
 * called with the form data once the form is submitted. The form data object
 * has the following properties: `name`, `email`, `message`, and `file`.
 *
 * The component renders a form with fields for name, email, message, and an
 * optional file upload. When the form is submitted, it will check if all
 * required fields are filled out, and if so, upload the file to the
 * `contact-files` bucket in the Supabase storage if present, and then insert
 * the form data into the `contact` table in the Supabase database. If the
 * database insert fails, it will display an error message.
 *
 * @param {{onSubmit: (data: {name: string, email: string, message: string, file: string | null}) => void}} props
 * @returns {React.ReactElement}
 */
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setErrorMessage(''); // Reset any previous error

        if (!name || !email || !message) {
            setErrorMessage('Please fill out all fields.');
            setSubmitting(false);
            return;
        }

        try {
            const fileKey = await uploadFile(file);

            // Insert data into the contact table
            const { data, error } = await supabase
                .from('contact')
                .insert([{ name, email, message, file: fileKey }]);

            if (error) {
                throw new Error('Database insert failed: ' + error.message);
            }

            onSubmit({ name, email, message, file: fileKey });
            setName('');
            setEmail('');
            setMessage('');
            setFile(null);
        } catch (error) {
            setErrorMessage(error.message);
        }

        setSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h2 className="text-lg font-bold mb-4">Get in touch</h2>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                    File
                </label>
                <input
                    type="file"
                    id="file"
                    onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                />
            </div>
            <button
                type="submit"
                disabled={submitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {submitting ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
};

const uploadFile = async (file: File | null) => {
    let fileKey: string | null = null;

    if (file) {
        const { data: fileData, error: fileError } = await supabase.storage
            .from('contact-files')
            .upload(file.name, file, {
                upsert: true,
            });

        if (fileError) {
            throw new Error('File upload failed: ' + fileError.message);
        }

        fileKey = fileData?.Key || null;
    }

    return fileKey;
};

export default ContactForm;
