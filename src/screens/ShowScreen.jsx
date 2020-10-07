import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from "../context/blogContext";

const ShowScreen = ( { route, navigation } ) => 
{
    const { state: posts, editBlogPost } = useContext( BlogContext );

    const blogPost = posts.find( p => p.id === route.params.id );

    useEffect( () =>
    {
        navigation.setOptions( {
            title: route.params.title
        } );

    }, [ navigation, route ] );

    return (
        <View>
            <Text>
                { blogPost.content }
            </Text>

        </View>
    );
};

export default ShowScreen;

const styles = StyleSheet.create( {} );
