import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ShowScreen = ( { route, navigation } ) => 
{

    useEffect( () =>
    {
        console.log( route.params );
        navigation.setOptions( {
            title: route.params.title
        } );

    }, [ navigation, route ] );

    return (
        <View>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perferendis officiis fugit id, dolor distinctio natus cum debitis earum reprehenderit non ipsa? Doloribus non vero fugiat temporibus odit sit aperiam.
            </Text>
        </View>
    );
};

export default ShowScreen;

const styles = StyleSheet.create( {} );
