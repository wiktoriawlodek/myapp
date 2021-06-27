import {FC, useState} from "react";
import styled from "styled-components";

import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/usersReducers';
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    width:100%;
    height:152px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    #Account{
        margin-left:10px;
        margin-top:8px;
        font-size: 16px;
    }
`;
const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 20px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    img{
        margin: 5px 5px 0px 4px;
        height:30px;
        border-radius:50px;
        vertical-align:middle;

    }
    p{
        font-size: 16px;
        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
        font-size: 15px;
    }
    #NameAndLink{
        margin-left:15px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

const PrivacyAndSettings = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Privacy,#Settings{
        display:flex;
        align-items:center;
        margin-top: 10px;
        margin-left: 15px;
        img{
            height:25px;
            margin-right:20px;
        }
        a{
            text-decoration:none;
            color: black;
        }
    }
`;

const Account: FC = () => {
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

	return (
        
        <Wrapper>
            <p id="Account">Account</p>
            <Profile>
                <img src={currentUser?.photo.thumbnailUrl} alt='Profile picture' />
                <div id="NameAndLink">
                    <p>{currentUser?.name}</p>
                    <a href="/profile">See profile</a>
                </div>
            </Profile>

            <PrivacyAndSettings>
                <div id="Privacy">
                    <img src="./icons/privacy.png"></img>
                    <a href="privacy">Privacy</a>
                </div>
                <div id="Settings">
                    <img src="./icons/settings.png"></img>
                    <a href="settings">Settings</a>
                </div>
            </PrivacyAndSettings>

        </Wrapper>
	)
}

export default Account;