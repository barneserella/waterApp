import FeatureCard from "../components/FeatureCard";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
    

  return (
    <div>
        <div className="section-header">
          <h2>Services Offered</h2>
        </div>

        <ServicesCard icon="" title="1. Residential Water Delivery" description="Description: Reliable bulk water delivery services for residential properties." listItem1="Timely delivery scheduling." listItem2="Potable and non-potable water options available." listItem3="Competitive pricing and flexible delivery quantities." />
        <ServicesCard icon="" title="2. Commercial Water Delivery" description="Description: Tailored water delivery solutions for commercial and industrial clients." listItem1="Bulk water supply for construction sites, resorts, and commercial buildings." listItem2="Adherence to industry standards for quality and quantity." listItem3="PLaceholder text" />
        <ServicesCard icon="" title="3. Emergency Water Services" description="Description: Rapid response water delivery for emergency situations." listItem1="PLaceholder text" listItem2="24/7 emergency service availability." listItem3="Swift delivery to areas affected by water shortages or infrastructure issues." />
        <ServicesCard icon="" title="4. Event Water Supply" description="Specialized water delivery for events and festivals." listItem1="Large-scale water supply management." listItem2="On-site delivery coordination and support." listItem3="Placeholder text" />
        <ServicesCard icon="" title="5. Pool Filling Services" description="Convenient pool filling services for residential and commercial pools." listItem1="Precise volume calculations." listItem2="Clean and safe water for pool use." listItem3="Placeholder text" />
        <ServicesCard icon="" title="6. Bulk Water Purchase" description="Purchase bulk water for various purposes." listItem1="Flexible volume options." listItem2="Delivery or pick-up options available." listItem3="Placeholder text" />
        <ServicesCard icon="" title="7. Custom Solutions" description="Tailored water delivery solutions to meet specific client needs." listItem1="Consultative approach to understand unique requirements." listItem2="Customized delivery schedules and quantities." listItem3="Placeholder text" />
{/* 
        
        <h2>7. Custom Solutions</h2>
        <p>Description: Tailored water delivery solutions to meet specific client needs.
        Features:
        <li>Consultative approach to understand unique requirements.</li>
        <li>Customized delivery schedules and quantities.</li></p> */}

    </div>
  )
}

export default Services;