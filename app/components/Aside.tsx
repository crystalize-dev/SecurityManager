'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Icon from './Icon/Icon';

const Aside = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <motion.aside
            layoutId="aside"
            animate={{ x: 0 }}
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            className={`flex h-full w-80 flex-col border-r border-solid border-black/10 bg-white`}
        >
            <header className="flex h-16 max-h-16 w-full items-center border-b border-solid border-black/10 bg-white px-4 py-2">
                header
                <Icon
                    icon="close"
                    onClick={() => setToggle(false)}
                    className="ml-auto"
                />
            </header>
            Aside
        </motion.aside>
    );
};

export default Aside;
