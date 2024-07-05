import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import React from 'react';
import { icons } from "../../constants";


const TabIcon = ({icon , color, name, focused}) => {
  return (
    <View style={{flex:'1', alignItems:'center', justifyContent:'center', }}>
      <Image 
       source={icon}
       resizeMode='cover'
       tintColor={color}
       style={{height:35, width:35}}
      />
      <Text style={{
        fontFamily: focused ? 'PlusJakartaSans-Bold' : 'PlusJakartaSans-BoldItalic',
        color:color,
       }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1B9DED",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#212121",
          borderTopWidth: 1,
          borderTopColor: "#1B9DED",
          shadowColor: "#FFFFFF",
          shadowOpacity: "25%",
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="platform"
        options={{
          title: "Platform",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.platform}
              color={color}
              name="Platform"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.report}
              color={color}
              name="Report"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.settings}
              color={color}
              name="Settings"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.users}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;