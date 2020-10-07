import React, { useContext } from 'react';
import { Context as BlogContext } from "../context/blogContext";

import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ( { navigation } ) =>
{
    const { addBlogPost } = useContext( BlogContext );

    return <BlogPostForm
        onSubmit={ addBlogPost }
        callback={ () => navigation.navigate( 'Home' ) }
    />;
};

export default CreateScreen;
