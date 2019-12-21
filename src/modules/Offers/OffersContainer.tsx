import React, { useEffect } from 'react';
import { fetchData } from '../../actions/fetchData';
import Offers from './Offers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const OffersContainer = ({ fetchData, data }) => {

    return <Offers data={data} />;
};

const mapStateToProps = (state) => {
    return {
        data: state.offers.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);
