import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import defaultSections, {ICell, ISection} from "../../../data/ProfileAdditionalInfoData";
import {Pencil} from "react-bootstrap-icons";

const Wrapper = styled.div`
  padding: 10px;
  .buttons{
      display:flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      button{
        margin-right: 5px;
        border:none;
        background-color: white;
    }
  }
`;

const InnerWrapper = styled.div`
  margin-bottom: 10px;
`;

const InnerWrapperTitle = styled.div`
  color: gray;
  font-size: 21px;
  margin: 20px 0px;
`;

const InnerWrapperBody = styled.div`
  display: flex;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  flex-wrap: nowrap;
  background-color:rgba(184,222,255,0.2);
  color:#78a5cc;
;
  font-size:15px;
  button{
      background-color:rgba(184,222,255,0.3);
      color: #78a5cc;
      border-radius: 50%;
      border: 1px solid #78a5cc;
      width:23px;
      height:23px;
  }
`;

const AddButton = styled.button`
  background-color:rgba(184,222,255,0.3);
  color: #78a5cc;
  width:29px;
  height:29px;
  border: 1px solid #78a5cc;
  border-radius: 50%;
  margin-right: 5px;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
`;

const ProfileAdditionalInfo: FC = () => {
    const [sectionsCopy, setSectionsCopy] = useState<ISection[]>([...defaultSections]);
    const [sections, setSections] = useState<ISection[]>([...defaultSections]);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [addMode, setAddMode] = useState<string|boolean>(false);

    const editModeHandler = () => {
        const entersEditMode = !editMode;

        if (entersEditMode) {
            setSectionsCopy([...sections]);
        } else {
            setAddMode(false);
        }

        setEditMode(!editMode);
    }

    const saveHandler = () => {
        setEditMode(false);
        setAddMode(false);
    };

    const discardHandler = () => {
        setSections([...sectionsCopy]);
        setEditMode(false);
        setAddMode(false);
    };

    const addHandler = (sectionName: string) => {
        if (addMode == sectionName) {
            const input = document.querySelector(`input[name=${sectionName}]`) as HTMLInputElement;

            if (!input.value) return;

            const newCell: ICell = {
                name: input.value
            };


            setSections([...sections.map(section => {
                if (section.name != sectionName) {
                    return section;
                }

                return {
                    name: section.name,
                    cells: [...section.cells, newCell]
                };
            })]);

            setAddMode(false);
            return;
        }
        setAddMode(sectionName);
    }

    const deleteHandler = (e: FormEvent<HTMLButtonElement>, sectionName: string, cellName: string) => {
        setSections([...sections.map(section => {
            if (section.name != sectionName) {
                return section;
            }

            return {
                name: section.name,
                cells: section.cells.filter(cell => {
                    return cell.name != cellName;
                })
            };
        })]);
    };


    return (
        <Wrapper>
            <div className="buttons">
                {editMode ?
                    (
                        <>
                            <button onClick={discardHandler}>Discard</button>
                            <button onClick={saveHandler}>Save</button>
                            
                        </>
                    ) :
                    (
                        <>
                            <button onClick={editModeHandler}>
                                <Pencil />
                            </button>
                        </>
                    )
                }
            </div>
            {sections.map(section => (
                <InnerWrapper>
                    <InnerWrapperTitle>{section.name}</InnerWrapperTitle>
                    <InnerWrapperBody>
                        {section.cells.map(cell => (
                            <Cell>
                                {cell.name}
                                {editMode &&
                                    (<button onClick={(e) => deleteHandler(e, section.name, cell.name)}>X</button>)
                                }
                            </Cell>
                        ))}
                        {editMode &&
                            (
                                <>
                                    {addMode == section.name &&
                                        (<Input name={section.name} />)
                                    }
                                    <AddButton onClick={() => addHandler(section.name)}>+</AddButton>
                                </>
                            )
                        }
                    </InnerWrapperBody>
                </InnerWrapper>
            ))}
        </Wrapper>
    );
}

export default ProfileAdditionalInfo;
