import * as React from "react";

import Button from "../../Button";
import Dropdown from "../../Dropdown";
import Link from "../../Link";
import {
  GetRepositories_viewer_repositories_edges_node,
  SubscriptionState,
  addStar,
  removeStar,
  updateSubscription,
  addStarVariables,
  removeStarVariables,
} from "../../__generated__/types";

import "../style.css";
import {
  ADD_STAR_REPOSITORY,
  REMOVE_STAR_REPOSITORY,
  UPDATE_SUBSCRIPTION_REPOSITORY,
} from "../../queries.graphql";
import { REPOSITORY_FRAGMENT } from "..";

import { useMutation, QueryResult } from "@apollo/client";

const RepositoryItem = React.memo(function RepositoryItem(
  node: GetRepositories_viewer_repositories_edges_node
) {
  let dropdown: HTMLSelectElement;

  const [addStar, { loading }] = useMutation<addStar, addStarVariables>(
    ADD_STAR_REPOSITORY,
    {
      update: (cache, result: QueryResult<addStar>) => {
        const repository: GetRepositories_viewer_repositories_edges_node = cache.readFragment(
          {
            id: `Repository:${result.data.addStar.starrable.id}`,
            fragment: REPOSITORY_FRAGMENT,
          }
        );

        const totalCount = repository.stargazers.totalCount + 1;

        cache.writeFragment({
          id: `Repository:${result.data.addStar.starrable.id}`,
          fragment: REPOSITORY_FRAGMENT,
          data: {
            ...repository,
            stargazers: {
              ...repository.stargazers,
              totalCount,
            },
          },
        });
      },
    }
  );

  const [removeStar] = useMutation<removeStar, removeStarVariables>(
    REMOVE_STAR_REPOSITORY,
    {
      update: (cache, result: QueryResult<removeStar>) => {
        const repository: GetRepositories_viewer_repositories_edges_node = cache.readFragment(
          {
            id: `Repository:${result.data.removeStar.starrable.id}`,
            fragment: REPOSITORY_FRAGMENT,
          }
        );

        const totalCount = repository.stargazers.totalCount - 1;

        cache.writeFragment({
          id: `Repository:${result.data.removeStar.starrable.id}`,
          fragment: REPOSITORY_FRAGMENT,
          data: {
            ...repository,
            stargazers: {
              ...repository.stargazers,
              totalCount,
            },
          },
        });
      },
    }
  );

  const [updateSubscription] = useMutation<updateSubscription>(
    UPDATE_SUBSCRIPTION_REPOSITORY,
    {
      update: (cache, result: QueryResult<updateSubscription>) => {
        const repository: GetRepositories_viewer_repositories_edges_node = cache.readFragment(
          {
            id: `Repository:${result.data.updateSubscription.subscribable.id}`,
            fragment: REPOSITORY_FRAGMENT,
          }
        );

        let { totalCount } = repository.watchers;
        totalCount =
          result.data.updateSubscription.subscribable.viewerSubscription ===
          SubscriptionState.SUBSCRIBED
            ? totalCount + 1
            : totalCount > 0
            ? totalCount - 1
            : totalCount;

        cache.writeFragment({
          id: `Repository:${result.data.updateSubscription.subscribable.id}`,
          fragment: REPOSITORY_FRAGMENT,
          data: {
            ...repository,
            watchers: {
              ...repository.watchers,
              totalCount,
            },
          },
        });
      },
    }
  );

  return (
    <div>
      <div className="RepositoryItem-title">
        <h2>
          <Link href={node.url}>{node.name}</Link>
        </h2>
        <div>
          {!node.viewerHasStarred ? (
            <Button
              className={"RepositoryItem-title-action"}
              onClick={() => addStar({ variables: { id: node.id } })}
              color="black"
            >
              {!loading ? `${node.stargazers.totalCount} Star` : "Loading.."}
            </Button>
          ) : (
            <Button
              className={"RepositoryItem-title-action"}
              onClick={(e) => removeStar({ variables: { id: node.id } })}
            >
              {!loading
                ? `${node.stargazers.totalCount} Star | Remove Star`
                : "Loading.."}
            </Button>
          )}
        </div>
      </div>

      <div>
        <React.Fragment>
          <Dropdown
            selected={node.viewerSubscription}
            reference={(node) => (dropdown = node)}
            options={Object.keys(SubscriptionState)}
            onChange={(e) =>
              updateSubscription({
                variables: { id: node.id, state: dropdown.value },
              })
            }
          />
          {` Total watchers: ${node.watchers.totalCount}`}
        </React.Fragment>
      </div>

      <div className="RepositoryItem-description">
        <div
          className="RepositoryItem-description-info"
          dangerouslySetInnerHTML={{ __html: node.descriptionHTML }}
        />
        <div className="RepositoryItem-description-details">
          <div>
            {node.primaryLanguage && (
              <span>Language: {node.primaryLanguage.name}</span>
            )}
          </div>
          <div>
            {node.owner && (
              <span>
                Owner: <a href={node.owner.url}>{node.owner.login}</a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default RepositoryItem;
