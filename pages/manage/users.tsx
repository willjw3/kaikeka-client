import {useQuery} from '@apollo/client'
import ManageLayout from "components/layouts/ManageLayout"

import {GET_USERS} from 'helpers/graphql/queries/user'

export default function Users() {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log({data})
  return (<ManageLayout />)
}
