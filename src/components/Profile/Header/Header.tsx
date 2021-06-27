import React, {Dispatch, FC, SetStateAction, useState} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {IUsersReducer} from "../../../reducers/usersReducers";
import {Link} from "react-router-dom";
import {Briefcase, Chat, FileEarmarkRichtext, Pencil} from "react-bootstrap-icons";
import {emitCustomEvent} from "react-custom-events";
import {EditMode} from "../../../data/ProfileAdditionalInfoData";

const Wrapper = styled.div`
  display: flex;
  font-size:15px;
  flex-direction: column;
  border-radius:5px;
  padding: 20px;
  border: 1px solid lightgray;
  a{
      text-decoration:none;
      color: #4154a7;
      font-size:13px;
      margin-top:8px;
  }
`;

const TopButtons = styled.div`
  align-self: flex-end;
  width: fit-content;
  display: flex;
  margin-bottom: 5px;
`;

const Button = styled.button`
  gap: 4px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: none;
  font-size:13px;
  color:gray;
  a{
      text-decoration:none;
  }
`;

const UserInnerWrapper = styled.div`
  height: fit-content;
  display:flex;
  flex-direction: row;
    .contanier{
        margin-left:30px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        button{
            background-color: white;
            border:none;
        }
    }
    .userInfo{
        display:flex;
        flex-direction: column;
        gap:10px;
    }
    .editmode{
       margin-bottom: 10px;
       gap:20px;
       padding:5px;
    }
`;

const ProfilePictureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    align-self: center;
`;

const ProfilePicture = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%;
`;

const Input = styled.input`
    border: 1px solid black;
    padding: 0 10px;
    height: 25px;
`;

interface ProfileHeaderProps {
    className?: string;
    editMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
}

interface IUserCopy {
    [key: string]: string;
    name: string;
    companyName: string;
    city: string;
    email: string;
    status: string;
    phone: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = (prop) => {
    
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const makeUserCopy = (): IUserCopy|null => {
        console.log(currentUser);
        if (!currentUser) return null;

        return {
            name: currentUser.name,
            companyName: currentUser.company.name,
            city: currentUser.address.city,
            email: currentUser.email,
            phone: currentUser.phone,
            status: 'Partner'
        };
    };

    const [user, setUser] =  useState<IUserCopy|null>(() => makeUserCopy());
    const [userCopy, setUserCopy] = useState<IUserCopy|null>(() => makeUserCopy());

    if (user === null && currentUser) {
        setUser(() => makeUserCopy());
    }

    const saveChanges = () => {
        prop.setEditMode(false);
        emitCustomEvent(EditMode.Saved);
    }

    const discardChanges = () => {
        if (!currentUser) return;
        if (userCopy) {
            setUser({...userCopy});
        }
        prop.setEditMode(false);
        emitCustomEvent(EditMode.Discarded);
    }

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (user) {
            const newUserData = {...user};
            newUserData[target.name] = target.value;
            setUser(newUserData);
        }
    };

    const changeEditMode = () => {
        if (!user) return;
        const entersEditMode = !prop.editMode;
        if (entersEditMode) {
            setUserCopy({...user});
            emitCustomEvent(EditMode.EnteredEditMode);
        }
        prop.setEditMode(!prop.editMode);
    };

    return (
        <Wrapper className={prop?.className}>
            <TopButtons>
                <Button>
                    <Chat/> Message
                </Button>
                <Button>
                    <FileEarmarkRichtext />
                    Create a request
                </Button>
                <Button>
                    <Briefcase />
                    Add to a cluster
                </Button>
                <Button>
                    <Link to='/'>X</Link>
                </Button>
            </TopButtons>

            <UserInnerWrapper>
                <ProfilePictureWrapper>
                    <ProfilePicture src={currentUser?.photo.thumbnailUrl}/>
                    <Link to='#'>See profile</Link>
                </ProfilePictureWrapper>
              
                <div className="contanier">
                    <div className="userInfo">
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.name} name='name' onInput={handleInput} />):(user?.name)
                            }
                        </div>
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.companyName} name='companyName' onInput={handleInput}/>):(user?.companyName)
                            }
                        </div>
                        <div/>
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.city} name='city' onInput={handleInput}/>):(user?.city)
                            }
                        </div>
                      
                        <div>
                        {prop.editMode ?
                            (<Input value={user?.status} name='status' onInput={handleInput}/>):(user?.status)
                        }
                        </div>
                    </div>

                    <div>
                        <div className="editmode">
                            {prop.editMode ?
                                (
                                    <>
                                        <button onClick={saveChanges}>Save</button>
                                        <button onClick={discardChanges}>Discard</button>
                                    </>
                                ) : (
                                    <button onClick={changeEditMode}>
                                        <Pencil />
                                    </button>
                                )
                            }
                        </div>

                        <div>
                            {prop.editMode ?
                                (<Input value={user?.email} name='email' onInput={handleInput}/>):(user?.email)
                            }
                        </div>
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.phone} name='phone' onInput={handleInput}/>):(user?.phone)
                            }
                        </div>
                    </div>
                </div>
            </UserInnerWrapper>
        </Wrapper>
    );
}

export default ProfileHeader;
