import styled from '@emotion/styled'
import Clock from './Clock';
import PPart1 from './PPart1';
import PPart2 from './PPart2';
import PPart3 from './PPart3';
import PPart4 from './PPart4';

function phone() {
    const Bg = styled.div`
        background-color:#fff;
        margin:0 auto;
        width: 90%;
    `

    return (
        <>
            <Bg>
                <Clock />
                <PPart1 />
                <PPart2 />
                <PPart3 />
                <PPart4 />
            </Bg>
        </>
    );
}
export default phone;

