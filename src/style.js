import styled from 'styled-components';
export const ContainerInkolorPremium = styled.div`
    display: flex;
    align-items: center;
    margin-top:80px;
    margin-left: 370px;

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
    position: relative;
    height: 350px;
    margin-top: 50px;
    z-index: 1;
    margin-left: 370px;

    .contact {
        color: #EC008C;
        font-size: 12px;
        letter-spacing: 2px;
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
        margin-left: 150px;
        margin-top: 70px;
        color: #515151;
        line-height: 30px;

        div {
            display: flex;
            align-items: center;
        }

        img {
            width: 20px;
            margin-right: 15px;
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

export const ContainerDiscoverRange = styled.div`
    display: flex;
    background: linear-gradient(327.12deg, #000000 8.82%, #434343 93.13%);
    flex-direction: column;
    justify-content: center;

    div {
        margin-left: 370px;
        max-width: 440px;
        margin-top: 150px;

        .type-toner {
            color: #FFD400;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
        }
        h2 {
            color: #FFF;
            font-weight: 900;
            font-size: 52px;
        }

        strong {
            display: block;
            font-weight:bold;
            margin-bottom: 25px;
        }
        strong,p {
            color: #FFF;
            font-size: 17px;
        }
    }
`