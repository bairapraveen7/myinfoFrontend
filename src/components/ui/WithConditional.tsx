import React from "react";

export const WithConditional = ({ condition, children }) => {
    if (!condition) {
        return null;
    }
    return <>{children}</>;
};