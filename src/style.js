import styled from 'styled-components';
export const ContainerInkolorPremium = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:80px;

    div {
        max-width: 342px;

        span {
            font-size: 12px;
            font-weight:700;
            letter-spacing: 2px;
            color: #515151;
        }

        h2 {
            font-weight: 900;
            font-size: 80px;
            color: #000000;
        }

        p {
            font-size: 16px;
            color: #515151;
            font-weight: 600;
        }

        button {
            margin-top: 60px;
        }
    }

    img {
        width: 800px;
    }
`

export const ContainerDiscount = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;

    .contact {
        color: #EC008C;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: bold;
    }

    h2 {
        font-weight: 900;
        font-size: 52px;
        color: #000000;
    }
    p {
        font-size: 16px;
        line-height: 25px;
        color: #515151;
        max-width:420px;
    }

    div {
        position: relative;
    }

    .desc-discount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 150px;
        margin-top: 70px;
        color: #515151;
        line-height: 30px;

        svg {
            color: #EC008C
        }
    }

    .porcentage-discount {
        position: absolute;
        top:50px;
        right: 140px;
        z-index: -1;
        font-size: 260px;
        color: #F5F5F5;
        font-weight: 900;
        overflow: hidden;
    }
`