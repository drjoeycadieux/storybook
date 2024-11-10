import ContactFormField from '../components/ContactFormField';

/**
 * The main entry point for the pages/contact.tsx page.
 *
 * @returns {ReactElement} The page element.
 */

/**
 * HomePage component that renders a contact form.
 *
 * This component acts as the main entry point for the contact page.
 * It renders a ContactForm component and handles form submission by
 * logging the submitted data to the console.
 *
 * @returns JSX.Element representing the HomePage component.
 */
const HomePage = () => {
    return (
        <div>
            <ContactFormField onSubmit={(data) => console.log(data)} />
        </div>
    );
};

export default HomePage;