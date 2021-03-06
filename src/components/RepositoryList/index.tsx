import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";

import * as RepositoriesAtions from "../../store/ducks/repositories/actions";

import RepositoryItem from '../RepositoryItem';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;
class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return <ul>{repositories.map((repository) => (
      <RepositoryItem key={repository.id} repository={repository}/>
    ))}</ul>;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesAtions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
