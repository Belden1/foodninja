import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden((prevHidden) => !prevHidden);
  };

  const food = {
    stew: { title: '5 Bean Chilli Stew', alt: 'stew', author: 'Mario', time: '25 mins' },
    noodles: { title: 'Veg Noodles', alt: 'noodles', author: 'Mario', time: '25 mins' },
    curry: { title: 'Tofu Curry', alt: 'curry', author: 'Mario', time: '25 mins' }
  };

  return (
    <div className="grid md:grid-cols-5">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex items-center justify-between">
            <h1 className="border-b border-gray-100 p-4 font-bold uppercase">
              <a href="/" className="tracking-widest hover:text-gray-700">
                Food Ninja
              </a>
            </h1>
            <div className="cursor-pointer px-4 md:hidden" id="burger" onClick={toggleMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
          </div>
          <ul className={`mb-1 mt-6 ${isMenuHidden ? 'hidden' : ''} text-sm md:block`} id="menu">
            <li className="py-1 font-bold text-gray-700">
              <a href="#" className="flex justify-end gap-2 border-r-4 border-primary px-4">
                <span>Home</span>
                <svg
                  className="w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="flex justify-end gap-2 border-r-4 border-transparent px-4">
                <span>About</span>
                <svg
                  className="w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="flex justify-end gap-2 border-r-4 border-transparent px-4">
                <span>Contact</span>
                <svg
                  className="w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="bg-gray-100 px-16 py-6 md:col-span-4">
        <div className="flex justify-center gap-2 md:justify-end">
          <a
            href="#"
            className="btn border-primary text-primary transition duration-500 ease-out hover:bg-primary hover:text-white md:border-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="btn border-primary text-primary transition duration-500 ease-out hover:bg-primary hover:text-white md:border-2"
          >
            Sign up
          </a>
        </div>
        <header className="mt-4">
          <h2 className="text-6xl font-semibold leading-none tracking-wider text-gray-700">Recipes</h2>
          <h3 className="text-2xl font-semibold tracking-wider">For Ninjas</h3>
        </header>
        <div>
          <h4 className="mt-12 border-b border-gray-200 pb-2 font-bold">Latest Recipes</h4>
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <Card food={food.stew} />
            <Card food={food.noodles} />
            <Card food={food.curry} />
          </div>
          <h4 className="mt-12 border-b border-gray-200 pb-2 font-bold">Most Popular</h4>
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <Card food={food.stew} />
            <Card food={food.noodles} />
            <Card food={food.curry} />
          </div>
          <div className="mt-12 flex justify-center">
            <div className="btn inline-block transform bg-secondary-100 text-secondary-200 transition duration-300 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner">
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
