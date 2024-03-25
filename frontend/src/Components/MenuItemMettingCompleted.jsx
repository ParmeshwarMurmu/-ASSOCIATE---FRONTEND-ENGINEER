import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button, Image
} from '@chakra-ui/react'
import downArrow from '../Assets/arrow_back_ios.png';
import frame from '../Assets/Frame 2087325584.png';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

const MenuItemMettingCompleted = () => {

    const { theme } = useSelector((store) => {
        return {
            theme: store.ThemeReducer.theme,
        }
    }, shallowEqual)
    return (
        <div>
            <Menu>
                <MenuButton className={`${theme === 'darkTheme' ? 'text-mettingCompltedTextColor' : 'text-replyMessageBodyThemeTextColor'}  font-openSans font-semibold text-12 leading-18  ${theme === 'darkTheme' ? 'bg-navigationBackgroundColor' : 'text-replyMessageBodyThemeTextColor'}`} b variant={'none'}  as={Button} leftIcon={<Image src={frame} />} 
                rightIcon={<Image src={downArrow} />}>
                    Meeting Completed
                </MenuButton>
                <MenuList>
                    <MenuItem minH='48px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/100/100'
                            alt='Fluffybuns the destroyer'
                            mr='12px'
                        />
                        <span>Fluffybuns the Destroyer</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/120/120'
                            alt='Simon the pensive'
                            mr='12px'
                        />
                        <span>Simon the pensive</span>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default MenuItemMettingCompleted
