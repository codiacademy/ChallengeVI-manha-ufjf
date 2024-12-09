import React from 'react';
import insta from '../imagens/imageInsta.png'
import Wpp from '../imagens/imageWpp.png'
import Fb from '../imagens/imageFb.png'

function SocialMedia() {
  return (
    <div className="flex justify-between items-center mt-10 px-20">
      <img className="h-36 w-36 cursor-pointer" src={insta} alt="Instagram" />
      <img className="h-36 w-36 cursor-pointer" src={Wpp} alt="WhatsApp" />
      <img className="h-36 w-36 cursor-pointer" src={Fb} alt="Facebook" />
    </div>
  );
}

export default SocialMedia;
