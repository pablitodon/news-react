/* eslint-disable react/prop-types */
import styles from './styles.module.css'


const Search = ({ keywords, setKeyWords}) => {

    return (
        <div className={styles.search} >
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