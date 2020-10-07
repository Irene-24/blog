import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const BlogPostForm = ( { initialValues, onSubmit, callback } ) => 
{
    const [ title, setTitle ] = useState( initialValues?.title || "" );
    const [ content, setContent ] = useState( initialValues?.content || "" );

    const [ id ] = useState( initialValues?.id );

    const submit = useCallback( () =>
    {
        const payload =
        {
            id,
            title,
            content
        };

        onSubmit( payload, callback );

    }, [ title, content, id, onSubmit, callback ] );

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
                clearButtonMode="always"
                onChangeText={ ( text ) => setContent( text ) }
            />


            <Button
                onPress={ submit }
                title="Save blog post"
                accessibilityLabel="Save blog post"
            />
        </View>

    );
};

export default BlogPostForm;


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
