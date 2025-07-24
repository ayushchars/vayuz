import Header from '../Header.jsx';
import HeroSection from '../HeroSection.jsx';
import HistorySection from '../HistorySection.jsx';
import ServicesSection from '../ServicesSection.jsx';
import ContactForm from '../ContactForm.jsx';
import Footer from '../Footer.jsx';

const MainContent = () => {
  return (
    <div className="flex-1 pt-4">
      <Header />
      <HeroSection />
      <HistorySection />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MainContent;
