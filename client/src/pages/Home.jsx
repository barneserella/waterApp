import React from 'react';
import FeatureCard from '../components/FeatureCard';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />

      <main>
        <div className="section-header">
          <h2>Why Choose AquaHaul?</h2>
        </div>

        <FeatureCard icon="💧" title="Expertise in Bulk Water Delivery" description="At AquaHaul Solutions, we specialize in delivering bulk water with precision and reliability. Whether you're a homeowner needing pool filling or a contractor requiring water for construction, we have you covered." />
        <FeatureCard icon="🚛" title="Diverse Service Offerings" description="From residential water delivery to emergency services and event water supply, AquaHaul provides a wide range of tailored solutions to meet your specific needs." />
        <FeatureCard icon="✓" title="Commitment to Quality" description="We prioritize quality and safety in every delivery. Our water meets stringent standards, ensuring it's clean and suitable for your intended use." />
        <FeatureCard icon="💰" title="Competitive Transparent Pricing" description="No hidden fees or surprise charges. Our upfront pricing structure ensures you know exactly what you're paying for, with volume discounts available for regular customers and large orders." />
      
      </main>
    </div>
  );
};

export default Home;