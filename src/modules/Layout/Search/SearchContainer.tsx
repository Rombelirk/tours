import React, { useEffect, FC, ReactChild } from 'react';
import { fetchData, fetchOptions } from '../../../actions/fetchData';
import Search from './Search'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
    fetchData: (string) => void;
    fetchOptions: (string) => void;
    options: any;
    children: ReactChild;
}

const SearchContainer: FC<Props> = ({ fetchData, fetchOptions, options }) => {
    return <Search options={options} onSearch={fetchData} onType={fetchOptions} />;
};

const mapStateToProps = (state) => {
    return {
        options: state.offers.options
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData, fetchOptions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);