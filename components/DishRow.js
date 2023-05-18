import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../slices/basketSlice";
const DishRow = ({ id, name, desc, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, name, desc, price, imgUrl }));
  };

  const handleRemoveFromBasket = () => {
    if (!items.length) return;

    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border-[0.6px] pt-3.5 px-4   pb-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row items-center pl-1">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            {desc && <Text className="text-gray-500 text-sm ">{desc}</Text>}
            <Text className="text-gray-500  mt-1">
              <Currency quantity={price} currency="CAD" />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
              }}
              source={{ uri: urlFor(imgUrl).url() }}
              className="w-20 h-20 object-fit  rounded-full bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View
          className="flex-row items-center  bg-white space-x-2  p-0.5 pl-5 pb-5"
          onPress={() => setIsPressed(!isPressed)}
        >
          <TouchableOpacity
            disabled={!items.length}
            onPress={handleRemoveFromBasket}
            className="bg-white p-1 rounded-full  shadow-sm shadow-gray-400"
          >
            <Feather
              name="minus"
              size={22}
              color={items.length ? "black" : "lightgray"}
            />
          </TouchableOpacity>

          <Text>{items.length}</Text>

          <TouchableOpacity
            onPress={handleAddToBasket}
            className="bg-white p-1 rounded-full shadow-sm shadow-gray-400"
          >
            <Feather name="plus" size={22} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
