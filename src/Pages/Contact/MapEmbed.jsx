import React from 'react';

const MapEmbed = () => {
  return (
    <div className="w-full 2xl:mx-auto md:h-[450px] h-[250px] border-0 rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.1269431933342!2d90.4059796608181!3d24.758035658561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f002680e127%3A0x33b94cfb30e477b6!2sRoyal%20M.A.%20Kabir%20Tower!5e0!3m2!1sen!2sbd!4v1752852673687!5m2!1sen!2sbd"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Royal M.A. Kabir Tower Location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
