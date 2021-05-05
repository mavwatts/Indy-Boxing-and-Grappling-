import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';




const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About IBG</FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>Classes</FooterLink>
                                <FooterLink to='/signin'>Payment Methods</FooterLink>
                                <FooterLink to='/signin'>Weekly Schedule</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Merchandise</FooterLinkTitle>
                                <FooterLink to='/signin'>Purchase</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick='toggleHome'>
                            IBG
                        </SocialLogo>
                        <WebsiteRights>IBG © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/IndyBoxingandGrappling' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
