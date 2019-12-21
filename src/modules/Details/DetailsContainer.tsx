import React, { FC } from 'react';
import { fetchData } from '../../actions/fetchData';
import Details from './Details';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { IOffer } from '../../interfaces/data'

interface Params {
    id: string;
}

interface Props extends RouteComponentProps<Params> {
    offers: IOffer[]
}

const DetailsContainer: FC<Props> = (props) => {
    const offers = props.offers;
    //@ts-ignore
    const id = props.match.params.id;

    const offer = offers.find(offer => offer.id === id)
    if (!offer) {
        return null;
    }


    console.log(id)
    return <Details offer={offer} />;
};

const mapStateToProps = (state) => {
    return {
        offers: state.offers.data.offers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsContainer));
