import {FC, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  padding: 8px 14px;
  border-radius: 8px;

  button{
    background-color:rgba(255, 255, 255, 0.3); 
    border:none;
    min-width: 30px;
    border-radius: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  color: Gray;
  float:right;
`;

const Content = styled.div`
  display: flex;
  gap:10px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  background-color:white;
  padding: 14px;
  border: 1px solid lightgray;
  border-radius: 5px; 
  width:30%;
`;

const CellIcon = styled.div`
  margin-bottom: 8px;
  img{
    width:30px;
    height:30px;
  }
`;

const CellTitle = styled.div`
  font-size:18px;
  margin-bottom: 15px;

`;

const CellBody = styled.div`
  color:gray;
  font-size:15px;
`;

const WorkspacesCollapse: FC = () => {
    const [hidden, setHidden] = useState<boolean>(false);
    const handleCollapse = () => setHidden(!hidden);

    return (
        <Wrapper>
            <Header>
                <Title>Start working on corporate matters</Title>
                <button onClick={handleCollapse}> {hidden ? 'Show' : 'Hide'}</button>
            </Header>
            {!hidden &&
                <Content>
                    <Cell>
                        <CellIcon><img src='./images/entity.png' /></CellIcon>
                        <CellTitle>Explore your entities</CellTitle>
                        <CellBody>Take a few minutes to look at the most important elements and specificities of your entities</CellBody>
                    </Cell>
                    <Cell>
                        <CellIcon><img src='./images/structure.png' /></CellIcon>
                        <CellTitle>Structure the ownership</CellTitle>
                        <CellBody>Get a clear view of the ownership by looking at the relations between individuals and entities.</CellBody>
                    </Cell>
                    <Cell>
                        <CellIcon><img src='./images/calendar.png' /></CellIcon>
                        <CellTitle>Define your calendar</CellTitle>
                        <CellBody>Prepare future events by creating detailed plans around the life of your entity.</CellBody>
                    </Cell>
                </Content>
            }
        </Wrapper>
    );
}

export default WorkspacesCollapse;
