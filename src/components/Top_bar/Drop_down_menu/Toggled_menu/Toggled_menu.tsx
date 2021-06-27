import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import styled from "styled-components";
import Account from "./Account/Account";


const Wrapper = styled.div`
    width:250px;
    height:500px;
    background-color:#fff;
    border: 1px solid #e9e9e9;
    border-radius: 0px 0px 2px 2px;
    box-shadow: 0px 2px 2px #bdbdbd;
    display:flex;
    flex-direction:column;

    #filterInput{
        width:260px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
            border: 1px solid lightgray;
            margin: 3px 10px;
            height: 30px;
            width: 85%;
            border-radius:4px;
        }
    }
`;

const InnerWarpper = styled.div`
    width:96%;
    height:300px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    overflow-y:scroll;
    margin-left:8px;
    margin-top:3px;
    a{
        text-decoration:none;
        color:black;
    }
    
`;

const MenuItem = styled.div`
    width:90%;
    height: 40px;
    margin-left: 5px;
    margin-top: 5px;
    display:flex;
    justify-content:start;
    align-items:center;
    font-size: 15px;
    font-weight:400;
    img{
        margin:2px 7px 2px 0px;
        vertical-align:middle;
        width: 22px;
        height:22px;
    }
    p{
        margin: 3px 3px;
        font-size: 16px;
    }
`;

const ToggledMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

	return (
        <Wrapper>
            <div id="filterInput">
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            </div>
            <InnerWarpper>
                <MenuItem><p>Platform</p></MenuItem>
                {
                    'Home'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem ><img src='./icons/house2.png'/><a href="/">Home</a></MenuItem>
                }
                {
                    'Publication'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem>  <img src='./icons/publications.png'/> <a href="publication">Publication</a></MenuItem>
                }
                {
                    'People'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/people.png'/> <a href="people">People</a> </MenuItem>
                }
                {
                    'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="entities">Entities</a></MenuItem>
                }
                {
                    'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/administration.png'/> <a href="administration">Administration</a></MenuItem>
                }
                <MenuItem><p>Workspaces</p></MenuItem>
                {
                    'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="client_contract">Client contract</a></MenuItem>
                }
                {
                    'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="supplier_contract">Supplier contract</a></MenuItem>
                }
                {
                    'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="corporate">Corporate</a></MenuItem>
                }
                {
                    'Group norms'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/people.png'/> <a href="group_norms">Group norms</a> </MenuItem>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="real_estate_contracts">Real estate contracts</a></MenuItem>
                }
            </InnerWarpper>
            <Account/>
        </Wrapper>
	)
}
export default ToggledMenu;