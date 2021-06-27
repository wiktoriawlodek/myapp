import {FC,useEffect} from "react";
import styled from "styled-components";
import WorkspacesHeader from "./Workspaces_header/Workspaces_header";
import WorkspacesCollapse from "./Workspaces_collapse/Workspaces_collapse"
import WorkspacesLatestUpdates from "./Workspaces_latest_updates/Workspaces_latest_updates";
import {useDispatch} from "react-redux";
import {getWorkspacesUpdates} from "../../../actions/workspacesUpdatesActions";


const Wrapper = styled.div`
  border-radius:5px;
`;

const Workspaces: FC = () => {
    const dispatch = useDispatch();

    type GetWorkspacesUpdates = ReturnType<typeof getWorkspacesUpdates>;

    useEffect(() => {
        dispatch<GetWorkspacesUpdates>(getWorkspacesUpdates());
    });

    return (
        <Wrapper>
            <WorkspacesHeader/>
            <WorkspacesCollapse/>
            <WorkspacesLatestUpdates/>
        </Wrapper>
    );
}
export default Workspaces;

