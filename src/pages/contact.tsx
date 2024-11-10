// src/pages/contact.tsx
import ContactForm from '@/components/ContactFormField';

const ContactPage = () => {
    return (
        <div>
            <h1>Get in touch</h1>
            <ContactForm onSuccess={() => console.log('Form submitted successfully!')} />
        </div>
    );
};

export default ContactPage;