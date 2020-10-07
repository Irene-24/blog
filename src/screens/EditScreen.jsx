import React,
{
    useLayoutEffect,
    useContext,
} from 'react';
import { Context as BlogContext } from "../context/blogContext";

import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ( { navigation, route } ) => 
{
    const { state: posts, editBlogPost } = useContext( BlogContext );

    const blogPost = posts.find( p => p.id === route.params.id );

    useLayoutEffect( () =>
    {
        navigation.setOptions(
            {
                title: route.params.title
            } );
    }, [ navigation, route ] );

    return <BlogPostForm
        onSubmit={ editBlogPost }
        initialValues={ blogPost }
        callback={ () => navigation.navigate( 'Home' ) }
    />;
};

export default EditScreen;
