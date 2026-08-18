import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="hero-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/dif1ebwyb/image/upload/v1786978451/ChatGPT_Image_16_ago_2026_16_39_25_joaple.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/CiaoMiChiamoFrank" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/francesco-pio-contaldo-4a741642a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Francesco Pio Contaldo</h1>
          <p>Junior IT Specialist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/CiaoMiChiamoFrank" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/francesco-pio-contaldo-4a741642a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;