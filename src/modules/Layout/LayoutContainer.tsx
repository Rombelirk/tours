import React, { FC, ReactChild } from 'react';
import { fetchData } from '../../actions/fetchData';
import Layout from './Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
    fetchData: (string) => void;
    children: ReactChild;
}

const LayoutContainer: FC<Props> = ({ fetchData, ...props }) => {
    return <Layout {...props} onSearch={fetchData} />;
};

const mapStateToProps = (state) => {
    return {
        data: state.offers.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
