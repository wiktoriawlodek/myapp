export interface IWorkspacesFilterButton {
    name: string;
    iconName: string;
    color: string;
}

const icons = {
    building: 'building',
    community: 'people',
    file: 'file',
    questionnaire: 'questionnaire'
};

const WorkspacesFilterButtons: IWorkspacesFilterButton[] = [
    {
        name: 'All',
        color: 'lightpink',
        iconName: ''

    },
    {
        name: 'SAS',
        color: 'lightgreen',
        iconName: icons.building
    },
    {
        name: 'SARL',
        color: 'lightblue',
        iconName: icons.building
    },
    {
        name: 'Secondary business',
        color: 'yellow',
        iconName: icons.building
    },
    {
        name: 'Communities',
        color: 'lightgray',
        iconName: icons.community
    },
    {
        name: 'POA',
        color: 'lightgray',
        iconName: icons.file,
    },
    {
        name: 'Survey',
        color: '#f1f1f1',
        iconName: icons.questionnaire
    },
    {
        name: '...',
        color: '#f1f1f1',
        iconName: ''
    }
];

export default WorkspacesFilterButtons;
