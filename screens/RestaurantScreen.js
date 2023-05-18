import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Dish from "../gray-buffalo/schemas/dish";
import DishScroll from "../components/DishScroll";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../slices/restaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      reviews,
      category,
      address,
      logoImgUrl,
      shortDesc,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        reviews,
        category,
        address,
        logoImgUrl,
        shortDesc,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  //   hide the header using useLayoutEffect and setOptions

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View className="relative z-[100]">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 object-fit bg-gray-100 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14  left-5 bg-gray-100 p-2 rounded-full"
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="absolute top-14  right-[120px] bg-gray-100 p-2 rounded-full">
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="absolute top-14 right-[70px] bg-gray-100 p-2 rounded-full">
            <Ionicons name="md-search-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="absolute top-14 right-5  bg-gray-100 p-2 rounded-full">
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <View className="bg-white  shadow-sm  shadow-gray-400 absolute p-[0.2px] rounded-full mt-2 top-44 z-[100] right-[41%] mb-2">
            <Image
              source={{ uri: urlFor(logoImgUrl).url() }}
              className="  w-16 h-16 object-contain rounded-full"
            />
          </View>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4 pb-1">
            <Text className="font-bold text-3xl text-center mt-3 pb-2">
              {title}
            </Text>
            <View className="flex-row items-center justify-center pb-5 space-x-1">
              <View className="flex-row items-center space-x-1 pr-1 border-r-2 border-gray-300">
                <Text>{rating}</Text>
                <AntDesign name="star" size={15} color="#e8bf17" />
                <Text>({reviews}+)</Text>
              </View>
              <View className="pr-1 border-r-2 border-gray-300">
                <Text>{category}</Text>
              </View>
              <TouchableOpacity className="flex-row items-center">
                <Text>3.1mi</Text>
                <Ionicons name="md-location" size={14} color="lightgray" />
                <EvilIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center  justify-between space-x-2 p-4 py- border-y-[0.3px] border-gray-300 ">
            <TouchableOpacity className="flex-row items-center bg-black p-2 rounded-full">
              <AntDesign name="questioncircle" size={16} color="white" />
              <Text className="pl-1 text-md font-semibold text-sm text-white">
                Have an Allergy?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="shadow-sm shadow-gray-500  ">
              <ImageBackground
                source={{
                  uri: "https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/9af580680d4007475cbbf9f842a12ecd2760/i1080x475.jpg",
                }}
                className=" h-9 w-[170px] object-contain  overflow-hidden border border-gray-300 rounded-full "
              >
                <View className="flex-row items-center justify-center rounded-full m-auto shadow-sm shadow-black   bg-white w-[90%] h-[60%] ">
                  <Text className="text-black font-semibold text-center text-md">
                    Are you on a diet?
                  </Text>
                  <View className="">
                    <Ionicons
                      name="ios-fitness-outline"
                      size={16}
                      color="red"
                    />
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View className="">
          <Text className="px-5 pt-6 mb-3 font-bold text-xl">
            Popular Dishes
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row  px-4   pb-4"
          >
            {/* PopularDishScroll */}
            {dishes &&
              dishes.map((dish) => (
                <DishScroll
                  key={dish._id}
                  id={dish._id}
                  imgUrl={dish.image}
                  name={dish.name}
                  price={dish.price}
                  desc={dish.shortDesc}
                />
              ))}
          </ScrollView>
        </View>
        <View className="pb-32">
          <Text className="px-5 pt-6 mb-3 font-bold text-xl">Full Menu</Text>
          {/* DishRow */}
          {dishes &&
            dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                price={dish.price}
                desc={dish.shortDesc}
                imgUrl={dish.image}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
