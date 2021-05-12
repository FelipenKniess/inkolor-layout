import styled from 'styled-components';

export const ContainerInkolorPremium = styled.div`
    display: flex;
    position: relative;
    margin-top:80px;
    align-items: center;
    justify-content: center;
    //margin-left: 370px;
    margin-bottom: 100px;

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
    }
`

export const ContainerDiscoverRange = styled.div`
    display: flex;
    background: linear-gradient(327.12deg, #000000 8.82%, #434343 93.13%);
    flex-direction: row;
    position: relative;
    height: 700px;
    z-index: -1;

    .desc-discover {
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
        strong, p {
            color: #FFF;
            font-size: 17px;
        }
    }
    .img-discover {
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
    .desc-visit {
        max-width: 441px;
        margin-top: -100px;

        h2 {
            color:  #EC008C;
            font-size: 52px;
            font-weight: 900;
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
        z-index: 1;
        margin-top: -140px;
    }

    .carac-visit {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 490px;
        height: 490px;
        margin-left: -280px;
        margin-top: 250px;
        background: #EC008C;
        border-radius: 50%;
        font-size: 26px;
        font-weight: 700;

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

    .desc-toner {
        width: 480px;
        span {
            font-size: 12px;
            font-weight:700;
            letter-spacing: 2px;
            color: #EC008C;
            text-transform: uppercase;
        }

        h2 {
            font-weight: 900;
            font-size: 52px;
            color: #000000;
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

export const ContainerQuality = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .desc-quality {
        margin-left: 100px;

        h2 {
            font-weight: 900;
            font-size: 52px;
            color: #000000;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: #515151;
        }

        .items-quality {
            display: grid;

            span {
                color: #515151;
                font-size: 18px;
            }

            .item-quality {
                width: 200px;
            }
        }
    }


    .image-quality {
        img {
            border-radius: 50%;
        }
    }
`
