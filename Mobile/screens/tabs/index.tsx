import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../Home";
import WelcomeScreen from "../Welcome";
import SearchScreen from "../Search";
import RatingScreen from "../Rating";
import ProfileScreen from "../Profile";

const Tab = createBottomTabNavigator();

const HomeScreenWrapper: React.FC<any> = (props) => (
	<HomeScreen {...props} />
);

const WelcomeScreenWrapper: React.FC<any> = (props) => (
	<WelcomeScreen {...props} />
);
const ProfileScreenWrapper: React.FC<any> = (props) => (
	<ProfileScreen {...props} />
);
const SearchScreenWrapper: React.FC<any> = (props) => (
	<SearchScreen {...props} />
);
const RatingScreenWrapper: React.FC<any> = (props) => (
	<RatingScreen {...props} />
);

const BottomTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={() => ({
				tabBarActiveTintColor: "#00B4D8",
				tabBarInactiveTintColor: "#000",
				tabBarActiveBackgroundColor: "#fff",
				tabBarInactiveBackgroundColor: "#00B4D8",

				headerShown: false,
				// tabBarStyle: {
				// 	backgroundColor: "#00B4D8",
				// },
			})}
		>
			<Tab.Screen
				name="WelcomeScreen"
				component={WelcomeScreenWrapper}
				options={{
					tabBarLabel: "Home",
					tabBarStyle: { display: "flex" },
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreenWrapper}
				options={{
					tabBarLabel: "Rechercher",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="search-outline"
							color={color}
							size={size}
						/>
					),
					// tabBarBadge: 3,
				}}
			/>
			<Tab.Screen
				name="Rating"
				component={RatingScreenWrapper}
				options={{
					tabBarLabel: "Evaluer",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="thumbs-up-outline"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreenWrapper}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="person-outline"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreenWrapper}
				options={{
					tabBarLabel: "Deconnexion",
					tabBarStyle: { display: "none" },
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="log-out-outline"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;
