/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIssuesOfRepository
// ====================================================

export interface GetIssuesOfRepository_repository_issues_edges_node {
  __typename: "Issue";
  id: string;
  /**
   * Identifies the issue number.
   */
  number: number;
  /**
   * Identifies the state of the issue.
   */
  state: IssueState;
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * The HTTP URL for this issue
   */
  url: any;
  /**
   * The body rendered to HTML.
   */
  bodyHTML: any;
}

export interface GetIssuesOfRepository_repository_issues_edges {
  __typename: "IssueEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetIssuesOfRepository_repository_issues_edges_node | null;
}

export interface GetIssuesOfRepository_repository_issues {
  __typename: "IssueConnection";
  /**
   * A list of edges.
   */
  edges: (GetIssuesOfRepository_repository_issues_edges | null)[] | null;
}

export interface GetIssuesOfRepository_repository {
  __typename: "Repository";
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: GetIssuesOfRepository_repository_issues;
}

export interface GetIssuesOfRepository {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GetIssuesOfRepository_repository | null;
}

export interface GetIssuesOfRepositoryVariables {
  repositoryOwner: string;
  repositoryName: string;
  issueState: IssueState;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepositoriesOfOrganization
// ====================================================

export interface GetRepositoriesOfOrganization_organization_repositories_edges_node_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface GetRepositoriesOfOrganization_organization_repositories_edges_node_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The HTTP URL for the owner.
   */
  url: any;
}

export interface GetRepositoriesOfOrganization_organization_repositories_edges_node_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepositoriesOfOrganization_organization_repositories_edges_node_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepositoriesOfOrganization_organization_repositories_edges_node {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: GetRepositoriesOfOrganization_organization_repositories_edges_node_primaryLanguage | null;
  /**
   * The User owner of the repository.
   */
  owner: GetRepositoriesOfOrganization_organization_repositories_edges_node_owner;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: GetRepositoriesOfOrganization_organization_repositories_edges_node_stargazers;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users watching the repository.
   */
  watchers: GetRepositoriesOfOrganization_organization_repositories_edges_node_watchers;
  /**
   * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
   */
  viewerSubscription: SubscriptionState | null;
}

export interface GetRepositoriesOfOrganization_organization_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetRepositoriesOfOrganization_organization_repositories_edges_node | null;
}

export interface GetRepositoriesOfOrganization_organization_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface GetRepositoriesOfOrganization_organization_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (GetRepositoriesOfOrganization_organization_repositories_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetRepositoriesOfOrganization_organization_repositories_pageInfo;
}

export interface GetRepositoriesOfOrganization_organization {
  __typename: "Organization";
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetRepositoriesOfOrganization_organization_repositories;
}

export interface GetRepositoriesOfOrganization {
  /**
   * Lookup a organization by login.
   */
  organization: GetRepositoriesOfOrganization_organization | null;
}

export interface GetRepositoriesOfOrganizationVariables {
  organizationName: string;
  cursor?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepositories
// ====================================================

export interface GetRepositories_viewer_repositories_edges_node_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface GetRepositories_viewer_repositories_edges_node_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The HTTP URL for the owner.
   */
  url: any;
}

export interface GetRepositories_viewer_repositories_edges_node_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepositories_viewer_repositories_edges_node_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepositories_viewer_repositories_edges_node {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: GetRepositories_viewer_repositories_edges_node_primaryLanguage | null;
  /**
   * The User owner of the repository.
   */
  owner: GetRepositories_viewer_repositories_edges_node_owner;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: GetRepositories_viewer_repositories_edges_node_stargazers;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users watching the repository.
   */
  watchers: GetRepositories_viewer_repositories_edges_node_watchers;
  /**
   * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
   */
  viewerSubscription: SubscriptionState | null;
}

export interface GetRepositories_viewer_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetRepositories_viewer_repositories_edges_node | null;
}

export interface GetRepositories_viewer_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface GetRepositories_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (GetRepositories_viewer_repositories_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetRepositories_viewer_repositories_pageInfo;
}

export interface GetRepositories_viewer {
  __typename: "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetRepositories_viewer_repositories;
}

export interface GetRepositories {
  /**
   * The currently authenticated user.
   */
  viewer: GetRepositories_viewer;
}

export interface GetRepositoriesVariables {
  cursor?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addStar
// ====================================================

export interface addStar_addStar_starrable {
  __typename: "Repository" | "Topic" | "Gist";
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
}

export interface addStar_addStar {
  __typename: "AddStarPayload";
  /**
   * The starrable.
   */
  starrable: addStar_addStar_starrable | null;
}

export interface addStar {
  /**
   * Adds a star to a Starrable.
   */
  addStar: addStar_addStar | null;
}

export interface addStarVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeStar
// ====================================================

export interface removeStar_removeStar_starrable {
  __typename: "Repository" | "Topic" | "Gist";
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
}

export interface removeStar_removeStar {
  __typename: "RemoveStarPayload";
  /**
   * The starrable.
   */
  starrable: removeStar_removeStar_starrable | null;
}

export interface removeStar {
  /**
   * Removes a star from a Starrable.
   */
  removeStar: removeStar_removeStar | null;
}

export interface removeStarVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateSubscription
// ====================================================

export interface updateSubscription_updateSubscription_subscribable {
  __typename: "Issue" | "PullRequest" | "Repository" | "Team" | "TeamDiscussion" | "Commit";
  id: string;
  /**
   * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
   */
  viewerSubscription: SubscriptionState | null;
}

export interface updateSubscription_updateSubscription {
  __typename: "UpdateSubscriptionPayload";
  /**
   * The input subscribable entity.
   */
  subscribable: updateSubscription_updateSubscription_subscribable | null;
}

export interface updateSubscription {
  /**
   * Updates the state for subscribable subjects.
   */
  updateSubscription: updateSubscription_updateSubscription | null;
}

export interface updateSubscriptionVariables {
  id: string;
  state: SubscriptionState;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrganizationForLearningReact
// ====================================================

export interface OrganizationForLearningReact_organization {
  __typename: "Organization";
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * The organization's public email.
   */
  email: string | null;
}

export interface OrganizationForLearningReact {
  /**
   * Lookup a organization by login.
   */
  organization: OrganizationForLearningReact_organization | null;
}

export interface OrganizationForLearningReactVariables {
  orgName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: repository
// ====================================================

export interface repository_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The HTTP URL for the owner.
   */
  url: any;
}

export interface repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface repository_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface repository {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: repository_primaryLanguage | null;
  /**
   * The User owner of the repository.
   */
  owner: repository_owner;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: repository_stargazers;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users watching the repository.
   */
  watchers: repository_watchers;
  /**
   * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
   */
  viewerSubscription: SubscriptionState | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * The possible states of an issue.
 */
export enum IssueState {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

/**
 * The possible states of a subscription.
 */
export enum SubscriptionState {
  IGNORED = "IGNORED",
  SUBSCRIBED = "SUBSCRIBED",
  UNSUBSCRIBED = "UNSUBSCRIBED",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
