import styled from '@emotion/styled'
import Clock from './Clock';
import PPart1 from './Part1';
import PPart2 from './Part2';
import PPart3 from './Part3';
import PPart4 from './Part4';
import PPart5 from './Part5';

function phone() {
    const Bg = styled.div`
        background-color:#fff;
        margin:0 auto;
        width: 100%;
        @media(min-width:400px){
            width: 90%;
        }
    `
    const PartStyle = styled.div`
        margin:7% 0;
    `

    return (
        <>
            <Bg>
                <Clock />
                <PartStyle>
                    <PPart1 />
                </PartStyle>
                {/* part2 */}
                <PartStyle>
                    <PPart2 />
                </PartStyle>
                {/* part 3 */}
                <PartStyle>
                    <PPart3 />
                </PartStyle>
                {/* part 4 */}
                <PartStyle>
                    <PPart4 />
                </PartStyle>
                {/* part 5 */}
                <PartStyle>
                    <PPart5 />
                </PartStyle>
            </Bg>
        </>
    );
}
export default phone;

