import { useState, useEffect } from "react";
import FilterButtons from "../components/FilterButtons";
import HotelCard from "../components/HotelCard";


const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [propertyType, setPropertyType] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      const url = `https://ghuddy.link/api/v1/open/get/rental-property/es-deals-hotels?checkinDate=2025-02-02&checkoutDate=2025-02-04&requestId=123${propertyType ? `&propertyType=${encodeURIComponent(propertyType)}` : ""}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setHotels(data.esHotelCardList || []); // Correctly map API response
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchHotels();
  }, [propertyType]);

  return (
    <div>

      <FilterButtons setPropertyType={setPropertyType}></FilterButtons>

      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hotels.length > 0 ? (
            hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">No hotels found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

