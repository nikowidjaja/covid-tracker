import React from 'react'
import PropTypes from 'prop-types';
import { overlay, img, active } from './style.module.css';

class Loader extends React.Component {

    render() {
        const { loader } = this.props;
        return (
            <div className={`${overlay} ${(loader) ? active : ``}`}>
                {(loader) ?
                    <img src={require('./loader.svg')} alt="" className={img} />
                    :
                    ''
                }
            </div>
        );
    }
}

Loader.defaultProps = {
    loader: false
};

Loader.propTypes = {
    loader: PropTypes.bool,
}
export default Loader