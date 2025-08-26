import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CourseSection from './components/CourseSection';
import SyllabusSection from './components/SyllabusSection';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import EnrollmentSection from './components/EnrollmentSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-800 bg-primary-900">
      <Header />
      <main>
        <HeroSection />
        <CourseSection />
        <SyllabusSection />
        <ValueProposition />
        <Testimonials />
        <EnrollmentSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;