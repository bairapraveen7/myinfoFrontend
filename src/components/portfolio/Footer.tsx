import { Typography } from "@mui/material";
import React from "react";
import type { UserInfoType } from "./types";

interface FooterProps {
    userInfo : UserInfoType
}
export const Footer: React.FC<FooterProps> = ({userInfo}:{userInfo: UserInfoType}) => {
    return (
        <section id="contact">
            <div style={{borderTop: "1px solid #ccc", padding: "20px", textAlign: "center"}}>
                <Typography variant="body1">
                    If you have any questions or would like to get in touch, feel free to reach out!
                </Typography>
                <Typography variant="body2">
                    Contact: <a href={`mailto:${userInfo?.email}`}>{userInfo?.email}</a>
                </Typography>
                <Typography variant="body2">
                    LinkedIn: <a href={userInfo?.linkedin} target="_blank" rel="noopener noreferrer">
                        {userInfo?.linkedin}
                    </a>
                </Typography>
                <Typography variant="body2">
                    GitHub: <a href={userInfo?.github} target="_blank" rel="noopener noreferrer">
                        {userInfo?.github}
                    </a>
                </Typography>
                <Typography variant="body2">
                    © 2026 My Portfolio. All rights reserved.
                </Typography>
            </div>
        </section>
    );
}