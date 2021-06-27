import {FC, FormEvent, useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {IPhoto} from "../../../entities/photo";
import {getPhoto} from "../../../actions/photoActions";
import useDropdown from "react-dropdown-hook";
import Filter from "./Filter";
import _ from "lodash";

const Wrapper = styled.div`

`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        border:none;
    };
    .pageTitle{
        font-size: 21px;
        color:#4154a7;
        margin-bottom: 10px;
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: ${(props: {displayType: number}) => props.displayType == 0 ? 'repeat(4, 1fr)' : '1fr'};
    gap: 10px;

`;

const Card = styled.div`
    display:flex;
    border-radius: 10px;
    height:80px;
    background-color: #fff;
    img{
        width:100px;
    }
    .textContainer{
        margin-top:5px;
        margin-left:5px;
    };
    .entityName{
        font-size: 15px;
        font-weight:bold;
        color: #4154a7;
        margin-bottom: 20px;
    };
    .entityAddress{
        color: gray;
        font-size:13px;
    };
`;

const Filters = styled.div`
    .innerFilterWrapper{
        margin-top:10px;
        display:flex;
        justify-content: space-between;
        margin-bottom: 10px;
    };
    button{
        background-color:white;
        border:none;
        color: #9c9c9c;
        margin-right:15px;
        padding:5px;
        font-size:14px;
    }
`;

const TitleFilter = styled.input`
    border: 1px solid lightgrey;
    background: white url("/icons/search.png") no-repeat;
    background-position-x: calc(100% - 10px);
    background-position-y: center;
    border-radius:5px;
    background-size: 14px 14px;
    padding: 5px 10px;
    width: 250px;
    color: grey;
    display:flex;
    height: 15px;
    &:focus {
        outline: 1px solid black;
    };
`;

interface Entity {
    name: string;
    address: string;
    photo: IPhoto;
}
export interface IFilter {
    id: string;
    field: string;
    operator: string;
    value: string;
}
const Entities: FC = () => {

    const companyName = [ 'Subsid Corp ltd', 'World Company SAS'];
    const street = ['Caracas 1050'];
    const city = ['Distrio Capital'];
    const country = ['Venezuela'];

    const [sort, setSort] = useState('AZ');
    const [initialized, setInitialized] = useState(false);
    const [displayType, setDisplayType] = useState<number>(0);
    const [filtersChanged, setFiltersChanged] = useState(false);
    const [titleFilter, setTitleFilter] = useState('');
    const [filterRef, filtersOpen, toggleFilters] = useDropdown();
    const [entities, setEntities] = useState<Entity[]>([]);
    const [options, setOptions] = useState<IFilter[]>([]);
    const [genericEntities, setGenericEntities] = useState<Entity[]>([]);

    useEffect(() => {
        const fillEntities = async () => {
            const ent: Entity[] = [];
            for (let i = 1; i <= 24; i++) {
                const entity: Entity = {
                    name: `${_.sample(companyName)}`,
                    address: `${street}, ${city}, ${country}`,
                    photo: await getPhoto(i),
                };
                ent.push(entity);
            }
            const compare = (a: Entity, b: Entity) => {
                if (a.name[0] < b.name[0]) return -1;
                if (a.name[0] > b.name[0]) return 1;
                return 0;
            }
            ent.sort(compare);
            setEntities(ent);
            setGenericEntities(ent);
            setInitialized(true);
        }

        if (!initialized) {
            fillEntities();
        }

        if (filtersChanged) {
            applyFilters();
            setFiltersChanged(false);
        }
    });

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    const toggleSort = () => {
        setSort(sort == 'AZ' ? 'ZA' : 'AZ');
        setFiltersChanged(true);
    };
    const handleTitleFilterInput = (ev: FormEvent) => {
        const target = ev.target as HTMLInputElement;
        setTitleFilter(target.value);
        setFiltersChanged(true);
    };
   
    const applyFilters = () => {
        let collection = [...genericEntities];
        if(titleFilter.length > 0) {
            collection = collection.filter(entity => entity.name.toLowerCase().includes(titleFilter.toLowerCase()));
        }
        if(sort == 'ZA') {
            collection = collection.reverse();
        }
        setEntities([...collection]);
    };

    return (
        <Wrapper>
            <Header>
                <div className='pageTitle'>Entities</div>
                <div className='displayTypeButtonsContainer'>
                    <button onClick={() => setDisplayType(0)}> {displayType == 0 ? 'Mosaic' : 'Mosaic'}</button> 
                    <button onClick={() => setDisplayType(1)}> {displayType == 1 ? 'List' : 'List'}</button>
                </div>
            </Header>

            <Filters>
                <div>
                    <button onClick={toggleSort} >{sort == 'AZ' ? (<div/>) : (<div/>)} Sort</button>
                    <button  onClick={toggleFilters}>Filter</button>
                    <button onClick={copyLink}> Share</button>
                </div>

                <div className="innerFilterWrapper">
                    <div> {filtersOpen && <Filter options={options} setOptions={setOptions} />}</div>
                    <TitleFilter onInput={handleTitleFilterInput} placeholder='Search...' />
                </div>
            </Filters>

            <Content displayType={displayType}>
                {entities.map(entity => (
                    <Card>
                        <img className='entityImage' src={entity.photo.thumbnailUrl} />
                        <div className="textContainer">
                            <div className="entityName">{entity.name}</div>
                            <div className="entityAddress">{entity.address}</div>
                        </div>
                    </Card>
                ))}
            </Content>
        </Wrapper>
    );
}
export default Entities;
