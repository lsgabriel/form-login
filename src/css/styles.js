import styled from "styled-components";
import BackgroundImg from '../assets/bg.png';

export const Container = styled.div`
    display:flex;flex-direction:row;
    @media only screen and (max-width: 450px){flex-direction:column;}

    form{
        margin-left:110px;width:40vw;
        @media only screen and (max-width: 450px){margin-left:0.50rem;width:92vw;}

        .form-article{
            margin-top:60px;
            display:flex;flex-direction: column;
            width:30vw;line-height: 18px;

            @media only screen and (max-width: 450px){width:100vw;margin-top:30px;}

            h1{
                font-weight: 700;font-size:36px;color:#1E293B;
            }

            p{
                font-size:16px;color:#475569;margin-bottom:36px;
            }

            label{font-weight:600;font-size:16px;color:#1E293B;}

            span{
                display: flex;justify-content:space-between;
                @media only screen and (max-width: 450px){width:85vw;}

                a{
                    font-weight:600;color:#7C3AED;text-decoration:none;

                    &:hover{text-decoration:underline;}
                }
            }

            input[type='email'], input[type='password']{
                margin-block: 10px;width:384px;
                border:solid 1px #E2E8F0;
                border-radius:0.25rem;
                padding: 16px 12px 16px 12px;

                &:hover{
                    border-color: #7C3AED;
                }

                ::placeholder,::-webkit-input-placeholder {
                 color: #94A3B8;
                }

                @media only screen and (max-width: 450px){width:80vw;}
            }

            button{
                margin-top: 5px;
                font-size:16px;
                background-color: #7C3AED;
                font-weight: 700;color:white;

                width:25.6rem;border:none;
                border-radius:0.25rem;
                padding: 16px 12px 16px 12px;

                &:hover{background-color:#9F67FF;}
                @media only screen and (max-width: 450px){width:87vw;}
            }

            .new-account{
                a{
                    font-weight:600;color:#7C3AED;text-decoration:none;

                    &:hover{text-decoration:underline;}   
                }
            }
        }

        img{margin-top: 32px;}
    }

    .image{
        background-image: url(${BackgroundImg});width:53vw;height:100vh;

        @media only screen and (max-width: 450px){display:none;}
    }
`;