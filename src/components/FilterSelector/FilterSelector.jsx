import { StyledSelect } from './styles';

const FilterSelector = ({ onChange, children }) => {
    return <StyledSelect onChange={onChange}>{children}</StyledSelect>;
};

export default FilterSelector;
