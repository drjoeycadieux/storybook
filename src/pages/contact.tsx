import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <div>
            <ContactForm onSubmit={(data) => console.log(data)} />
        </div>
    );
};

export default HomePage;