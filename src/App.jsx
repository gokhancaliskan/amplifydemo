import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
	withAuthenticator,
	Button,
	Heading,
	Image,
	View,
	Card,
} from "@aws-amplify/ui-react";

const App = (signOut) => {
	return (
		<View className="App">
			<Card>
				<Image className="App-logo" alt="logo" />
				<Heading level={1}>We now have Auth!</Heading>
			</Card>
			<Button onClick={signOut}>Sign Out</Button>
		</View>
	);
};

export default withAuthenticator(App);
// import { DataStore } from "@aws-amplify/datastore";
// import { Blogpost } from "./models";
// import { Project } from "./models";

// await DataStore.save(
// 	new Blogpost({
// 		title: "Lorem ipsum dolor sit amet",
// 		text: "Lorem ipsum dolor sit amet",
// 		img: "Lorem ipsum dolor sit amet",
// 	})
// );

// /* Models in DataStore are immutable. To update a record you must use the copyOf function
//  to apply updates to the item’s fields rather than mutating the instance directly */
// await DataStore.save(
// 	Blogpost.copyOf(CURRENT_ITEM, (item) => {
// 		// Update the values on {item} variable to update DataStore entry
// 	})
// );

// const modelToDelete = await DataStore.query(Blogpost, 123456789);
// DataStore.delete(modelToDelete);

// const models = await DataStore.query(Blogpost);
// console.log(models);

// await DataStore.save(
// 	new Project({
// 		title: "Lorem ipsum dolor sit amet",
// 		text: "Lorem ipsum dolor sit amet",
// 		img: "Lorem ipsum dolor sit amet",
// 	})
// );

// /* Models in DataStore are immutable. To update a record you must use the copyOf function
//  to apply updates to the item’s fields rather than mutating the instance directly */
// await DataStore.save(
// 	Project.copyOf(CURRENT_ITEM, (item) => {
// 		Update the values on {item} variable to update DataStore entry
// 	})
// );

// const modelToDelete = await DataStore.query(Project, 123456789);
// DataStore.delete(modelToDelete);

// const models = await DataStore.query(Project);
// console.log(models);
