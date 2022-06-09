import { StatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpense from "./screens/RecentExpense";
import AllExpense from "./screens/AllExpense";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ExpanceProvider } from "./store/expanceContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <ExpanceProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Recent"
            sceneContainerStyle={{ backgroundColor: "#ffffff" }}
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "#f9f8f9",
              },
              headerStyle: {
                backgroundColor: "#ffffff",
                borderBottomWidth: 0,
                shadowColor: "transparent",
              },
              headerTintColor: "#ffffff",
            }}
          >
            <Tab.Screen
              name="Recent"
              component={RecentExpense}
              options={{
                tabBarLabel: "Recent",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cellular-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="All"
              component={AllExpense}
              options={{
                tabBarLabel: "All",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons
                    name="file-tray-full-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ExpanceProvider>
      <StatusBar style="auto" />
    </>
  );
}
