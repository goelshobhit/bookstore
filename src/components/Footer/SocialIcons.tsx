import React from "react";
// import { IonIcon } from '@ionic/react';

interface Icon {
  name: string;
}

interface SocialIconsProps {
  Icons: Icon[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          {/* <IonIcon name={icon.name} /> */}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;