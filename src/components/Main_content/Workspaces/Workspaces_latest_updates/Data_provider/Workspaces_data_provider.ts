import {IWorkspacesUpdate} from "../../../../../entities/workspaces-update";

export class WorkspacesDataProvider {
    private readonly dataSet: IWorkspacesUpdate[] | null;
    private static titleFilter?: string;
    private static typeFilter: string = 'All';

    constructor(works: IWorkspacesUpdate[] | null) {
        this.dataSet = works;
    }

    titleFilter(title: string) {
        WorkspacesDataProvider.titleFilter = title;
    }
  
    typeFilter(typeFilter: string) {
        if (typeFilter !== '...') {
            WorkspacesDataProvider.typeFilter = typeFilter;
        }
    }

    getFiltered(): IWorkspacesUpdate[] | null {
        let result = this.dataSet;

        if (result === null) return null;

        if (WorkspacesDataProvider.titleFilter) {
            result = result.filter(entry => entry.name.toLowerCase().includes(WorkspacesDataProvider.titleFilter?.toLowerCase() ?? ''));
        }

        if (WorkspacesDataProvider.typeFilter != 'All' && WorkspacesDataProvider.typeFilter != '') {
            result = result.filter(entry => entry.type.toLowerCase() == WorkspacesDataProvider.typeFilter.toLowerCase());
        }
        return [...result];
    }
}
