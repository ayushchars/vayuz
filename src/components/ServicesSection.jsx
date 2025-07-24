import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const getLoremContent = () => (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, 
    sapien nec lacinia cursus, justo massa imperdiet urna, sit amet posuere ligula 
    sapien et velit. Integer vitae nisl at lorem pulvinar tincidunt at a justo.
  </>
);

const services = [
  {
    title: "Flutter App Development",
    content: (
      <>
        Unlock endless possibilities with Flutter App Development. Build beautiful,
        high-performance applications for any platform – faster and easier than ever before.
        Ready to revolutionize your app experience?{" "}
        <a href="#" className="text-cyan-400 hover:underline">Let’s get started today!</a>
      </>
    ),
  },
  { title: "UI/UX Design", content: getLoremContent() },
  { title: "Customization & Integration", content: getLoremContent() },
  { title: "Testing & Quality Assurance", content: getLoremContent() },
  { title: "Maintenance & Support", content: getLoremContent() },
  { title: "Consulting & Training", content: getLoremContent() },
  { title: "Migration & Upgrades", content: getLoremContent() },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-16 py-20">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-semibold font-serif mb-2">
          Our Dynamic Services Suite!
        </h2>
        <p className="text-gray-400 text-lg font-sans">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto font-sans">
          Step into innovation! Explore our range of services and let’s create something extraordinary together.
          Your vision, our expertise. Let’s begin!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        <div className="order-1 md:order-none md:col-span-2 space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer text-white font-serif text-xl"
                onClick={() => toggle(index)}
              >
                <span>{service.title}</span>
                <span className="text-white text-sm">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {openIndex === index && service.content && (
                <p className="text-gray-400 text-sm mt-3 font-sans leading-relaxed max-w-3xl">
                  {service.content}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="order-2 md:order-none">
          <img
            src="/service.png"
            alt="Services Showcase"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0"
          />
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
