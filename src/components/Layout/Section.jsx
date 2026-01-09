import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({ id, className, children, noPadding = false }) => {
    return (
        <section
            id={id}
            className={twMerge(
                'w-full scroll-mt-16',
                !noPadding && 'py-16 md:py-24',
                className
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
