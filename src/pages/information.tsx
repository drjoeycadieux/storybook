import Head from 'next/head';



import Banner from '@/components/Banner';


/**
 * Renders the Information Page component.
 *
 * This component displays a title and description about the Information Page
 * using a combination of Next.js, TypeScript, and Tailwind CSS. It includes a
 * `Banner` component and showcases three features with their descriptions.
 *
 * The layout is responsive and adjusts based on screen size, utilizing Tailwind
 * CSS utility classes for styling.
 *
 * @returns JSX.Element representing the Information Page
 */
const InformationPage = () => {
     return (
          <div className="container mx-auto p-4 pt-6 md:p-9 lg:p-12">
               <Head>
                    <title>Information Page</title>
               </Head>
               <Banner />
               <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to the Information Page</h1>
               <p className="text-lg text-gray-600 mb-6">This is a sample information page built with Next.js, TypeScript, and Tailwind CSS.</p>
               <div className="flex flex-wrap justify-center mb-6">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                         <h2 className="text-xl font-bold text-blue-600 mb-2">Feature 1</h2>
                         <p className="text-lg text-gray-600">Description of feature 1.</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                         <h2 className="text-xl font-bold text-blue-600 mb-2">Feature 2</h2>
                         <p className="text-lg text-gray-600">Description of feature 2.</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                         <h2 className="text-xl font-bold text-blue-600 mb-2">Feature 3</h2>
                         <p className="text-lg text-gray-600">Description of feature 3.</p>
                    </div>
               </div>
          </div>
     );
};

export default InformationPage;