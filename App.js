import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Alert, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity, Switch, FlatList, SectionList, ActivityIndicator } from 'react-native';

export default function App() {

	const [value, setValue] = React.useState('');
	const [switchValue, setSwitchValue] = React.useState('');
	// const DATA = [
	// 	{ id: 0, name: 'Johnny', color: 'red', bg: '#111212' },
	// 	{ id: 1, name: 'Mhia', color: 'orange', bg: '#343737' },
	// 	{ id: 2, name: 'Maria', color: 'yellow', bg: '#484d4d' },
	// 	{ id: 3, name: 'Eva', color: 'blue', bg: '#5d6363' },
	// 	{ id: 4, name: 'Angeli', color: 'blue', bg: '#7e8787' },
	// 	{ id: 5, name: 'Robb', color: 'indigo', bg: '#83a7a7' },
	// 	{ id: 6, name: 'Azi', color: 'violet', bg: '#75b8b8' },
	// 	{ id: 7, name: 'Hailey', color: 'black', bg: '#53b9b9' },
	// 	{ id: 8, name: 'Mendoza', color: 'grey', bg: '#73e6e6' },
	// 	{ id: 9, name: 'Patrick', color: 'maroon', bg: '#ade6e6' },
	// 	{ id: 10, name: 'Adreanne', color: 'red', bg: '#d4f5f5' },
	// ];
	const sampleData = [
		{
			title: 'Work Experience',
			data: [
				'ISAII - Philippine Statistics Authority',
				'Technical Support Specialist - ETeleconnect Inc.',
				'Junior Network Administrator - House of Investments Inc.',
				'IT Support Staff - Honda Cars Kalookan',
			]
		},
		{
			title: 'Education',
			data: [
				'School - Our Lady of Fatima University',
				'Course - BS Information Technology',
			]
		},
		{
			title: 'Contact Details',
			data: [
				'Email - Remart Joe Tamayo',
				'Phone - 09303012161',
			]
		}
	];

	return (

		<SafeAreaView>


			{/* <ActivityIndicator
				color='orange'
				size="large"
				style={{
					marginTop: 30
				}}
			/>
			<ActivityIndicator
				color='blue'
				size="small"
			/>
			<TouchableOpacity
				onPress={() => {
					Alert.alert('my title', 'My message');
				}}
				style={[styles.myButton]}>
				<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
			</TouchableOpacity> */}

			{/* <SectionList
				sections={sampleData}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={{
						padding: 12,
						color: 'white',
						backgroundColor: 'blue',
						fontSize: 32,
						fontWeight: 'bold'

					}}>{title}</Text>
				)}
				renderItem={({ item }) => (
					<Text style={{
						padding: 12,
						fontSize: 24,
						borderBottomWidth: 1,
						borderBottomColor: 'orange'
					}}>{item}</Text>
				)}
			/> */}

			{/* <FlatList
				style={{ marginTop: '10%' }}
				data={DATA}
				renderItem={({ item }) => (
					<Text style={{
						fontWeight: 'bold',
						fontSize: 20,
						padding: 20,
						borderBottomWidth: 1,
						borderBottomColor: 'black',
						backgroundColor: item.bg,
						color: item.color
					}}> {item.name} </Text>
				)
				}
			/>
			< StatusBar backgroundColor='blue' /> */}

			{/* <ScrollView style={{
				marginTop: '50%',
				width: '100%',
				height: '100%',
			}}>
				<View style={{
					backgroundColor: 'white',
					width: '100%',
					height: '100%',
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'center',
				}}>
					<Text style={{
						fontStyle: 'italic',
						fontSize: 30,
						fontWeight: 'bold',
						color: '#000000',
					}}>
						Log in to Messenger
					</Text>
					<Image
						source={require('./assets/logo-512.webp')}
						style={{ width: 100, height: 100, marginTop: 50, }}
					/>
					<TextInput
						value={value}
						placeholder='Username'
						onChangeText={newValue => setValue(newValue)}
						style={{
							paddingHorizontal: 24,
							paddingVertical: 12,
							marginTop: 50,
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 16,
							width: '80%',

						}}
					/>
					<TextInput
						value={value}
						placeholder='Password'
						onChangeText={newValue => setValue(newValue)}
						style={{
							paddingHorizontal: 24,
							paddingVertical: 12,
							marginTop: 12,
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 16,
							width: '80%',
						}}
					/>
					<Button
						title='Login'
						color="blue"
						onPress={() => {
							console.log('You tapped the button ' + value);
						}}
					/>

					<Switch
						value={switchValue}
						onValueChange={newSwitchValue => setSwitchValue(newSwitchValue)}
						thumbColor='grey'
						trackColor={{
							true: 'blue',
							false: 'silver'
						}}
					/>

					<TouchableOpacity
						onPress={() => { }}
						style={{
							paddingHorizontal: 24,
							paddingVertical: 12,
							borderRadius: 10,
							backgroundColor: 'blue',
							width: '80%'
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
					</TouchableOpacity>


					<FlatList
						data={DATA}
						renderItem={({ item }) => (
							<Text style={{
								fontWeight: 'bold',
								fontSize: 20,
								padding: 12,
								borderBottomWidth: 1,
								borderBottomColor: 'orange'
							}}> {item.name} </Text>
						)}
					/>
				</View>

			</ScrollView> */}

			<ScrollView style={{
				marginTop: '10%',
				width: '100%',
				height: '100%',
			}}>
				<View style={{
					backgroundColor: 'white',
					width: '100%',
					height: '100%',
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'center',
				}}>

					<Text style={{
						fontStyle: 'italic',
						fontSize: 20,
						fontWeight: 'bold',
						color: '#000000',
						marginTop: '10%'
					}}>
						Hi I am
					</Text>
					<Text style={{
						fontStyle: 'italic',
						fontSize: 30,
						fontWeight: 'bold',
						color: '#000000',
					}}>
						Remart Joe Tamayo
					</Text>
					<Text style={{
						fontStyle: 'italic',
						fontSize: 20,
						fontWeight: 'bold',
						color: '#000000',
					}}>
						IT Professional
					</Text>
					<Image
						source={require('./assets/1633834387450.jpeg')}
						style={{ width: '100%', height: 350 }}
					/>

					<SectionList
						style={{
							width: '100%',
						}}
						sections={sampleData}
						renderSectionHeader={({ section: { title } }) => (
							<Text style={{
								padding: 12,
								color: 'black',
								backgroundColor: '#6ec0f2',
								fontSize: 20,
								fontWeight: 'bold',
								fontStyle: 'italic',

							}}>{title}</Text>
						)}
						renderItem={({ item }) => (
							<Text style={{
								padding: 12,
								fontSize: 15,
								borderBottomWidth: 1,
								borderBottomColor: 'orange'
							}}>{item}</Text>
						)}
					/>
					<TouchableOpacity
						onPress={() => {
							Alert.alert('Copied', 'Phone number was copied on your clipboard!.');
						}}
						style={{
							backgroundColor: '#31576d',
							padding: 15,
							borderRadius: 10,
							marginTop: 10,
							marginBottom: 10,
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Copy Phone</Text>
					</TouchableOpacity>
					<Text style={{
						fontStyle: 'italic',
						fontSize: 20,
						fontWeight: 'bold',
						color: '#000000',
						marginTop: '10%',
					}}
					>
						Send message:
					</Text>
					<TextInput
						value={value}
						placeholder='Message'
						onChangeText={newValue => setValue(newValue)}
						style={{
							paddingHorizontal: 24,
							paddingVertical: 12,
							marginTop: 10,
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 16,
							width: '80%',
							marginBottom: 10,
						}}
					/>
					<TouchableOpacity
						onPress={() => {
							Alert.alert('Success', 'Message was successfully sent.');
						}}
						style={{
							backgroundColor: '#31576d',
							padding: 15,
							borderRadius: 10,
							marginTop: 10,
							marginBottom: 50,
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Send</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	myButton: {
		backgroundColor: 'blue',
		padding: 20,
		borderRadius: 10
	}
});


