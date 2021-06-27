import React, {FC, useEffect, useState} from "react";
import styled  from "styled-components";
import WorkspacesLatestUpdatesItem from "./Workspaces_latest_updates_item";
import WorkspacesFilterButton from "./Workspaces_filter_button";
import WorkspacesFilterButtons from "../../../../data/WorkspacesFilterButtons";
import {useSelector} from "react-redux";
import {IState} from "../../../../reducers";
import {IWorkspacesUpdatesReducer} from "../../../../reducers/workspacesUpdatesReducers";
import {WorkspacesDataProvider} from "./Data_provider/Workspaces_data_provider";
import {IWorkspacesUpdate} from "../../../../entities/workspaces-update";

const Wrapper = styled.div`
  margin: 15px;
  width:97%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h2{
    font-size: 18px;;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
`;

const FilterButtons = styled(Filters)`
  margin-top: 8px;
  justify-content: space-between;
`;

const TitleFilter = styled.input`
  border: 1px solid lightgray;
  background: #fff url("/icons/search.png") no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: center;
  background-size: 14px 14px;
  padding: 5px 30px 5px 10px;
  width: 200px;
  color: gray;
`;

const Content = styled.div`
  margin-top: 1rem;
`;

const WorkspacesLatestUpdates: FC = () => {
    const { workspacesUpdates } = useSelector<IState, IWorkspacesUpdatesReducer>(state => ({
        ...state.workspacesUpdates
    }));

    const workspacesUpdatesDataProvider = new WorkspacesDataProvider(workspacesUpdates);
    const [titleFilter, setTitleFilter] = useState('');
    const [workspacesUpdatesData, setWorkspacesUpdatesData] = useState<IWorkspacesUpdate[] | null>(() => workspacesUpdatesDataProvider.getFiltered());
  
    useEffect(() => {
      if (workspacesUpdatesData === null) {
          const wudp = new WorkspacesDataProvider(workspacesUpdates);
          setWorkspacesUpdatesData(wudp.getFiltered());
      }
    })

    const handleTitleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value);
        workspacesUpdatesDataProvider.titleFilter(event.target.value);
        setWorkspacesUpdatesData(workspacesUpdatesDataProvider.getFiltered());
    }
    const handleButtonFilterClick = (event: React.MouseEvent, typeName: string) => {
        workspacesUpdatesDataProvider.typeFilter(typeName);
        setWorkspacesUpdatesData(workspacesUpdatesDataProvider.getFiltered());
    }

    return (
        <Wrapper>
            <Header>
                <h2>Latest updates</h2>
                <Filters>
                    <TitleFilter onInput={handleTitleFilterInput} placeholder='Search...' />
                </Filters>
            </Header>
            <FilterButtons>
                {WorkspacesFilterButtons.map(button => (
                    <WorkspacesFilterButton name={button.name} color={button.color} iconName={button.iconName} onClick={handleButtonFilterClick} />
                ))}
            </FilterButtons>
            <Content>
                {workspacesUpdatesData?.slice((4 * 1), 4 * 3).map(entry => {
                    return (
                        <WorkspacesLatestUpdatesItem key={entry.id} update={entry} />
                    )
                })}
            </Content>
        </Wrapper>
    );
}
export default WorkspacesLatestUpdates;