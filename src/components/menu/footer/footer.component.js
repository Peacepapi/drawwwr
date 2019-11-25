import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import classes from './footer.css';

export const Footer = () => {
    return (
        <footer>
            <p>Built by Pier</p>
            <a href="https://github.com/Peacepapi" target='_blank' rel="noopener noreferrer">
                <GitHubIcon className={classes.icon}/>
            </a>
            <a href="https://www.linkedin.com/in/pier-yos-a22983a1/" target='_blank'rel="noopener noreferrer">
                <LinkedInIcon className={classes.icon}/>
            </a>
        </footer>
    )
}