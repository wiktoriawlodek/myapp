import {FC, FormEvent, useRef, useState} from "react";
import styled from "styled-components";
import {Plus} from "react-bootstrap-icons";

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const Input = styled.input`
  border: 1px solid lightgrey;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  padding: 3px 6px;
  margin-left: 8px;
`;

interface Props {
    onAdd: (name: string) => void;
}

const AttachmentForm: FC<Props> = (props) => {
    const [attachmentName, setAttachmentName] = useState<string|null>(null);
    const inputRef = useRef<HTMLInputElement|null>(null);

    const handleInput = (ev: FormEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;

        if (target.files && target.files[0]) {
            setAttachmentName(target.files[0].name);
        }
    };

    const handleSubmit = () => {
        if (attachmentName) {
            props.onAdd(attachmentName);
        }

        if (inputRef?.current?.value) {
            inputRef.current.value = '';
        }
    }

    return (
        <Wrapper>
            <Input type='file' ref={inputRef} onChange={handleInput} />
            <Button onClick={handleSubmit}>
                <Plus />
                Add
            </Button>
        </Wrapper>
    );
}

export default AttachmentForm;
