import React,
{
    useContext,
    useCallback,
    useLayoutEffect,
    useEffect
} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import 
{
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import { Context as BlogContext } from "../context/blogContext";

const IndexScreen = ( { navigation } ) =>
{
    const { state: posts, delBlogPost, getBlogPosts } = useContext( BlogContext );

    const goToDetails = ( item ) => 
    {
        navigation.navigate( 'Post',
            {
                title: item.title,
                id: item.id
            } );
    };

    const render = useCallback
        (
            ( { item } ) => (
                <TouchableOpacity onPress={ () => goToDetails( item ) }>
                    <View style={ styles.Post }>

                        <Text style={ styles.Title }>
                            { item.title }
                        </Text>

                        <TouchableOpacity
                            onPress={ () => delBlogPost( item.id ) }
                        >

                            <FontAwesome style={ styles.Icon } name="trash-o" size={ 24 } color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            ),
            [],
        );

    useLayoutEffect( () =>
    {
        navigation.setOptions( {
            headerRight: () => (
                <TouchableOpacity
                    style={ { marginRight: 20 } }
                    onPress={ () => 
                    {
                        navigation.navigate( 'Create' );
                    } }
                >
                    <FontAwesome name="plus" size={ 30 } color="black" />
                </TouchableOpacity>

            ),
        } );
    }, [ navigation ] );

    useEffect( () =>
    {
        getBlogPosts();

        const listener = navigation.addListener( "focus", () => 
        {
            getBlogPosts();
        } );

        return () =>
        {
            navigation.removeListener( listener );
        };

    }, [] );

    return (
        <View>
            < FlatList

                data={ posts }
                keyExtractor={ ( post ) => `${ post.id }` }
                renderItem={ render }
            />

        </View>
    );
};


const styles = StyleSheet.create(
    {
        Post:
        {
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingVertical: 18,
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor: "grey"
        },
        Icon:
        {
            fontSize: 24
        },
        Title:
        {
            fontSize: 18,
            textTransform: "capitalize"


        }
    } );

export default IndexScreen;
