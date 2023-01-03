import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {ChildrenProps} from 'components/components'

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

export function ClientProvider({children}: ChildrenProps) {
    return (<ApolloProvider {...{client}}>
        {children}
    </ApolloProvider>)
}