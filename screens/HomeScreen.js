import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Categories from "../components/Categories";
import Dishes from "../components/Dishes";
import FeaturedRows from "../components/FeaturedRows";
import client from "../sanity";
import LogoRow from "../components/LogoRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "ChopExpress",
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured']| {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  // console.log(featuredCategories);

  return (
    <SafeAreaView className=" bg-white pt=5 mb-[90px]">
      {/* Header */}
      <View className="flex-row pb-2 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148498595.jpg?w=740&t=st=1683218675~exp=1683219275~hmac=478be6064a9850ceef1090b2309c079c1747c28bbc558ddb6ed1d3687561af6b",
          }}
          className="w-8 h-8 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Order Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#fcb603" />
          </Text>
        </View>
        <FontAwesome5 name="user-circle" size={24} color="black" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  rounded-full bg-white shadow-md shadow-gray-300 p-3">
          <Ionicons name="ios-search-sharp" size={20} color="lightgray" />
          <TextInput
            placeholder="Search Cuisines and Restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon size={25} color="black" />

        {/* Categories */}
      </View>
      <View className="px-1 pb-3">{/* <Categories /> */}</View>
      <ScrollView className="bg-gray-100">
        {/* Dishes */}
        <Dishes />

        {/* Restaurant Aesthtic Logo Row */}
        <LogoRow />

        {/* Featured Rows */}

        {featuredCategories?.map((category) => (
          <FeaturedRows
            key={category._id}
            id={category._id}
            title={category.name}
            desc={category.shortDesc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
