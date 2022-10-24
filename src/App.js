import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import Router from "./Router";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </ChakraProvider>
  );
}

export default App;
