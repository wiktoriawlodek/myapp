import { FC } from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {IUsersReducer} from "../../../reducers/usersReducers";
import {IState} from "../../../reducers";


const Wrapper = styled.div`
    width: 250px;
    height: 250px;
    background-color: #ffff;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    margin: 0px auto;
    box-shadow: 0px 3px 4px lightgray;
`;

const ProfileWindow = styled.div`
   width:100%;
    height:248px;
    border-radius:5px 5px 0px 0px;
    display:flex;
    justify-content:center;
    background-color:#fff;
    align-items:center;
    border-bottom: 2px solid #f5f7f9;
    img{
        margin-top:5px;
        width:75px;
        height:75px;
        border-radius:50%;
    }
    flex-direction: column;
`;

const Name = styled.div`
    margin-top:10px;
    display:flex;
    font-family: Tahoma;
    font-weight: 600;
    font-size: 14px;
    color: #4154a7;
`;
const Occupation = styled.div`
display:flex;
    font-family: Tahoma;
    margin-top:10px;
    font-size:12.5px;
    color:#a5a8ac;
`;
const ProfileButtons = styled.div`
    padding: 3px 0px;
    font-family: Tahoma;
    background-color:#fff;
    display:flex;
    width:100%;
    /* flex-direction: row; */
`;

const Icon = styled.div`
 img{
        width:25px;
        height:25px;
        margin-left:20px;
    }
    width:25%;
`;

const Text = styled.div`
    width:50%;
    height:30px;
    align-items:center;
    font-size: 12px;
    display:flex;
`;
const Button=styled.button`
    margin: auto 10px auto 0px;
    width:13%;
    height:75%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15%;
    outline:none;
    img{
        width:16px;
        height:16px;
    }
    :hover{
        cursor: pointer;
    }
`;

const ColoredLine = ({color} : {color: string}) => (
    <hr
        style={{
            height: 5,
            width: '99.4%'
        }}
    />
);

const Profile: FC = () => {

    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    return( 
            <Wrapper>      
                <ProfileWindow>
                    <img src={currentUser?.photo.thumbnailUrl} alt='Profile picture' />
                    <Name>
                        <p>{currentUser?.name}</p>
                    </Name>
                    <Occupation>
                        <p>Job title - Company</p>
                    </Occupation>
                </ProfileWindow>        
                
                <ColoredLine color="black" />

                <ProfileButtons> 
                    <Icon><img src="./icons/network.png" alt='network icon'></img></Icon>
                    <Text>Your Network</Text>
                    <Button><img src="./icons/network.svg" alt='network'></img></Button>
                </ProfileButtons>

                <ProfileButtons>
                        <Icon><img src="./icons/publications.svg" alt='publications icon'></img></Icon>
                        <Text>Your Publications</Text>
                        <Button><img src="./icons/plus.svg" alt='plus'></img></Button>
                </ProfileButtons>

           </Wrapper> 
    );
};
export default Profile;