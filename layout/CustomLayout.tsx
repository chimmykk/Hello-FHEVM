import React, { ReactNode } from 'react';

type CustomLayoutProps = {
    children: ReactNode;
};

export const CustomLayout = ({ children }: CustomLayoutProps) => {
    return (
        <div className='relative'>
            {children}
        </div>
    );
};