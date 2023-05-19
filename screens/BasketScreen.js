import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { selectrestaurant } from "../slices/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectrestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  const prevItemCountRef = useRef(items.length);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    if (Object.keys(groupedItems).length === 0) {
      navigation.goBack();
    }

    if (prevItemCountRef.current !== items.length) {
      animRef.current?.bounceIn();
    }

    prevItemCountRef.current = items.length;

    setGroupedItems(groupedItems);
  }, [items]);

  const animRef = useRef(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b-[0.7px] border-[#bcff52] bg-white shadow-sm shadow-gray-300">
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-6 left-6 bg-white shadow-sm shadow-gray-400 w-9 h-9 justify-center items-center rounded-full"
          >
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text className=" text-gray-400 font-bold text-center">
              Your cart from:
            </Text>
            <Text className="text-center text-lg">{restaurant.title}</Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-4 bg-white p-4 my-2 border-y-[0.5px] border-[#bcff52] shadow-sm shadow-gray-300">
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148498595.jpg?w=740&t=st=1683218675~exp=1683219275~hmac=478be6064a9850ceef1090b2309c079c1747c28bbc558ddb6ed1d3687561af6b",
            }}
            className="w-8 h-8 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 20-30 min</Text>
          <TouchableOpacity>
            <Text className="text-[#82c25d] font-semibold text-[16px]">
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="bg-white  pt-4 border-t-[0.5px] border-[#bcff52] ">
          <Text className=" px-5 text-lg font-bold mb-4">Your Items</Text>
          {Object.entries(groupedItems).map(([key, items]) => (
            <View key={key} className="px-3 py-1">
              <View className=" flex-row items-center space-x-2 px-2 ">
                <Image
                  source={{ uri: urlFor(items[0].imgUrl).url() }}
                  className="w-20 h-20 rounded-full"
                />

                <View className="flex-1 px-2">
                  <Text className="text-[16px] font-semibold">
                    {items[0]?.name}
                  </Text>
                  <Text className="text-[16px] font-medium">
                    <Currency quantity={items[0]?.price} currency="CAD" />
                  </Text>
                </View>
                <View className="flex-row items-center space-x-5 bg-white p-2 px-3 rounded-full shadow-sm shadow-gray-300">
                  <TouchableOpacity
                    onPress={() =>
                      dispatch(removeFromBasket({ id: items[0]?.id }))
                    }
                  >
                    <Octicons name="trash" size={16} color="black" />
                  </TouchableOpacity>
                  <Animatable.Text
                    ref={animRef}
                    iterationCount={1}
                    className="font-semibold"
                  >
                    {items.length}
                  </Animatable.Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        addToBasket({
                          id: items[0]?.id,
                          name: items[0]?.name,
                          price: items[0]?.price,
                          imgUrl: items[0]?.imgUrl,
                        })
                      );
                    }}
                    className=""
                  >
                    <AntDesign name="plus" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: "lightgray",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginLeft: 108,
                }}
              />
            </View>
          ))}

          <View className="pb-10">
            <Text className=" text-lg font-bold px-6 font py-2 my-3">
              Summary
            </Text>
            <TouchableOpacity className="flex-row space-x-2 items-center px-2 pl-5 py-4 bg-white">
              <Ionicons name="pricetag-outline" size={24} color="black" />
              <Text className="px-2 flex-1 text-[16px] font-medium">
                Add a Promo Code
              </Text>
              <Feather name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: "lightgray",
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginLeft: 108,
              }}
            />
            <View className="bg-white flex-row justify-between font py-2  pt-6 px-7">
              <Text className="text-gray-600 font-semibold text-[15px]">
                Subtotal
              </Text>
              <Text className="text-gray-600 font-semibold text-[15px]">
                <Currency quantity={basketTotal} currency="CAD" />
              </Text>
            </View>
            <View className="bg-white flex-row justify-between font py-2 px-7">
              <Text className="text-gray-600 font-semibold text-[15px]">
                Delivery Fee
              </Text>
              <Text className="text-gray-600 font-semibold  text-[15px]">
                <Currency quantity={1.99} currency="CAD" />
              </Text>
            </View>
            <View className="bg-white flex-row justify-between font py-2 px-7">
              <Text className="text-gray-600 font-semibold text-[15px]">
                Service Fee
              </Text>
              <Text className="text-gray-600 font-semibold text-[15px]">
                <Currency quantity={1.99} currency="CAD" />
              </Text>
            </View>

            <View className="bg-white flex-row justify-between py-2 px-7">
              <Text className="text-gray-600 font-semibold text-[15px]">
                Estimated Tax
              </Text>
              <Text className="text-gray-600 font-semibold text-[15px]">
                <Currency quantity={basketTotal * 0.10975} currency="CAD" />
              </Text>
            </View>
            <View className="bg-white flex-row justify-between py-3 px-7">
              <Text className="text-black font-extrabold text-[18px]">
                Order Total
              </Text>
              <Text className="text-black font-bold text-[18px] mb-4">
                <Currency
                  quantity={basketTotal + 3.98 + basketTotal * 0.10975}
                  currency="CAD"
                />
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Preparing")}
              className="rounded-lg mx-4 bg-[#bcff52] p-4 "
            >
              <Text className="text-center text-[#2c4700] font-bold text-[18px]">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
