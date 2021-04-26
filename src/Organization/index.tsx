import * as React from "react";
import { GET_REPOSITORIES_OF_ORGANIZATION } from "../queries.graphql";
import {
  GetRepositoriesOfOrganization,
  GetRepositoriesOfOrganizationVariables,
} from "../__generated__/types";
import ErrorMessage from "../Error";
import Loading from "../Loading";
import RepositoryList from "../Repository";
import { useQuery } from "@apollo/client";

interface OrganizationRepoProps {
  organizationName?: string;
}

const Organization = React.memo(function Organization({
  organizationName,
}: OrganizationRepoProps) {
  const { data, loading, error, fetchMore } = useQuery<
    GetRepositoriesOfOrganization,
    GetRepositoriesOfOrganizationVariables
  >(GET_REPOSITORIES_OF_ORGANIZATION, {
    skip: !organizationName,
    variables: { organizationName },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading && !data) {
    return <Loading />;
  }

  const { organization } = data;

  return (
    <RepositoryList
      loading={loading}
      repositories={organization.repositories}
      fetchMore={fetchMore}
      entry={"organization"}
    />
  );
});

export default Organization;

// export default class Organization extends React.Component<OrganizationProps> {

//   render() {
//     const { organizationName } = this.props
//     return (
//       <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={{ organizationName }} skip={organizationName === ''}>
//         {({ data, loading, error }) => {

//         }}
//       </Query>
//     )
//   }
// }
