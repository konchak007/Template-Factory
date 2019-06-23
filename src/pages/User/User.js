import React from 'react'
import { connect } from 'react-redux';
import {fetchUser} from '../../actions/users'

class User extends React.Component {
  componentDidMount() {
    const { fetchUser, name } = this.props;

    fetchUser(name);
  }

  render() {
    const { user } = this.props;

    // if (isLoading) {
    //   return <Spinner type="grow" color="primary" />;
    // }
    // if (!isLoading && !data) {
    //   return "404";
    // }
    // console.log(data);

    if (!user) return 'Юзера нема'

    return <img src={user.avatar_url} />;
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.data || {},
  name: props.match.params.name
});

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
