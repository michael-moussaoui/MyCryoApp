import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

type DataItem = {
	coverImageUri: string;
};

const DATA: DataItem[] = [
	{
		coverImageUri:
			"https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg",
	},
	{
		coverImageUri:
			"https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg",
	},
	{
		coverImageUri:
			"https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg",
	},
	{
		coverImageUri:
			"https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg",
	},
];

const MyCarousel = () => {
	const renderItem = ({ item }: { item: DataItem }) => (
		<View key={item.coverImageUri} style={styles.cardContainer}>
			<View style={styles.cardWrapper}>
				<Image
					style={styles.card}
					source={{ uri: item.coverImageUri }}
				/>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<Carousel
				renderItem={renderItem}
				data={DATA}
				sliderWidth={300}
				itemWidth={300}
				loop
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		// backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	cardContainer: {
		alignItems: "center",
		justifyContent: "center",
		width,
	},
	cardWrapper: {
		borderRadius: 8,
		overflow: "hidden",
	},
	card: {
		width: width * 0.9,
		height: width * 0.5,
	},
});

export default MyCarousel;
