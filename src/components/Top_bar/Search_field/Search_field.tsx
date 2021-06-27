import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.fieldset`
 width: 35%;
  height: 30px;
  margin: auto;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 5px;
  align-items: center;
`;

const Input = styled.input`
   width: 90%;
  height: 28px;
  /* border-radius: 5px; */
  border:none;
  text-align: center;
  font-family: Tahoma;
`;

const SearchIcon = styled.button`
 background: url('./icons/search.svg') no-repeat;
  width: 30px;
  height:30px;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  border:none;
  :hover {
    cursor: pointer;
  }  
`;

const SearchField: FC = () => {
    return (
        <>
            <Wrapper>
                <Input placeholder='Search Legalcluster...' />
                <SearchIcon />
            </Wrapper>
        </>
    );
};

export default SearchField;
