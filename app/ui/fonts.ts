/* Next.js automatically optimizes fonts in the application when you use the next/font module. 
It downloads font files at build time and hosts them with your other static assets. 
This means when a user visits your application, there are no additional network requests for fonts which would impact performance.*/

//Adding a primary font
import { # } from 'next/font/google'; //import Google font named # (Inter for example)
export const # = #({ subsets: ['##'] }); //import the ## subset (latin for example) (https://fonts.google.com/knowledge/glossary/subsetting)