import {FC} from "react";
import styled from "styled-components";
import {IWorkspacesUpdate} from "../../../../entities/workspaces-update";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 0.5rem 0.75rem;
  margin-bottom: 10px;

`;

const Title = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  color:#4154a7;
`;

const Content = styled.div`
  font-size: 15px;
  margin-bottom: 10px;

`;

const Information = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const Company = styled.div``;

const Updated = styled.div``;

interface WorkspacesLatestUpdatesItemProps {
    update: IWorkspacesUpdate;
    className?: string;
}

const WorkspacesLatestUpdatesItem: FC<WorkspacesLatestUpdatesItemProps> = (props) => {
    return (
        <Wrapper >
            <Title >{props.update?.name}</Title>
            <Content >{props.update?.body}</Content>
            <Information >
                <Company>{props.update?.type}</Company>
                 • 
                <Updated>Updated 3 days ago by Glenna Reichert</Updated>
            </Information>
        </Wrapper>
    );
}

export default WorkspacesLatestUpdatesItem;
