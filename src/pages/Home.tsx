import Header from '../components/Header';
import Hero from '../components/Hero';
import BenefitCards from '../components/BenefitCards';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BenefitCards />
      <AboutUs />
      <Services />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}