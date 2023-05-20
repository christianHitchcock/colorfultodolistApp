import {  extendTheme } from '@chakra-ui/react'
import { Section } from '../Section/section'
import { CheckboxTheme } from '../checkboxsection/checkbox'
import  ChkboxCustCtrl from '../checkboxsection/checkboxcustom'


 const CheckboxSection = () => (
    <Section heading='Checkbox' theme={extendTheme(CheckboxTheme)}>
        
   
        <ChkboxCustCtrl mb={3} />
    </Section>
 

)

export default CheckboxSection;