import React, { useContext, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import 
{
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
} from 'react-native';

import { Context as BlogContext } from "../context/blogContext";

const IndexScreen = ( { navigation } ) =>
{

    const { state: posts, addBlogPost, delBlogPost } = useContext( BlogContext );

    const goToDetails = ( item ) => 
    {
        navigation.navigate( 'Post',
            {
                title: item.title
            } );

    };

    const render = useCallback
        (
            ( { item } ) => (
                <View style={ styles.Post }>
                    <TouchableOpacity
                        onPress={ () => goToDetails( item ) }>
                        <Text style={ styles.Title }>
                            { item.title }
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => delBlogPost( item.id ) }
                    >

                        <FontAwesome style={ styles.Icon } name="trash-o" size={ 24 } color="black" />
                    </TouchableOpacity>
                </View>
            ),
            [],
        );


    return (
        <View>
            <Button
                onPress={ addBlogPost }
                title="Add blog post"
                color="#841584"
                accessibilityLabel="Add blog post"
            />
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
            paddingHorizontal: 10,
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
            fontSize: 18

        }
    } );

export default IndexScreen;
