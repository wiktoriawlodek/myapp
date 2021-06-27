import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../../../../reducers";
import {IUsersReducer} from "../../../../reducers/usersReducers";
import {Plus} from "react-bootstrap-icons";
import {ISingleUser} from "../../../../entities/users";

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const Select = styled.select`
  border: 2px solid lightgray;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 3px 6px;
  margin-left: 5px;
`;

interface Props {
    onAdd: (selectedUser: ISingleUser) => void;
}

const UserDropdown: FC<Props> = (props) => {
    const users = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [selectedUser, setSelectedUser] = useState<ISingleUser|null>(null);

    if (users && selectedUser == null) {
        setSelectedUser(users.usersList[0]);
    }

    const selectHandler = (ev: FormEvent<HTMLSelectElement>) => {
        const target = ev.target as HTMLSelectElement;
        const userSelection = users.usersList.filter(user => user.id == +target.value);

        setSelectedUser(userSelection[0]);
    }

    const submitHandler = () => {
        if (selectedUser) {
            props.onAdd(selectedUser);
        }
    }

    return (
        <Wrapper>
            <Select onChange={selectHandler}>
                {users.usersList.map(user => {
                    return (<option value={user.id}>{user.name}</option>)
                })}
            </Select>
            <Button onClick={submitHandler}>
                <Plus />
                Add
            </Button>
        </Wrapper>
    );
}

export default UserDropdown;
