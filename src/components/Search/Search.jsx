import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    requestCharacterSearch,
    requestEpisodeSearch,
    requestLocationSearch,
    selectCategory,
} from '../../state/appSlice';
import { Categories } from '../../utils/Categories';
import { Wrapper } from './styles';

const Search = () => {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef();
    const activeCategory = useSelector(selectCategory);

    useEffect(() => {
        if (textValue) {
            switch (activeCategory) {
                case Categories.character: {
                    dispatch(requestCharacterSearch(textValue));
                    break;
                }
                case Categories.location: {
                    dispatch(requestLocationSearch(textValue));
                    break;
                }
                case Categories.episode: {
                    dispatch(requestEpisodeSearch(textValue));
                    break;
                }

                default:
            }
        }
    }, [activeCategory, dispatch, textValue]);

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <Wrapper>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={textValue}
                onChange={(e) => {
                    setTextValue(e.target.value);
                }}
            />
        </Wrapper>
    );
};

export default Search;
