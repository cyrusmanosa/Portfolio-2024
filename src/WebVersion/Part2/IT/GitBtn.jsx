import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Axios from "axios";
import styled from '@emotion/styled';

function MyDialog() {
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
    };

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />} sx={{borderTop: '3px solid #000',borderBottom: '3px solid #000'}} aria-controls="panel2-content" id="panel2-header">
                    <Typography component="span" sx={{ fontSize: '150%', fontFamily: '"Paytone One", "Roboto", sans-serif', fontStyle: 'normal'}}>
                        Github Repositories List
                    </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{borderBottom: '3px solid #000'}}>
                <Typography sx={{margin: 0}}>
                    <GithubDropDownArea>
                        <GithubItem>
                            <h2>Project or Note</h2>
                            {gitData.map((repo) => (
                                <div key={repo.name}>
                                    <button onClick={() => HandleOpenUrl(repo.html_url)} variant="contained">{repo.name}</button>
                                </div>
                            ))}
                        </GithubItem>
                        <GithubItem>
                            <h2>Organizations</h2>
                            <div>
                                <button onClick={() => HandleOpenUrl("https://github.com/ECC200")} variant="contained">Care Connect</button>
                            </div>
                            <div>
                                <button onClick={() => HandleOpenUrl("https://github.com/Ecc-asplay")} variant="contained">Asplay</button>
                            </div>
                            <div>
                                <button onClick={() => HandleOpenUrl("https://github.com/DistributedOnlineShop")} variant="contained">Distributed Online Shop</button>
                            </div>
                        </GithubItem>
                    </GithubDropDownArea>
                </Typography>
                </AccordionDetails>

            </Accordion>
        </>
    );
}

const GithubDropDownArea = styled.div`
    display:grid;
    grid: auto / auto auto;
    justify-content: center;
    column-gap: 10%;
`

const GithubItem = styled.div`
    width:115%;
    h2{
        text-align: center;
        padding: 0;
        margin: 0;
    };
    button{
        margin: 2% 0;
        font-size: 120%;
        border-radius: 5px;
        width:100%;
    }
`

export default MyDialog;