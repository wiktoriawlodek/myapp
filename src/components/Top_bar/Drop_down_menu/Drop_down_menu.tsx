import { FC } from "react";
import useDropdown from 'react-dropdown-hook';
import styled from "styled-components";
import ToggledMenu from "./Toggled_menu/Toggled_menu";

const Wrapper = styled.div`
  width:280px;
    margin: auto 5px;
    height:35px;
    z-index: 2;
`;

const MenuToTogge = styled.div`
    width:280px;
    height:35px;
    display: flex;
`;

const Icon = styled.div`
    width:10%;
    height:30px;
    margin: auto 5px;
    img {
        width: 100%;
        height: 100%;
    }
    :hover {
        cursor: pointer;
    }
`;

const Text = styled.div`
    width:75%;
    height: 100%;
    align-items: center;
    padding-left: 10px;
    display:flex;
    font-family: Tahoma;
`;

const Arrow = styled.div`
    width:15%;
    height:90%;
    text-align: center;
    margin-top: 4%;
    img {
        width: 15px;
        height: 15px;
        /* margin-left:0px; */
        :hover {
            cursor: pointer;
        }  
    }
`;

 const DropDownMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
	return (
        <Wrapper ref={wrapperRef}  >
            <MenuToTogge onClick={toggleDropdown} className='zxcz'>
                <Icon>               
                     <img src='./icons/house2.svg' alt="Home page" />
                </Icon>
                <Text>
                    Home
                </Text>
                <Arrow>
                    <img src='./icons/arrow-down.svg' alt="Drop down menu arrow"></img>
                </Arrow>
            </MenuToTogge>
            {dropdownOpen &&
                <>
                    <ToggledMenu/>
                </> 
            }
        </Wrapper>
	)
}
export default DropDownMenu;
