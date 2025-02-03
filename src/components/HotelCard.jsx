import React from 'react'

const HotelCard = ({ hotel }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 
      hover:scale-105 transition w-[280px] h-[300]">
        {/* Hotel Image */}
        <img
          src={hotel.thumb_image}
          alt={hotel.property_name}
          className="w-full h-[205px] object-cover rounded-md"
        />
  
        {/* Hotel Info */}
        <div className="p-2">
          <h2 className="text-lg font-bold">{hotel.property_name}</h2>
          <p className="text-gray-500">{hotel.short_address}</p>
  
          {/* Star Rating & Reviews */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⭐ {hotel.stars}</span>
            <span className="text-gray-600">({hotel.no_of_reviews} reviews)</span>
          </div>
  
          {/* Facilities */}
          <div className="flex flex-wrap gap-2 mt-2">
            {hotel.display_facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-1 bg-gray-100 p-1 rounded">
                <img src={facility.icon_url} alt={facility.name} className="w-4 h-4" />
                <span className="text-xs">{facility.name}</span>
              </div>
            ))}
          </div>
  
          {/* Price */}
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">{hotel.red_price} BDT</span>
            <span className="line-through text-gray-400">{hotel.black_price} BDT</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
              -{Math.round(hotel.discount_percent)}%
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default HotelCard;
  
