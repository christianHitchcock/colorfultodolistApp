import {
    Box,
    useTheme,
  } from '@chakra-ui/react'
  import { ChakraNestedProvider } from '../ChakraNestedProvider'
  
  export const Section = ({ children, heading, description, theme, ...rest }) => {
    // If no theme is passed in, then use the default theme which was passed to
    // the main ChakraProvider.
    // If a theme is provided it is expected to already be an extended full theme
    const defaultTheme = useTheme()
    const sectionTheme = theme ? theme : defaultTheme
  
    const id = 'section-id-' + Date.now()
  
    return (
      <Box
       
      >
        <ChakraNestedProvider theme={sectionTheme} cssVarsRoot={'#' + id}>
          {children}
        </ChakraNestedProvider>
      </Box>
    )
  }
  