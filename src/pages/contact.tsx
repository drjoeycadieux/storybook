import ContactForm from '@/components/ContactFormField';

/**
 * Renders the Contact Page component.
 *
 * This component displays a title and includes a ContactForm component.
 * When the form is successfully submitted, it logs a success message
 * to the console.
 *
 * @returns JSX.Element representing the Contact Page
 */
const ContactPage = () => {
    return (
        <div>
            <h1>Get in touch</h1>
            <ContactForm onSuccess={() => console.log('Form submitted successfully!')} />
        </div>
    );
};

export default ContactPage;