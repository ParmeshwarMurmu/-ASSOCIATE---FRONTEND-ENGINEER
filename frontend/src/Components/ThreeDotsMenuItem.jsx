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
import threeDots from '../Assets/more_horiz.png';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';


const ThreeDotsMenuItem = () => {

    const { theme } = useSelector((store) => {
        return {
            theme: store.ThemeReducer.theme,
        }
    }, shallowEqual)


  return (
    <div>
        <Menu>
                <MenuButton className={`text-mettingCompltedTextColor  ${theme === 'darkTheme' ? 'bg-navigationBackgroundColor' : 'text-replyMessageBodyThemeTextColor'} `} variant={'none'} as={Button} rightIcon={<Image src={threeDots} />}>
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

export default ThreeDotsMenuItem
