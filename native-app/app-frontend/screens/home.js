import React, { useState, useEffect, useCallback } from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from 'react-native';

import PageLayout from '../components/page-layout';
import NewsHeadline from '../components/news-headline';
import ActivityLoading from '../components/activity-loading';

import { AppLoading } from 'expo';
import * as Location from 'expo-location';

import fetchFonts from '../ibm-fonts';

const Home = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [countryName, setCountryName] = useState(null)


    const getCountryNews = (latitude, longitude) => {
        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_latitude: latitude,
                user_longitude: longitude
            })
        }
        fetch('https://ndia-api-boisterous-duiker-ts.eu-gb.mybluemix.net/local_news', data)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson.local_news);
                setCountryName(responseJson.country);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setIsLoading(false);
                setRefreshing(false);
            });
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status != 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
                let myLocation = await Location.getCurrentPositionAsync({});
                let coords = {
                    latitude: myLocation.coords.latitude,
                    longitude: myLocation.coords.longitude
                };
                getCountryNews(coords.latitude, coords.longitude);
        })();
    }, []);


    if(!fontLoaded) {
        return (
            <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            />
        );
    };

    return (
        <PageLayout
            header='Home'
            isImage={true}
            imageSource= {require('../images/2020-cfc-512.png')}
            nav={navigation}
        >
            <View style={styles.center}>
                <View style={styles.scroll}>
                    <View style={styles.appInfo}>
                        <View style={styles.homeHeading}>
                            <View style={{marginRight: 20}}>
                                <Text style={styles.subtitle}>Welcome to</Text>
                                <Text style={styles.title}>N.D.I.A</Text>
                            </View>
                            <View style={styles.imageZone}>
                                <Image 
                                    style={styles.imageStyle}
                                    source={require('../images/logo-512.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.contentHeader}>
                            <Text style={styles.content}>
                                Your Natural Disaster Informant and Assistant for up to date news and safety tips on
                                natural disasters happening around the globe
                            </Text>
                        </View>
                        <View style={styles.buttonGorup}>
                            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                                <Text style={styles.button}>Learn More about N.D.I.A here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.listOuter}>
                        <View style={styles.listContainer}>
                            {isLoading ? <ActivityLoading title="Loading Disaster News from your country" />: (
                                data.length > 0 && countryName ?
                                <View style={{height: '100%', width: '100%'}}>
                                    <View style={styles.newsHeaderContainer}>  
                                        <Text style={styles.newsHeader}>{`Disaster News from ${countryName}`}</Text>
                                        <View styles={styles.newsButtonGorup}>
                                            <TouchableOpacity onPress={() => navigation.navigate('News')}>
                                                <Text style={styles.newsButton}>More News</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <FlatList
                                        data={data}
                                        KeyExtractor={({ id }, index) => id}
                                        renderItem={ ({ item }) => (
                                            <NewsHeadline 
                                                headline={item.headline}
                                                link={item.link}
                                                country={item.country}
                                                time={item.time}
                                                day={item.day}
                                            />
                                        )}
                                    />
                                </View> : (
                                    <View style={{padding: 20}}>
                                        <Text style={{...{textAlign: 'center'}, ...styles.newsHeader}}>No reported disaster news from your country</Text>
                                        <View style={{marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                                            <View style={{...{padding: 10}, ...styles.buttonGorup}}>
                                                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                                                    <Text style={styles.button}>Global News</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>    
                                    </View>
                                )
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </PageLayout>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scroll: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
        paddingTop: 15
    },
    appInfo: {
        height: '40%',
        width: '100%'
    },
    homeHeading: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '35%'
    },
    contentHeader: {
        height: '40%'
    },
    title: {
        fontFamily: 'IBMPlexSans-Medium',
        fontSize: 25,
        color: '#323232',
        paddingBottom: 5,
        alignSelf: 'center'
    },
    subtitle: {
        fontFamily: 'IBMPlexSans-Light',
        fontSize: 20,
        color: '#323232',
        textDecorationColor: '#D0E2FF',
        paddingTop: 5,
        alignSelf: 'center'
    },
    content: {
        fontFamily: 'IBMPlexSans-Light',
        color: '#323232',
        paddingTop: 3,
        fontSize: 15
    },
    imageZone: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    buttonGroup: {
        width: 175,
        height: '20%'
    },
    button: {
        backgroundColor: '#1062FE',
        color: '#FFFFFF',
        fontFamily: 'IBMPlexSans-Medium',
        fontSize: 14,
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10
    },
    listContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        elevation: 5,
        borderRadius: 10
    },
    listOuter: {
        height: '60%'
    },
    newsHeader: {
        fontFamily: 'IBMPlexSans-Medium',
        fontSize: 14
    },
    newsHeaderContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#F1F0EE'
    },
    newsButtonGroup: {
        flex: 1
    },
    newsButton: {
        backgroundColor: '#1062FE',
        color: '#FFFFFF',
        fontFamily: 'IBMPlexSans-Medium',
        fontSize: 12,
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        marginTop: 5,
        borderRadius: 10
    }
});

export default Home;