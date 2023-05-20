import React , {useState} from "react";
import { InputGroup,Input, InputLeftElement,Icon} from '@chakra-ui/react'
import { FaRegCircle } from "react-icons/fa";


function Inputfield(props){
  const [placeholder, setplaceholder] = useState('Create a new todo');
 

  const  handleChanges = () => {
    setplaceholder("Currently typing..");
  }
  
  return(
    <div className="input">
    <InputGroup>
      <Input placeholder= {placeholder} variant='filled'
      focusBorderColor='white' 
      bg={"white"}
      _focus = {{background:"white"}}
      onClick={handleChanges}
      className="inputfield"
      value={props.value}
      />
      <InputLeftElement>
      <Icon as={FaRegCircle} boxSize={6}  color='hsl(236, 33%, 92%)'  id="inputicon" />
    </InputLeftElement>
      </InputGroup>
    </div>

  );
}


export default Inputfield;