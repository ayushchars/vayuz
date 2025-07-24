import React from 'react';

const ContactForm = () => {
  return (
    <section className="px-6 md:px-16 pt-2 pb-4 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        <div className="order-2 md:order-1 md:col-span-2 space-y-10">
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-white font-sans">
            <a href="#" className="hover:text-cyan-400">Events</a>
            <a href="#" className="hover:text-cyan-400">Gen AI</a>
            <a href="#" className="hover:text-cyan-400">Careers</a>
            <a href="#" className="hover:text-cyan-400">Case study</a>
            <a href="#" className="hover:text-cyan-400">SME Talks</a>
          </div>

          <div>
            <p className="text-white text-xl sm:text-2xl font-sans leading-snug mb-2">
              For any collaborative <br />
              projects or enquiries feel free <br />
              to connect with us.
            </p>
            <p className="text-white text-lg sm:text-xl font-semibold font-sans">
              vayuz.com
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
            Connect<br />With Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
            />

            <div className="pt-2">
              <button
                type="submit"
                style={{ backgroundColor: '#08A7CE' }}
                className="text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
