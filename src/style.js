import styled from 'styled-components';

const responsiveMobile = 'max-width: 1000px';

export const ContainerInkolorPremium = styled.div`
    display: flex;
    margin-top:80px;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    @media(${responsiveMobile}) {
        flex-direction: column;
         img {
             margin-top: 20px;
         }
    }

    .header-inkolor {
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

            @media(${responsiveMobile}) {
                font-size: 60px;
            }
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
    div {
        img {
            width: 100%;
        }
    }
`

export const ContainerDiscount = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 1;
    margin-bottom: 200px;

    @media(${responsiveMobile}) {
        flex-direction: column;
    }

    .contact {
        color: #EC008C;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;

        @media(${responsiveMobile}) {
            margin-top: 30px;
            display: block
        }
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

    .title-discount {
        margin-left: 50px;

    }

    .desc-discount {
        display: flex;
        flex-direction: column;
        margin-left: 150px;
        margin-top: 70px;
        color: #515151;
        line-height: 30px;

        @media(${responsiveMobile}) {
            margin-left: inherit;
        }

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
        left: 330px;
        top: 110px;
        z-index: -1;
        font-weight: 1000;
        font-size: 260px;
        color: #F5F5F5;
        font-weight: 900;
        overflow: hidden;

        @media(${responsiveMobile}) {
            display:none;
        }
    }
`

export const ContainerDiscoverRange = styled.div`
    display: flex;
    background: linear-gradient(327.12deg, #000000 8.82%, #434343 93.13%);
    position: relative;
    height: 700px;
    z-index: -1;

    @media(${responsiveMobile}) {
        flex-direction: column;
        height: inherit;
    }

    .desc-discover {
        margin-left: 370px;
        max-width: 440px;
        margin-top: 150px;

        @media(${responsiveMobile}) {
            margin-left: inherit;
            margin-bottom: 150px;
        }


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

            @media(${responsiveMobile}) {
              font-size: 38px;
            }
        }

        strong {
            display: block;
            font-weight:bold;
            margin-bottom: 25px;
        }
        strong, p {
            color: #FFF;
            font-size: 17px;
        }
    }
    .img-discover {
        @media(${responsiveMobile}) {
            display:none;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const ContainerVisitUs = styled.div`
    display: flex;
    //margin-left: 370px;
    justify-content: center;

    @media(${responsiveMobile}) {
        flex-direction: column;
    }
    .desc-visit {
        max-width: 441px;
        margin-top: -100px;

        h2 {
            color:  #EC008C;
            font-size: 52px;
            font-weight: 900;

            @media(${responsiveMobile}) {
                font-size: 32px;
            }
        }

        strong {
            display: block;
            font-weight:bold;
            margin-bottom: 25px;
        }

        strong, p {
            color: #515151;
            font-size: 18px;
        }
    }
    .img-phone {
        @media(${responsiveMobile}) {
            display:none;
        }

        z-index: 1;
        margin-top: -140px;
    }

    .carac-visit {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 190px;
        height: 190px;
        margin-left: -280px;
        margin-top: 250px;
        background: #EC008C;
        border-radius: 50%;
        font-size: 26px;
        font-weight: 700;

        @media(${responsiveMobile}) {
            display: none;
        }

        .item-carac {
            display: flex;
            width: 300px;

            span {
                text-align: right;
                display: block;
            }
            div {
                display:flex;
                justify-content: center;
                align-items: center;
                margin-left: 20px;
                border: 3px solid #FFF;
                border-radius: 100%;
                width: 60px;
                height: 60px;
                img {
                    width: 80px;
                    height: 20px;
                }
            }
            & + .item-carac {
                margin-top: 20px;
            }
        }

    }
`

export const ContainerToner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .img-tonner {
        img {
            width: 100%;

            @media(${responsiveMobile}) {
                display: none;
            }

        }
    }
    .desc-toner {
        width: 480px;
        span {
            font-size: 12px;
            font-weight:700;
            letter-spacing: 2px;
            color: #EC008C;
            text-transform: uppercase;
            @media(${responsiveMobile}) {
                display:block;
                margin-top: 25px;
            }
        }

        h2 {
            font-weight: 900;
            font-size: 52px;
            color: #000000;
            @media(${responsiveMobile}) {
                font-size: 32px;
            }

        }

        .carac-toner{
            div {
                display: flex;
                    margin-top: 20px;
            }

            p {
                color: #515151;
                margin-left: 15px;
                font-size: 16px;
                font-weight: 400;
            }
        }
    }
`
export const ContainerBePartOf = styled.div`
    display:flex;
    justify-content: center;
    background: #F5F5F5;
    padding-top: 30px;

    @media(${responsiveMobile}) {
        flex-direction: column;
    }

    .desc-bepart {
        display: flex;
        flex-direction:column;
        justify-content: center;
        width: 500px;

        @media(${responsiveMobile}) {
            width: inherit;
            align-items: center;
        }

        h2 {
            color:  #000;
            font-size: 52px;
            font-weight: 900;

            @media(${responsiveMobile}) {
                font-size: 32px;
                text-align: center;
            }
        }

        p, strong {
            color: #515151;
            margin-top: 15px;
            font-size: 16px;
            font-weight: 400;

            @media(${responsiveMobile}) {
                text-align: center;
            }
        }

        strong {
            font-weight: bold;
        }

        @media(${responsiveMobile}) {
            img {
                display: none;
            }
        }
    }

    form{
        width: 490px;
        margin-left: 50px;

        @media(${responsiveMobile}) {
            width: 200px;
        }

        label {
            color: #343A40;
            font-size: 16px;
            margin-top: 20px;
            display:block;
        }

        button {
            width: 100%;
            background: #00954D;
            color: #FFF;
            border-radius: 10px;
            padding: 15px;
            margin-top: 20px;

            &:hover {

            }
        }
    }
`