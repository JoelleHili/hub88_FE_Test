import { ApolloProvider } from "@apollo/client"
import { CountryTable } from "./components"
import client from "./api/apolloClient"

const App = () => (
  <div className="page">
    <ApolloProvider client={client}>
      <CountryTable />
    </ApolloProvider>
  </div>
)

export default App
