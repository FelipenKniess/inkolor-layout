import React, {useState} from 'react';

import { Container } from './styles';
import Logo from '../../assets/images/logo.svg';
import {AiOutlineGlobal} from 'react-icons/ai'
import IconFrance from '../../assets/images/france.svg'
import IconGermany from '../../assets/images/germany.svg'
import IconItaly from '../../assets/images/italy.svg'
import IconUnitedKingdom from '../../assets/images/united-kingdom.svg'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Header = () => {
    const [value, setValue] = useState('');

    function handleChange(event){
        setValue(event.target.value)
    }

    return (
        <Container>
            <img src={Logo} alt="Logo" />

            <FormControl>
                <Select
                    labelId="label-countries"
                    id="countries"
                    autoWidth
                    displayEmpty
                    value={value}
                    onChange={handleChange}
                >
                    <MenuItem disabled value="">
                        <AiOutlineGlobal size={20}/>
                    </MenuItem>
                    <MenuItem value="france">
                        <img src={IconFrance} width="20" alt="France" />
                    </MenuItem>
                    <MenuItem value="germany">
                        <img src={IconGermany} width="20" alt="Germany" />
                    </MenuItem>
                    <MenuItem value="italy">
                        <img src={IconItaly} width="20" alt="Italy" />
                    </MenuItem>
                    <MenuItem value="unitedkingdom">
                        <img src={IconUnitedKingdom} width="20" alt="UnitedKingdom" />
                    </MenuItem>
                </Select>
            </FormControl>
        </Container>
    )
}

export default Header;