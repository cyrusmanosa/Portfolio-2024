import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "axios";
import styled from '@emotion/styled';

function MyDialog() {
    const [open, setOpen] = useState(false);
    const [gitData, setGitData] = useState([]);
    const apiMyselfUrl = "https://api.github.com/users/cyrusmanosa/repos";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(apiMyselfUrl);
                const filteredData = response.data
                    .filter((repo) => repo.private === false)
                    .filter((repo) => repo.owner.login === "cyrusmanosa")
                    .filter((repo) => repo.name !== "cyrusmanosa")
                    .filter((repo) => repo.fork === false)
                    .map((repo) => ({
                        name: repo.name,
                        html_url: repo.html_url,
                    }));
                setGitData(filteredData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const HandleOpenUrl = (url) => {
        window.open(url, "_blank");
        setOpen(false);
    };


    return (
        <>
            <GitBtn onClick={() => setOpen(true)}>
                Github Repositories List
            </GitBtn>

            <Dialog open={open} onClose={() => setOpen(false)} className="DialogStyle">
                <DialogOutline>
                    <DialogTitle style={{ fontWeight: 900, fontSize: 20, margin: 0 }}>Cyrus Man</DialogTitle>
                    <DialogContent className='DialogContentStyle'>
                        {gitData.map((repo) => (
                            <div key={repo.name}>
                                <Button onClick={() => HandleOpenUrl(repo.html_url)} variant="contained">
                                    {repo.name}
                                </Button>
                            </div>
                        ))}

                        <DialogTitle style={{ fontWeight: 900, fontSize: 20, margin: 0 }}>Organizations</DialogTitle>
                        <Button onClick={() => HandleOpenUrl("https://github.com/ECC200")} variant="contained">
                            Care Connect
                        </Button>
                    </DialogContent>
                </DialogOutline>
            </Dialog>
        </>
    );
}

const GitBtn = styled(Button)`
    display: flex;
    text-align: center;
    width: 100%;
    background-color: #fff;
    padding: 1%;
    font-size: 130%;
    border-radius: 0;
    text-transform: capitalize;
    border-top: 2.5px solid #000;
    border-bottom: 2.5px solid #000;
    color:#000;
    font-family: "Paytone One", sans-serif;
    font-style: normal;
`;
const DialogOutline = styled.div`
    width: 400px;
    display:flex;
    flex-direction: column;
    justify-content: center;
`

export default MyDialog;
