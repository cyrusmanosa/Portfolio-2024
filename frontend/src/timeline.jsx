import styled from '@emotion/styled'

function TimeLine() {
    const All = styled.div`
        box-sizing: border-box;
    `
    const Timeline = styled.div`
        position: relative;
        margin: 100px auto;
        :after{
            content: "";
            position: absolute;
            width: 6px;
            height: 100%;
            background-color: #fff;
            top: 0;
            margin-left: 10px;
            z-index: 1;
            animation: moveline 6s linear forwards;
        }
        @keyframes moveline{
            0%{
                height:0%;
            }
            100%{
                height:100%;
            }
        }
    `
    const Container = styled.div`
        padding: 10px 50px;
        position: relative;
        width: 50%;
        left: 0%;
        animation: movedown 1s linear forwards;
        @keyframes movedown{
            0%{
                opacity: 1;
                transform: translateY(-15%);
            }
            100%{
                opacity: 1;
                transform: translateY(0%);
            }
        }
    `
    const TextBox = styled.div`
        margin: 0;
        padding: 20px 30px;
        background-color: #fff;
        position: relative;
        border-radius: 6px;
        font-size: 15px;
        h2{
            margin:0;
        }
        smail{
            display: inline-block;
            margin-bottom: 5%;
        }
    `

    return (
        <All>
            <Timeline>
                {/* 1 */}
                <Container>
                    <TextBox>
                        <h2>SJM MO</h2>
                        <small>2018/09-2020/04</small>
                        <p>asdahdbsakjbdsakbdkjasdkjbaskj</p>
                    </TextBox>
                </Container>
                {/* 2 */}
                <Container>
                    <TextBox>
                        <h2>SJM MO</h2>
                        <small>2018/09-2020/04</small>
                        <p>asdahdbsakjbdsakbdkjasdkjbaskj</p>
                    </TextBox>
                </Container>
                {/* 3 */}
                <Container>
                    <TextBox>
                        <h2>SJM MO</h2>
                        <small>2018/09-2020/04</small>
                        <p>asdahdbsakjbdsakbdkjasdkjbaskj</p>
                    </TextBox>
                </Container>
            </Timeline>
        </All>
    );
}

export default TimeLine;