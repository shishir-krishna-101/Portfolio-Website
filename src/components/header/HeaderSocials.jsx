import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/shishir-krishna-a88a9ab9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoQQNNfAjSQOif6MjT7V1Pw%3D%3D" target="_blank" rel="noreferrer" >
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
