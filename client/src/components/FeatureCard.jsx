import { useState } from 'react';

const FeatureCard = ({ icon, title, description }) => {
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
    </div>
  );
};

export default FeatureCard;