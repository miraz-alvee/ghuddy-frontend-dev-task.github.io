import { useState } from "react";

const propertyTypes = ['Hotel', 'Holiday Home','Villa', 'Apartment', 'Boat', 'Resort', 'Ship'];

const FilterButtons = ({ setPropertyType }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (type) => {
    if (selected === type) {
      setSelected(null);
      setPropertyType(""); // Remove filter
    } else {
      setSelected(type);
      setPropertyType(type);
    }
  };

  return (
    <div className="flex justify-between space-x-4 p-4 max-w-screen-2xl mx-auto">
      {propertyTypes.map((type) => (
        <button
          key={type}
          onClick={() => handleClick(type)}
          className={`flex items-center gap-2 px-4 py-2 border-2 rounded-full transition-colors
            ${selected === type 
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}
          `}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

