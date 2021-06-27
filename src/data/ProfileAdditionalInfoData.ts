export interface ICell {
    name: string;
}

export interface ISection {
    name: string;
    cells: ICell[]
}

export const EditMode = {
    EnteredEditMode: 'profile-entered-edit-mode',
    Saved: 'profile-saved',
    Discarded: 'profile-discarded',
};

const sections: ISection[] = [
    {
        name: 'Expertise',
        cells: [
            {
                name: 'Mergers and acquisitions'
            }
        ]
    },
    {
        name: 'Specialties',
        cells: [
            {
                name: 'Cross border operation'
            },
            {
                name: 'Transaction over 500M€/$'
            }
        ]
    },
    {
        name: 'Admission to practice law',
        cells: [
            {
                name: 'Paris bar association'
            },
            {
                name: 'Tunisian bar association'
            }
        ]
    },
    {
        name: 'Counties',
        cells: [
            {
                name: 'Tunisia'
            }
        ]
    }
];

export default sections;
