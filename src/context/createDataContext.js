import React, { useReducer, createContext } from 'react';

function createDataContext ( reducer, actions, initState ) 
{
    const Context = createContext();

    const Provider = ( { children } ) =>
    {
        const [ state, dispatch ] = useReducer( reducer, initState );

        //actions = { addBlogPost : (dispatch) => () => {} }

        const boundActions = {};

        for ( const key in actions ) 
        {
            boundActions[ key ] = actions[ key ]( dispatch );
        }

        //boundActions = { addBlogPost : () => {} }

        return (
            <Context.Provider
                value=
                {
                    {
                        state,
                        ...boundActions
                    }
                } >
                {children }
            </Context.Provider>
        );
    };

    return { Context, Provider };
}

export default createDataContext;
