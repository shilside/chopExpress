import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRows = ({ id, title, desc }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]->{
          ...,

          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View className="bg-white">
      <View className="mt-3 flex-row items-center justify-between px-4 mb-1  ">
        <Text className="font-bold text-[25px]">{title}</Text>
        <TouchableOpacity className="  bg-white shadow-sm shadow-stone-300 rounded-full p-1">
          <Feather name="chevron-right" size={16} color="gray" />
        </TouchableOpacity>
      </View>

      <Text className="text-xs text-gray-500 px-4">{desc}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="bg-white pt-4"
      >
        {/* Restaurants Card  */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            rating={restaurant.rating}
            reviews={restaurant.reviews}
            category={restaurant.type.name}
            address={restaurant.address}
            logoImgUrl={restaurant.logoImage}
            imgUrl={restaurant.image}
            shortDesc={restaurant?.shortDesc}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
