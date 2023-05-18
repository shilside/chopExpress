import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import LogoCard from "./LogoCard";

const LogoRow = ({ id }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == 'restaurant'] {
          ...,
          dishes[]->,
          type-> {
            name
          }
        }
      `
      )
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className=" bg-white border-[0.3px] border-gray-200 pb-4 pt-2 space-x-1"
    >
      {/* LogoCard */}
      {restaurants?.map((restaurant) => (
        <LogoCard
          key={restaurant._id}
          id={restaurant._id}
          title={restaurant.name}
          logoImgUrl={restaurant.logoImage}
          rating={restaurant.rating}
          reviews={restaurant.reviews}
          category={restaurant.type.name}
          address={restaurant.address}
          imgUrl={restaurant.image}
          shortDesc={restaurant.shortDesc}
          dishes={restaurant.dishes}
          long={restaurant.long}
          lat={restaurant.lat}
        />
      ))}
    </ScrollView>
  );
};

export default LogoRow;
