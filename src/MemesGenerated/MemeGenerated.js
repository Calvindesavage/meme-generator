import React from 'react'
import styles from './styles.module.css';
import { useClipboard } from 'use-clipboard-copy';
import { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';


export const MemeGenerated = () => {
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    const clipboard = useClipboard();

    const copylink = () => {
        clipboard.copy(url)
        setCopied(true);
    };
   
    

 
    return (
      <div className={styles.container}>
        <button className={styles.back} onClick={() => navigate('/')}>
            make more memes
        </button>
       
        {  url && <img alt='meme' src={url} /> }

        <button className={styles.copy} onClick={copylink}>
            {copied ? 'Link copied!' : 'Copy link'}
        </button>
        
      </div>
    );
};


