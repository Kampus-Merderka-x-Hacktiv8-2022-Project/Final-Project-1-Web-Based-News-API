import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "component/navbar/Navbar";
import Router from "pages/Router";

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
