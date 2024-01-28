import React, { RefObject, useEffect, useState, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, isOpen: boolean, closeFunction: () => void) => {
    	useEffect(() => {
        	const handleClickOutside = (event: MouseEvent) => {
            	if (ref.current && !ref.current.contains(event.target as Node) && isOpen) {
                	setTimeout(() => {
                    	closeFunction();
                	}, 10);
            	}
        	};
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    	    }, [ref, isOpen]);
};

export default useOutsideClick;