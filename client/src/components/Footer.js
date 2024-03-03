import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaPhone,
    FaMailBulk,
    FaWhatsapp,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    Wrapper,
    Row,
    Column,
    Title,
    Tautan,
    Subscription,
    AppLogo,
    AppIcon,
    SubHeading,
} from "./FooterStyle";

const Footer = () => {
    return (
        <FooterContainer>
            <SocialLogo to="/">
                <h1>Rental Cars</h1>
            </SocialLogo>
            <Wrapper>
                <Row>
                    <Column>
                        <Subscription>
                            <AppLogo
                            >
                                <AppIcon
                                    src={`/Footer/google.png`}
                                />
                            </AppLogo>
                            <AppLogo
                            >
                                <AppIcon
                                    src={`/Footer/appstore.png`}
                                />
                            </AppLogo>
                            <SubHeading>
                                Also download Our apps. Now that's it
                                available on Playstore and App store
                            </SubHeading>
                            <Title>Payment Security</Title>
                            <SocialIcon
                                src={`/Footer/belanja.png`}
                            />
                        </Subscription>
                    </Column>
                    <Column>
                        <Title>Contact Us</Title>
                        <Tautan style={{ cursor: "default" }}>
                            <FaPhone /> (022)5465787
                        </Tautan>
                        <Tautan
                        >
                            <FaMailBulk /> rentalcars@gmail.com
                        </Tautan>
                        <Tautan
                        >
                            <FaWhatsapp /> +62 81148787577
                        </Tautan>
                    </Column>
                    <Column>
                        <Title>For more information</Title>
                        <Tautan
                        >
                            FAQ
                        </Tautan>
                        <Tautan
                        >
                            Contact
                        </Tautan>
                        <Tautan
                        >
                            Terms and Condition
                        </Tautan>
                        <Tautan
                        >
                            Privacy and Policy
                        </Tautan>
                        <Tautan
                        >
                            Refund Policy
                        </Tautan>
                    </Column>
                </Row>
            </Wrapper>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>
                        © Copyright 2024, Rental Cars. All
                        Rights Reserved
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink
                            aria-label="Youtube"
                        >
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
