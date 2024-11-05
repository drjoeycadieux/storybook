import ContactForm from '../components/ContactForm';

/**
 * The main entry point for the pages/contact.tsx page.
 *
 * @returns {ReactElement} The page element.
 */

const HomePage = () => {
    return (
        <div>
            <ContactForm onSubmit={(data) => console.log(data)} />
        </div>
    );
};

export default HomePage;