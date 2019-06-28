import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUser } from "../../actions/users";
import Spinner from "../../components/Spinner";
import UserPage from "../../components/UserPage";

class User extends React.Component {
  componentDidMount() {
    const { fetchUser, name } = this.props;

    fetchUser(name);
  }

  render() {
    const { user, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }
    if (!isLoading && !user) {
      return "404";
    }

    return (
      <UserPage
        avatar={user.avatar_url}
        key={user.id}
        name={user.name}
        location={user.location}
        biography={user.bio}
        login={user.login}
        repos={user.public_repos}
        company={user.company}
      />
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchUser: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  user: state.user.data || {},
  isLoading: state.user.loadingStatus,
  name: props.match.params.name
});

const mapDispatchToProps = {
  fetchUser
};

// const mapDispatchToProps = dispatch => ({
// fetchUser: () => dispatch(fetchUser())
// fetchUser: bindActionCreators(fetchUser, dispatch)
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
