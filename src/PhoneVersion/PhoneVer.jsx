import styled from '@emotion/styled'
import Clock from './Clock';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';

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
                    <Part1 />
                </PartStyle>
                {/* part2 */}
                <PartStyle>
                    <Part2 />
                </PartStyle>
                {/* part 3 */}
                <PartStyle>
                    <Part3 />
                </PartStyle>
                {/* part 4 */}
                <PartStyle>
                    <Part4 />
                </PartStyle>
                {/* part 5 */}
                <PartStyle>
                    <Part5 />
                </PartStyle>
            </Bg>
        </>
    );
}
export default phone;

