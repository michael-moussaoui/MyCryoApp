import * as React from "react";
import { ImageSourcePropType } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import AuthScreen from "../screens/AuthScreen";
import LoginScreen from "../screens/Login/";
import RegisterScreen from "../screens/Register";
import BottomTabs from "../screens/tabs";
import WelcomeScreen from "../screens/Welcome";
import SearchScreen from "../screens/Search";
import CryoDetailsScreen from "../screens/Details/CryoDetailsScreen";
import InfraDetailsScreen from "../screens/Details/InfraDetailsScreen";
import TeslaDetailsScreen from "../screens/Details/TeslaDetailsScreen";
import SearchSportDetailsScreen from "../screens/Details/SearchSportDetailsScreen";
import SearchPainDetailsScreen from "../screens/Details/SearchPainDetailsScreen";
import SearchWellnessDetailsScreen from "../screens/Details/SearchWellnessDetailsScreen";
import SearchResumptionOfSportsDetailsScreen from "../screens/Details/SearchResumptionOfSportsDetailsScreen";
import RatingScreen from "../screens/Rating";

import RatingCryoDetailsScreen from "../screens/Details/RatingCryoDetailsScreen";
import RatingInfraDetailsScreen from "../screens/Details/RatingInfraDetailsScreen";
import RatingTeslaDetailsScreen from "../screens/Details/RatingTeslaDetailsScreen";
import SessionsDetailsScreen from "../screens/Details/SessionsDetailsScreen";
import ChoiceDetailsScreen from "../screens/Details/ChoiceDetailsScreen";
import BookingSessionScreen from "../screens/Booking";

export type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Register: undefined;
	Welcome: undefined;
	Search: undefined;
	Rating: undefined;
	BookingSessionScreen: undefined;
	CryoDetails: {
		cryoData: { id?: number; name: string; date: string }[];
	};
	InfraDetails: {
		infraData: { id?: number; name: string; date: string }[];
	};
	TeslaDetails: {
		teslaData: { id?: number; name: string; date: string }[];
	};
	SearchSportDetails: {
		sportData: {
			id?: number;
			title: string;
			description: string;
			session: string;
		}[];
	};
	SearchPainDetails: {
		painData: {
			id?: number;
			title: string;
			description: string;
			session: string;
		}[];
	};
	SearchWellnessDetails: {
		wellnessData: {
			id?: number;
			title: string;
			description: string;
			session: string;
		}[];
	};
	SearchResumptionOfSportsDetails: {
		resumptionOfSportsData: {
			id?: number;
			title: string;
			description: string;
			session: string;
		}[];
	};
	RatingSessionCryoDetails: {
		sessionsData: {
			id?: number;
			title: string;
			image?: ImageSourcePropType;
			date: string;
			isRating: boolean;
		}[];
	};
	RatingSessionInfraDetails: {
		infraSessionData: {
			id?: number;
			title: string;
			image?: ImageSourcePropType;
			date: string;
			isRating: boolean;
		}[];
	};
	RatingSessionTeslaDetails: {
		teslaSessionData: {
			id?: number;
			title: string;
			image?: ImageSourcePropType;
			date: string;
			isRating: boolean;
		}[];
	};
	SessionsDetailsScreen: {
		sessionData: {
			id?: number;
			title: string;
			image?: ImageSourcePropType;
			date: string;
			isRating: boolean;
		}[];
	};
	ChoiceDetailsScreen: {
		choiceSession: {
			id?: number;
			title: string;
			description: string;
			session: string;
		}[];
	};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreenWrapper: React.FC<any> = (props) => (
	<HomeScreen {...props} />
);
const SearchScreenWrapper: React.FC<any> = (props) => (
	<SearchScreen {...props} />
);
const RatingScreenWrapper: React.FC<any> = (props) => (
	<RatingScreen {...props} />
);
const LoginScreenWrapper: React.FC<any> = (props) => (
	<LoginScreen {...props} />
);
const RegisterScreenWrapper: React.FC<any> = (props) => (
	<LoginScreen {...props} />
);

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				// screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name="Home"
					component={BottomTabs}
					options={{ headerTransparent: true, headerShown: false }}
				/>
				{/* <Stack.Screen
					name="Auth"
					component={AuthScreen}
					options={{ headerTransparent: true, headerShown: false }}
				/> */}
				<Stack.Screen
					name="Login"
					component={LoginScreenWrapper}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreenWrapper}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="Welcome"
					component={BottomTabs}
					options={{ headerTransparent: true, headerTitle: "" }}
				/>
				<Stack.Screen
					name="Search"
					component={SearchScreenWrapper}
					options={{ headerTransparent: true, headerTitle: "" }}
				/>
				<Stack.Screen
					name="Rating"
					component={RatingScreenWrapper}
					options={{ headerTransparent: true, headerTitle: "" }}
				/>
				<Stack.Screen
					name="CryoDetails"
					component={CryoDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="InfraDetails"
					component={InfraDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="TeslaDetails"
					component={TeslaDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="SearchSportDetails"
					component={SearchSportDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="SearchPainDetails"
					component={SearchPainDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="SearchWellnessDetails"
					component={SearchWellnessDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="SearchResumptionOfSportsDetails"
					component={SearchResumptionOfSportsDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="RatingSessionCryoDetails"
					component={RatingCryoDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="RatingSessionInfraDetails"
					component={RatingInfraDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="RatingSessionTeslaDetails"
					component={RatingTeslaDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="SessionsDetailsScreen"
					component={SessionsDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="ChoiceDetailsScreen"
					component={ChoiceDetailsScreen}
					options={{ headerTitle: "Retour" }}
				/>
				<Stack.Screen
					name="BookingSessionScreen"
					component={BookingSessionScreen}
					options={{ headerTitle: "Retour" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
