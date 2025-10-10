import styled from "@emotion/styled";
import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [noEmail, setNoEmail] = useState(false);
    const [name, setName] = useState("");
    const [noName, setNoName] = useState(false);
    const [company, setCompany] = useState("");
    const [noCompany, setNoCompany] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        setNoEmail(!isEmailValid);
        setNoName(name === "");
        setNoCompany(company === "");

        if (isEmailValid && name !== "" && company !== "") {
            console.log("Form submitted:", { email, name, company });
        }
    }

    const handleFacebook = () => {
        // Handle Facebook login
    }

    const handleGoogle = () => {
        // Handle Google login
    }

    const handleGitHub = () => {
        // Handle GitHub login
    }

    return (
        <Container>
            <Box>
                <h2>Sign in</h2>
                <InputGroup>
                    {noEmail ? (
                        <>
                            <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                            <ErrorMessage>Please enter a valid email</ErrorMessage>
                        </>
                    ):(
                        <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    )}
                    
                    {noName ? (
                        <>
                            <input type="text" id="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                            <ErrorMessage>Please enter your name</ErrorMessage>
                        </>
                    ):(
                            <input type="text" id="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                    )}

                    {noCompany ? (
                        <>
                            <input type="text" id="company" value={company} placeholder="company Name" onChange={(e) => setCompany(e.target.value)} required />
                            <ErrorMessage>Please enter your company name</ErrorMessage>
                        </>
                    ):(
                        <input type="text" id="company" value={company} placeholder="company Name" onChange={(e) => setCompany(e.target.value)} required />
                    )}

                </InputGroup>
                <InputStn type="submit" onClick={handleSubmit}>Submit</InputStn>

                <OrArea>
                    <hr />
                    <p>OR</p>
                    <hr />
                </OrArea>

                <SnsGroup>
                    <FacebookButton onClick={handleFacebook} >Facebook</FacebookButton>
                    <GoogleButton onClick={handleGoogle} >Google</GoogleButton>
                    <GithubButton onClick={handleGitHub} >GitHub</GithubButton>
                </SnsGroup>
            </Box>
        </Container>
    );
}
export default Login;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const Box = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    width: 95%;
    max-width: 400px;
    text-align: center;
    h2 {
        font-weight: bold;
        margin-bottom: 1.5rem;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    input {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
    }
`

export const ErrInput = styled.div`
    padding: 0.5rem 1rem;
    border: 1px solid red;
    border-radius: 5px;
    font-size: 1rem;
`

export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
`

export const InputStn = styled.button`
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`

export const OrArea = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    hr {
        flex-grow: 1;
        margin: 0 20px;
        height: 0;
        border: none;
        border-top: 1px solid #ccc;
    }
`


export const SnsGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
        cursor: pointer;
    }
`

export const FacebookButton = styled.button`
    background-color: #3b5998;
    &:hover {
        background-color: #2d4373;
    }
`

export const GoogleButton = styled.button`
    background-color: #db4437;
    &:hover {
        background-color: #c1351d;
    }
`

export const GithubButton = styled.button`
    background-color: #333;
    &:hover {
        background-color: #1a1a1a;
    }
`