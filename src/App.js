import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Route from "./routes";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
