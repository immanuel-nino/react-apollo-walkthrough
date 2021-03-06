import * as React from "react";

import RepositoryItem from "../RepositoryItem";

import "../style.css";
// import { FetchMoreOptions, FetchMoreQueryOptions } from 'react-apollo';
import Loading from "../../Loading";
import FetchMore from "../../FetchMore";
import Issues from "../../Issue";
import {
  GetRepositories_viewer_repositories,
  GetRepositories_viewer_repositories_edges,
} from "../../__generated__/types";
import { FetchMoreOptions, FetchMoreQueryOptions } from "@apollo/client";

interface RepositoryListProps {
  repositories: GetRepositories_viewer_repositories;
  fetchMore: any;
  loading: boolean;
  entry: string;
}

// const updateQuery = (entry: string) =>
// (previousResult: GetRepositories, options: { fetchMoreResult: GetRepositories }) => {

const updateQuery = (entry: string) => (
  previousResult: any,
  options: { fetchMoreResult: any }
) => {
  if (!options.fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    [entry]: {
      ...previousResult[entry],
      repositories: {
        ...previousResult[entry].repositories,
        ...options.fetchMoreResult[entry].repositories,
        edges: [
          ...previousResult[entry].repositories.edges,
          ...options.fetchMoreResult[entry].repositories.edges,
        ],
      },
    },
  };
};

const RepositoryList = (props: RepositoryListProps) => {
  const { repositories, fetchMore, loading, entry } = props;
  return (
    <React.Fragment>
      {repositories.edges.map(
        ({ node }: GetRepositories_viewer_repositories_edges) => (
          <div key={node.id} className="RepositoryItem">
            <RepositoryItem {...node} />

            <Issues
              repositoryName={node.name}
              repositoryOwner={node.owner.login}
            />
          </div>
        )
      )}

      <FetchMore
        loading={loading}
        hasNextPage={repositories.pageInfo.hasNextPage}
        variables={{
          cursor: repositories.pageInfo.endCursor,
        }}
        updateQuery={updateQuery(entry)}
        fetchMore={fetchMore}
      >
        Repositories
      </FetchMore>
    </React.Fragment>
  );
};

export default RepositoryList;

// export default class RepositoryList extends React.Component<RepositoryListProps, any> {
//   constructor(props: RepositoryListProps) {
//     super(props)
//   }

//   public render() {
//     const { repositories } = this.props
//     return (
//       repositories.edges.map(({ node }) => (
//         <div key={node.id} className="RepositoryItem">
//           <RepositoryItem {...node} />
//         </div>
//       ))
//     )
//   }
// }
