import React, { useLayoutEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Context as BlogContext } from "../context/blogContext";

const ShowScreen = ( { route, navigation } ) => 
{
    const { state: posts } = useContext( BlogContext );

    const blogPost = posts.find( p => p.id === route.params.id );

    useLayoutEffect( () =>
    {
        navigation.setOptions(
            {
                title: route.params.title,
                headerRight: () => (
                    <TouchableOpacity
                        style={ { marginRight: 20 } }
                        onPress={ () => 
                        {
                            navigation.navigate( 'Edit',
                                {
                                    title: blogPost.title,
                                    id: blogPost.id
                                } );
                        } }
                    >
                        <FontAwesome name="edit" size={ 30 } color="black" />
                    </TouchableOpacity>

                ),

            } );

    }, [ navigation, route ] );

    return (
        <View style={ styles.Container }>
            <Text style={ styles.Text }>
                { blogPost.content }
            </Text>

        </View>
    );
};

export default ShowScreen;

const styles = StyleSheet.create(
    {
        Container:
        {
            margin: 10,
        },
        Text:
        {
            fontSize: 18
        }
    } );
