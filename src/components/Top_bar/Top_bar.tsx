import { FC } from 'react';
import styled from 'styled-components';
import SearchField from './Search_field/Search_field';
import RightIcons from "./Notification/Right_icons";
import DropDownMenu from "./Drop_down_menu/Drop_down_menu";

const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    height: 50px;
    display:flex;
    box-shadow: 5px 4px 7px lightgrey;
`;
const Logo = styled.div`
    img{    
        width: 40px;
        height: 40px;
        margin: auto 5px ;
    }
    display: flex;
`;

const TopBar: FC = () => {
    return( 
        <Wrapper>
            <Logo>
            <img src = './icons/logo.png' alt="logo" />
            </Logo>
            <DropDownMenu />
            <SearchField />
            <RightIcons />
        </Wrapper>
    );
};
export default TopBar;
 