import  React, { useState } from "react";
import { Checkbox} from '@chakra-ui/react'
import CheckboxIcon from '../checkboxsection/checkboxIcon'

const ChkboxCustCtrl = ( )=> {
  const [isACtive , setIsActive] = useState(true);
  return ( 
  <div  onClick={() => setIsActive(!isACtive)}>
   {isACtive ?  <Checkbox
   variant='custom-control'
  ml={1}
></Checkbox> : <CheckboxIcon
      marginRight= '10px'
      borderRadius='50'
      boxSize='1.4em'
      bgGradient='linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
    />}
</div> )
}

export default ChkboxCustCtrl ;
  

 
    