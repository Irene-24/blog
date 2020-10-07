import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Context as BlogContext } from "../context/blogContext";


const CreateScreen = ( { navigation } ) =>
{
    const { addBlogPost } = useContext( BlogContext );
    const [ title, setTitle ] = useState( "" );
    const [ content, setContent ] = useState( "" );

    const add = useCallback(
        () =>
        {
            addBlogPost( { title, content } );
            navigation.navigate( 'Home' );

        },
        [ title, content, addBlogPost, navigation ]
    );



    return (
        <View style={ styles.Container }>
            <Text style={ styles.Label }>Enter Title:</Text>
            <TextInput
                style={ styles.Input }
                value={ title }
                clearButtonMode="always"
                onChangeText={ ( text ) => setTitle( text ) }
            />
            <Text style={ styles.Label }>Enter Content:</Text>
            <TextInput
                style={ styles.Input }
                value={ content }
                multiline={ true }
                numberOfLines={ 10 }
                clearButtonMode="always"
                onChangeText={ ( text ) => setContent( text ) }
            />


            <Button
                onPress={ add }
                title="Add blog post"
                accessibilityLabel="Add blog post"
            />
        </View>
    );
};

export default CreateScreen;

const styles = StyleSheet.create(
    {
        Container:
        {
            margin: 10
        },
        Label:
        {
            fontWeight: "bold",
            fontSize: 18
        },
        Input:
        {
            borderWidth: 1,
            padding: 5,
            fontSize: 18,
            marginVertical: 10
        }
    } );
