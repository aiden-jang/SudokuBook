import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Footer from './footer';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);