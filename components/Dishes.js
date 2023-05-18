import { View, Text, ScrollView } from "react-native";
import React from "react";
import Dish from "./Dish";

const Dishes = () => {
  const trending = "https://i.imgur.com/AIblN36.png";
  const dessert = "https://i.imgur.com/TPJtVg5.png";
  const ramen = "https://i.imgur.com/EOKzdpd.png";
  const pizza = "https://i.imgur.com/9spMXFz.png";
  const sushi = "https://i.imgur.com/6GDx1e2.png";
  const thai = "https://i.imgur.com/1y6h7WI.png";
  const burger = "https://i.imgur.com/Mz39b3A.png";
  const salad = "https://i.imgur.com/12l34BK.png";
  const bubbleTea = "https://i.imgur.com/i4jmFng.png";
  const coffee = "https://i.imgur.com/o4A2hAi.png";
  const breakfast = "https://i.imgur.com/xSCfYNC.png";
  const chicken = "https://i.imgur.com/Q02kQUD.png";
  const fish = "https://i.imgur.com/9eO4Nzn.png";
  const steak = "https://i.imgur.com/qbGri4Y.png";
  const indian = "https://i.imgur.com/p4dPeV7.png";
  const sandwiches = "https://i.imgur.com/G6F10G5.png";
  const mexican = "https://i.imgur.com/i09lHlv.png";
  const italian = "https://i.imgur.com/f1FstMt.png";
  const poutine = "https://i.imgur.com/YnoDHoH.png";
  const chinese = "https://i.imgur.com/uzfdqWj.png";
  const korean = "https://i.imgur.com/n1jbeva.png";
  const nigerian = "https://i.imgur.com/kSS1OVQ.png";
  const vegan = "https://i.imgur.com/McyvfeF.png";
  const halal = "https://i.imgur.com/LcfLtGT.png";
  const smoothie = "https://i.imgur.com/O6Psb9q.png";
  const bakery = "https://i.imgur.com/6ZTx25i.png";
  const soup = "https://i.imgur.com/IlUToV7.png";
  const poke = "https://i.imgur.com/4Mn2CIZ.png";
  const donut = "https://i.imgur.com/G3B8n0Y.png";

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-2 border-t-[0.5px] border-gray-200"
    >
      <Dish imgUrl={trending} title="Trending" />
      <Dish imgUrl={dessert} title="Dessert" />
      <Dish imgUrl={ramen} title="Ramen" />
      <Dish imgUrl={pizza} title="Pizza" />
      <Dish imgUrl={sushi} title="Sushi" />
      <Dish imgUrl={thai} title="Thai" />
      <Dish imgUrl={burger} title="Burger" />
      <Dish imgUrl={salad} title="Salad" />
      <Dish imgUrl={bubbleTea} title="Bubble Tea" />
      <Dish imgUrl={coffee} title="Coffee" />
      <Dish imgUrl={breakfast} title="Breakfast" />
      <Dish imgUrl={chicken} title="Chicken" />
      <Dish imgUrl={fish} title="Fish" />
      <Dish imgUrl={steak} title="Steak" />
      <Dish imgUrl={indian} title="Indian" />
      <Dish imgUrl={sandwiches} title="Sandwiches" />
      <Dish imgUrl={mexican} title="Mexican" />
      <Dish imgUrl={italian} title="Italian" />
      <Dish imgUrl={poutine} title="Poutine" />
      <Dish imgUrl={chinese} title="Chinese" />
      <Dish imgUrl={korean} title="Korean" />
      <Dish imgUrl={nigerian} title="Nigerian" />
      <Dish imgUrl={vegan} title="Vegan" />
      <Dish imgUrl={halal} title="Halal" />
      <Dish imgUrl={smoothie} title="Smoothie" />
      <Dish imgUrl={bakery} title="Bakery" />
      <Dish imgUrl={soup} title="Soup" />
      <Dish imgUrl={poke} title="Poke" />
      <Dish imgUrl={donut} title="Donut" />

      {/* Dish */}
    </ScrollView>
  );
};

export default Dishes;
