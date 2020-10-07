import createDataContext from "./createDataContext";

const blogReducer = ( state, action ) =>
{
    let posts;
    switch ( action.type )
    {
        case "add_blogpost":

            return [
                ...state,
                {
                    id: Math.floor( ( Math.random() * 8999 ) + 1000 ),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];

        case "delete_blogpost":
            posts = state.filter( p => p.id !== action.payload );

            return posts;

        case "edit_blogpost":
            posts = state.filter( p => p.id !== action.payload );

            return posts;

        default:
            return state;
    }
};

const addBlogPost = ( dispatch ) =>
{
    return ( { title, content } ) => dispatch(
        {
            type: "add_blogpost",
            payload:
            {
                title,
                content
            }
        } );
};

const delBlogPost = ( dispatch ) =>
{
    return ( id ) => dispatch( { type: "delete_blogpost", payload: id } );
};

const editBlogPost = ( dispatch ) =>
{
    return ( id ) => dispatch( { type: "edit_blogpost", payload: id } );
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        delBlogPost,
        editBlogPost
    },
    []
);
