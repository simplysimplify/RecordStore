import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Search from "./pages/Search";
import Results from "./pages/results";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Search />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
