import createDataContext from "./createDataContext";

const blogReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case "add_blogpost":

            return [
                ...state,
                {
                    id: Math.floor( ( Math.random() * 8999 ) + 1000 ),
                    title: `Blog Post #`
                }
            ];

        case "delete_blogpost":
            const posts = state.filter( p => p.id !== action.payload );

            return posts;


        default:
            return state;
    }
};

const addBlogPost = ( dispatch ) =>
{
    return () => dispatch( { type: "add_blogpost" } );
};

const delBlogPost = ( dispatch ) =>
{
    return ( id ) => dispatch( { type: "delete_blogpost", payload: id } );
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        delBlogPost
    },
    []
);
