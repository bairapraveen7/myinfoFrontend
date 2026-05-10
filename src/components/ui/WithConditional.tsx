import React from "react";

export const WithConditional = ({ condition, children }: { condition: boolean; children: React.ReactNode }) => {
    if (!condition) {
        return null;
    }
    return <>{children}</>;
};