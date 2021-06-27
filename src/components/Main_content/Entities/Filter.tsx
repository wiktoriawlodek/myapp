import {Dispatch, FC, SetStateAction} from "react";
import styled from "styled-components";
import {IFilter} from "./Entities";

const Wrapper = styled.div`
    select{
      margin-left:10px;
    }
    input{
      margin-left: 10px;
    }
`;

const Row = styled.div`
    margin-top:10px;
`;

interface Props {
    options: IFilter[];
    setOptions: Dispatch<SetStateAction<IFilter[]>>;
}

const Filter: FC<Props> = (props) => {

    const addNew = () => {
        const newOption: IFilter = {
            id: `${Math.random()}`,
            field: 'Company',
            operator: 'Is',
            value: ''
        };

        props.setOptions([...props.options, newOption]);
    }

    const removeOption = (optionId: string) => {
        const newOptions = props.options.filter(option => option.id != optionId);
        props.setOptions(newOptions);
    }

    return (
        <Wrapper>
            {props.options.map(option => (
               <div data-id={option.id}>
                   <button onClick={() => removeOption(option.id)}>X</button>
                   Where
                   <select>
                       <option value='Status'>Company</option>
                       <option value='Company'>Status</option>
                   </select>
                   <select>
                       <option value='is'>Is</option>
                       <option value='contains'>Contains</option>
                   </select>
                   <input placeholder='Value' />
               </div>
            ))}
            <Row>
                <button onClick={addNew}>Add item</button>
            </Row>
        </Wrapper>
    );
};

export default Filter;
