import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import {useCustomEventListener} from "react-custom-events";
import {EditMode} from "../../../data/ProfileAdditionalInfoData";

const Wrapper = styled.div`
  padding-left:15px;
  padding-bottom:30px;
  
    h2{
    font-weight: 600;
    margin-top:30px;
    font-size: 17px;
    margin-bottom:20px;
    color:#4154a7;
  }
`;

const Table = styled.table`
  width: 100%;
  & > thead {
    border-bottom: 1px solid lightgray;
  }
  & th {
    text-align: left;
    color: #4154a7;
    font-weight:600;
    font-size:15px;
  }
  tr{
      line-height:25px;
      font-size:13px;
      color:gray;
  }
  & .header{
    font-size: 18px;
 
  }
  & tbody{
    button{
        border:none;
        background-color: white;
    }
  }
`;

const Input = styled.input`
  border: 1px solid lightgrey;
`;

interface IFee {
    year: string;
    cost_center: string;
    total_amount: string;
    law_firm: string;
   
}

interface Props {
    editMode?: boolean;
}

const ProfileAmountOfFees: FC<Props> = (props) => {
    const data: IFee[] = [
        {
            year: '2019',
            cost_center: 'CS 153',
            total_amount: '3 500€',
            law_firm: 'Clifford chance',
           
        },
        {
            year: '2018',
            cost_center: 'CS 153',
            total_amount: '9 500€',
            law_firm: 'Linklaters',
        },
        {
            year: '2017',
            cost_center: 'CS 47',
            total_amount: '10 500€',
            law_firm: 'Linklaters',
        },
        {
            year: '',
            cost_center: 'CS 153',
            total_amount: '18 500€',
            law_firm: 'Linklaters',
        },
        {
            year: '',
            cost_center: 'CS 32',
            total_amount: '15 500€',
            law_firm: 'Linklaters',
        },
    ];
    const emptyRecord = {
        year: '',
        cost_center: '',
        total_amount: '',
        law_firm: '',
    };

    const [proposals, setFee] = useState<IFee[]>(data);
    const [proposalsCopy, setFeeCopy] = useState<IFee[]>(data);
    const [proposalRecord, setFeeRecord] = useState<IFee>({...emptyRecord});

    const inputHandler = (ev: FormEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;

        setFeeRecord({
            ...proposalRecord,
            [target.name]: target.value
        });
    };

    const submitHandler = () => {
        setFee([
            ...proposals,
            proposalRecord
        ]);
        setFeeRecord({...emptyRecord});
    };

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setFeeCopy([...proposals]);
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setFee([...proposalsCopy]);
    });

    return (
        <Wrapper>
            <h2>Amount of Fees</h2>
            <Table>
                <>
                    <tr className="header">
                        <th>Year</th>
                        <th>Cost center</th>
                        <th>Total amount</th>
                        <th>Law firm</th>
                    </tr>
                </>
                <tbody>
                    {proposals.map(proposal => {
                        return (
                            <tr>
                                <td>{proposal.year}</td>
                                <td>{proposal.cost_center}</td>
                                <td>{proposal.total_amount}</td>
                                <td>{proposal.law_firm}</td>
                            </tr>
                        );
                    })}

                    {props.editMode &&
                        (
                            <>
                                <tr>
                                    <td><Input name='name' value={proposalRecord.year} onInput={inputHandler} /></td>
                                    <td><Input name='entity' value={proposalRecord.cost_center} onInput={inputHandler} /></td>
                                    <td><Input name='location' value={proposalRecord.total_amount} onInput={inputHandler} /></td>
                                    <td><Input name='expertise' value={proposalRecord.law_firm} onInput={inputHandler} /></td>
                                </tr>
                                <tr>
                                    <td colSpan={6}>
                                        <button onClick={submitHandler}>+ Add</button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </Table>
        </Wrapper>
    );
}

export default ProfileAmountOfFees;


