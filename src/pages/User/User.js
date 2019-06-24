import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/users";
import { Spinner } from "reactstrap";

class User extends React.Component {
  componentDidMount() {
    const { fetchUser, name } = this.props;

    fetchUser(name);
  }

  render() {
    const { user, isLoading } = this.props;

    if (isLoading) {
      return <Spinner type="grow" color="primary" />;
    }
    if (!isLoading && !user) {
      return "404";
    }

    return <img src={user.avatar_url} />;
  }
}

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
