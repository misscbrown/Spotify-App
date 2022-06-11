import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Dashboard from "./pages/Dashboard";
import AllPost from "./pages/AllPost";
import Navbar from "./components/Navbar";

import "./App.css";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/allPosts" element={<AllPost />} />

          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
