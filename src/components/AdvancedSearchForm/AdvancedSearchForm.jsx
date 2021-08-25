import { useEffect, useRef, useState } from 'react';
import FilterSelector from '../FilterSelector/FilterSelector';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectCategory,
    requestCharacters,
    requestLocations,
    requestEpisodes,
} from '../../state/appSlice';

import { Filters } from '../../utils/Filters';

import { Wrapper } from './styles';
import { Categories } from '../../utils/Categories';

import { StyledTextInput } from '../TextInput/StyledTextInput';

export const AdvancedSearchForm = () => {
    const [name, setName] = useState('');
    const [filter1, setfilter1] = useState('');
    const [filter2, setfilter2] = useState('');
    const [filter3, setfilter3] = useState('');

    const [filterCollection, setFilterCollection] = useState([]);

    const inputRef = useRef();

    const dispatch = useDispatch();

    const activeCategory = useSelector(selectCategory);

    useEffect(() => {
        setName('');
        setfilter1('');
        setfilter2('');
        setfilter3('');
        if (activeCategory) {
            switch (activeCategory) {
                case Categories.character:
                    setFilterCollection(Filters.characters);
                    break;
                case Categories.location:
                    setFilterCollection(Filters.locations);
                    break;
                case Categories.episode:
                    setFilterCollection(Filters.episodes);
                    break;
                default:
                    break;
            }
        }
    }, [activeCategory]);

    useEffect(() => {
        const charQueryTemplate = `/?name=${name}&status=${filter1}&species=${filter2}&gender=${filter3}`;
        const locQueryTemplate = `/?name=${name}&type=${filter1}&dimension=${filter2}`;
        const epiQueryTemplate = `/?name=${name}&episode=${filter1}`;
        switch (activeCategory) {
            case Categories.character:
                dispatch(requestCharacters(charQueryTemplate));
                break;
            case Categories.location:
                dispatch(requestLocations(locQueryTemplate));
                break;
            case Categories.episode:
                dispatch(requestEpisodes(epiQueryTemplate));
                break;
            default:
                break;
        }
    }, [dispatch, activeCategory, name, filter1, filter2, filter3]);

    const renderOption = (e) => {
        return (
            <option key={e.tag} value={e.value}>
                {e.tag}
            </option>
        );
    };

    return (
        <Wrapper>
            <StyledTextInput
                ref={inputRef}
                type="text"
                value={name}
                placeholder="Search..."
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></StyledTextInput>
            {filterCollection.opt1 && (
                <FilterSelector
                    value={filter1}
                    onChange={(e) => {
                        setfilter1(e.target.value);
                    }}
                    placeholder={filterCollection.opt1.name}
                >
                    <option value="">{filterCollection.opt1.name}</option>
                    {filterCollection.opt1.data.map((e) => renderOption(e))}
                </FilterSelector>
            )}
            {filterCollection.opt2 && (
                <FilterSelector
                    value={filter2}
                    onChange={(e) => setfilter2(e.target.value)}
                >
                    <option value="">{filterCollection.opt2.name}</option>
                    {filterCollection.opt2.data.map((e) => renderOption(e))}
                </FilterSelector>
            )}
            {filterCollection.opt3 && (
                <FilterSelector
                    value={filter3}
                    onChange={(e) => setfilter3(e.target.value)}
                >
                    <option value="">{filterCollection.opt3.name}</option>
                    {filterCollection.opt3.data.map((e) => renderOption(e))}
                </FilterSelector>
            )}
        </Wrapper>
    );
};
