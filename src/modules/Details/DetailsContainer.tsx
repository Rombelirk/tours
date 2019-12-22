import React, { FC, useEffect } from 'react';
import { fetchOffer } from '../../actions/fetchData';
import Details from './Details';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { IExtendedOffer } from '../../interfaces/data'


interface Params {
    id: string;
}

interface Props extends RouteComponentProps<Params> {
    offer: IExtendedOffer;
}

const DetailsContainer: FC<Props> = (props) => {
    const offer = props.offer;
    const id = props.match.params.id;

    //@ts-ignore    
    useEffect(() => { props.fetchOffer(id) }, []);

    if (!offer) {
        return null;
    }

    return <Details offer={offer} />;
};

const mapStateToProps = (state) => {

    return {
        offer: state.offers.currentOffer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchOffer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsContainer));
