import {FC, useEffect,useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {getUsers} from "../../actions/usersActions";
import ProfileHeader from "./Header/Header";
import ProfileInformations from "./Panel_informations/Profile_informations";
import ProfileProposals from "./Profile_proposals/Profile_proposals";
import ProfileInternalReviews from "./Internal_reviews/Internal_reviews";
import ProfileAmountOfFees from "./Amount_of_fees/Amount_of_fees";
import ProfileAdditionalInfo from "./Header/Additional_info";


const Wrapper = styled.div`
    background-color: white;
    width:800px;
    border-radius: 5px;
    margin: 0px auto 0px 30px;
`; 

const Profilepage: FC = () => {
    const dispatch = useDispatch();

    type GetUsers = ReturnType<typeof getUsers>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    });

    const [editMode, setEditMode] = useState(false);


    return (
        <Wrapper>
            <ProfileHeader editMode={editMode} setEditMode={setEditMode}/>
            <ProfileAdditionalInfo/>
            <ProfileInformations editMode={editMode}/>
            <ProfileProposals editMode={editMode}/>
            <ProfileInternalReviews editMode={editMode}/>
            <ProfileAmountOfFees editMode={editMode}/>
        </Wrapper>
    );
}

export default Profilepage;
