import {FC, useEffect} from 'react';
import styled from 'styled-components';
import TopBar from '../components/Top_bar/Top_bar';
import LeftMenu from "../components/Left_menu/LeftSidebar";
import Center from '../components/Main_content/Main_content';
import { getUsers } from '../actions/usersActions';
import { useDispatch } from "react-redux";
import { getLatestPublications } from "../actions/publicationsActions";
import { getWorks } from "../actions/worksActions";

const Wrapper = styled.section`
    background-color: #f7f7f7;
`;

const Content = styled.div`
    display:flex;
    max-width: 100%;
    min-height:1800px;
    height: fit-content;
    justify-content:center;
`;

const MainPage: FC = () => {
    const dispatch = useDispatch();
    type GetUsers = ReturnType<typeof getUsers>;
    type GetLatestPublications = ReturnType<typeof getLatestPublications>;
    type GetWorks = ReturnType<typeof getWorks>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetLatestPublications>(getLatestPublications());
        dispatch<GetWorks>(getWorks());
    });
    
    return ( 
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Center/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;

