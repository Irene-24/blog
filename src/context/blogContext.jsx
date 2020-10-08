import createDataContext from "./createDataContext";
import server from "../api/jsonServer";

const blogReducer = ( state, action ) =>
{
    let posts;
    switch ( action.type )
    {
        case "get_blogposts":
            return action.payload;

        case "delete_blogpost":
            posts = state.filter( p => p.id !== action.payload );

            return posts;

        case "edit_blogpost":
            posts = [ ...state ];
            const index = posts.findIndex( p => p.id === action.payload.id );

            posts[ index ] = { ...action.payload };
            return posts;

        default:
            return state;
    }
};

const addBlogPost = ( dispatch ) =>
{
    return async ( { title, content }, cb = () => { } ) => 
    {
        await server.post( "/blogposts",
            {
                title,
                content
            } );

        cb();

    };
};

const delBlogPost = ( dispatch ) =>
{
    return async ( id ) =>
    {

        await server.delete( `/blogposts/${ id }` );

        dispatch( { type: "delete_blogpost", payload: id } );

    };
};

const editBlogPost = ( dispatch ) =>
{
    return async ( { title, content, id }, cb ) => 
    {
        await server.put( `/blogposts/${ id }`,
            {
                title,
                content
            } );

        dispatch(
            {
                type: "edit_blogpost",
                payload:
                {
                    id,
                    title,
                    content
                }
            } );

        cb();
    };
};

const getBlogPosts = ( dispatch ) =>
{
    return async () => 
    {
        const resp = await server.get( "/blogposts" );
        const posts = resp.data;
        dispatch(
            {
                type: "get_blogposts",
                payload: posts
            } );

    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        delBlogPost,
        editBlogPost,
        getBlogPosts,
    },
    []
);
