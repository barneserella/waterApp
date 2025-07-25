import { useState } from 'react';

const ServicesCard = ({ icon, title, description, listItem1, listItem2, listItem3 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="feature-card"
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
          : 'white'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>
        <div className="feature-icon">{icon}</div>
        {title}
      </h3>
      <p>{description}</p>
      <h4>Features: </h4>
      <ul>
        <li>{listItem1}</li>
        <li>{listItem2}</li>
        <li>{listItem3}</li>
      </ul>
      <div className='services-button'>
        <button type='submit'>Book Now</button>
      </div>
    </div>
  );
};

export default ServicesCard;