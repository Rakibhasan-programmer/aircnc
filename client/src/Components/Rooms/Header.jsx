import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bamboo House!"
        subtitle="Sideman, Indonesia"
        center={false}
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl pt-6">
        <img
          className="object-cover w-full"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-807995199727408777/original/3ba641e8-f9be-41cb-b834-aba9695726fa.jpeg"
          alt="Header Image"
        />
      </div>
    </>
  );
};

export default Header;
