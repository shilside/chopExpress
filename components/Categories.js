import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const offersImage = "https://i.imgur.com/VqAk85T.png";
  const groceryImage = "https://i.imgur.com/zjgMhX4.png";
  const convenienceImage = "https://i.imgur.com/3hllBCb.png";
  const drugsImage = "https://i.imgur.com/sJJ7li9.png";
  const beautyImage = "https://i.imgur.com/OfCP6VW.png";
  const petImage = "https://i.imgur.com/mteZLZq.png";
  const babyImage = "https://i.imgur.com/F6A35Bc.png";
  const retailImage = "https://i.imgur.com/TZ7Mlk0.png";

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}

      <CategoryCard imgUrl={offersImage} title="Offers" />
      <CategoryCard imgUrl={groceryImage} title="Grocery" />
      <CategoryCard imgUrl={convenienceImage} title="Convenience" />
      <CategoryCard imgUrl={drugsImage} title="Drugs" />
      <CategoryCard imgUrl={beautyImage} title="Beauty" />
      <CategoryCard imgUrl={petImage} title="Pet" />
      <CategoryCard imgUrl={babyImage} title="Baby" />
      <CategoryCard imgUrl={retailImage} title="Retail" />
    </ScrollView>
  );
};

export default Categories;
