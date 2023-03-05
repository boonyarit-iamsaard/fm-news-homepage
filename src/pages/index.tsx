import { type NextPage } from 'next';

import Header from '@/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="grid min-h-screen place-items-center space-y-4 p-4 antialiased">
        <div className="w-full max-w-sm space-y-4">
          <div>
            <h1 className="text-heading-xl">Heading XL</h1>
            <h2 className="text-heading-lg">Heading LG</h2>
            <h3 className="text-heading-md">Heading MD</h3>
            <h4 className="text-heading-sm">Heading SM</h4>
            <h5 className="text-heading-xs">Heading XS</h5>
            <p className="text-body">Body</p>
          </div>
          <div>
            <div className="h-16 bg-primary-400"></div>
            <div className="h-16 bg-secondary-400"></div>
            <div className="h-16 bg-tertiary-100"></div>
            <div className="h-16 bg-tertiary-300"></div>
            <div className="h-16 bg-tertiary-600"></div>
            <div className="h-16 bg-tertiary-900"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
