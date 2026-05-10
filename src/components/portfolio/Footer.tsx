import { Box, Link, Typography } from "@mui/material";
import React from "react";
import type { UserInfoType } from "./types";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import styled from "@emotion/styled";

interface FooterProps {
    userInfo : UserInfoType
}

const StyledLink = styled(Link)(() => ({
    margin: '0px 8px'
}))
export const Footer: React.FC<FooterProps> = ({userInfo}:{userInfo: UserInfoType}) => {
    return (
        <section id="contact">
            <div style={{borderTop: "1px solid #ccc",paddingTop: '10px', textAlign: 'center'}}>
                <Typography variant="body1">
                    Connect with me on
                </Typography>
                <Box sx={{display: 'flex',justifyContent: 'center', my: 1}}>
                <StyledLink href={`mailto:${userInfo?.email}`}><Mail /></StyledLink>
                
                     <StyledLink href={userInfo?.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedIn />
                    </StyledLink>
              
                   <StyledLink href={userInfo?.github} target="_blank" rel="noopener noreferrer">
                       <GitHub /> 
                    </StyledLink>
                </Box>
                <Typography variant="body2">
                    © 2026 praveenbaira.com All rights reserved.
                </Typography>
            </div>
        </section>
    );
}