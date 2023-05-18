import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#bcff52] p-4 rounded-lg flex-row items-center space-x-1 "
      >
        <Text className="text-[#2c4700] font-extrabold text-lg  bg-[#90e010] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-[#2c4700] font-extrabold text-lg pl-5 text-center">
          View Cart
        </Text>
        <Text className="text-lg text-[#2c4700] font-extrabold">
          <Currency quantity={basketTotal} currency="CAD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
