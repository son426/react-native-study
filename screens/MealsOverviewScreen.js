import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation }) {
  const route = useRoute();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, catId]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 16,
  },
});
