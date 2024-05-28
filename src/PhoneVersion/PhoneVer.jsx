import styled from '@emotion/styled'
import Clock from './Clock';
import PPart1 from './PPart1';
import PPart2 from './PPart2';
import PPart3 from './PPart3';
import PPart4 from './PPart4';
import PPart5 from './PPart5';

function phone() {
    const Bg = styled.div`
        background-color:#fff;
        margin:0 auto;
        width: 85%;
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

