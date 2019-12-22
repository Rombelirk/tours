import React, { FC, ReactChild } from 'react';
import { fetchData, fetchOptions } from '../../../actions/fetchData';
import Search from './Search'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {
    fetchData: (string) => void;
    fetchOptions: (string) => void;
    options: any;
    children: ReactChild;
}

const SearchContainer: FC<Props> = ({ fetchData, fetchOptions, options, history }) => {
    const onSearch = (string) => {
        history.push("/" + string)
        fetchData(string)
    }
    return <Search options={options} onSearch={onSearch} onType={fetchOptions} />;
};

const mapStateToProps = (state) => {
    return {
        options: state.offers.options
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData, fetchOptions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchContainer));