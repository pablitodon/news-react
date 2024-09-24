/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styles from './styles.module.css'
import { useTheme } from '../context/ThemeContext';

interface Props {
    keywords:string;
    setKeyWords:(keywords:string) => void; 
}

const Search = ({ keywords, setKeyWords}:Props) => {
    const{isDark} = useTheme(); 
    return (
        <div  className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
            <input 
            type="text" 
            value={keywords} 
            onChange={(e) => setKeyWords(e.target.value)}
            className={styles.input}
            placeholder='Россия сегодня'
            />
        </div>
    );
};

export default Search;