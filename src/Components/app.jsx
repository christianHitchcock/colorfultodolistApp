import React from "react";
import { ChakraProvider} from '@chakra-ui/react'
import Header from "./header";
import Footer from "./footer";
import NewList from "./list";




const App = () => {
    return(
        <div className="main">
            <ChakraProvider>
            <Header />
            <NewList/>
            <Footer />
            </ChakraProvider>
           
        </div>
    )
}

export default App






 
