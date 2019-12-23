import React, { FC, useEffect } from 'react';
import { fetchData } from '../../actions/fetchData';
import Offers from './Offers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { IData } from '../../interfaces/data';

interface Params {
    searchString: string;
}
interface Props extends RouteComponentProps<Params> {
    data: IData;
    fetchData: Function;
}

const OffersContainer: FC<Props> = ({ data, match, fetchData }) => {
    const { searchString } = match.params;

    const loadDataIfSearchStringProvided = () => {
        if (searchString) {
            fetchData(searchString);
        }
    };

    useEffect(loadDataIfSearchStringProvided, []);

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OffersContainer));
