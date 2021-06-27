import { FC } from 'react';
import styled from 'styled-components';
import LinksUnderProfile from './Links/Links';
import Profile from "./Profile/Profile";

const Wrapper = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius:5px;
    z-index: 1;
    margin-top: 15px;
    /* margin-left:10px; */
`;

const LeftMenu: FC = () => {
    return( 
        <Wrapper>  
            <Profile/>
            <LinksUnderProfile/>
        </Wrapper>
    );
};
export default LeftMenu;
