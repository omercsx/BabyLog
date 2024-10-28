/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAppointment = /* GraphQL */ `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAppointmentQueryVariables,
  APITypes.GetAppointmentQuery
>;
export const listAppointments = /* GraphQL */ `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      title
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAppointmentsQueryVariables,
  APITypes.ListAppointmentsQuery
>;
export const getSleep = /* GraphQL */ `query GetSleep($id: ID!) {
  getSleep(id: $id) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSleepQueryVariables, APITypes.GetSleepQuery>;
export const listSleeps = /* GraphQL */ `query ListSleeps(
  $filter: ModelSleepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSleeps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sleep
      wake
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSleepsQueryVariables,
  APITypes.ListSleepsQuery
>;
export const getDiaper = /* GraphQL */ `query GetDiaper($id: ID!) {
  getDiaper(id: $id) {
    id
    color
    state
    time
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDiaperQueryVariables, APITypes.GetDiaperQuery>;
export const listDiapers = /* GraphQL */ `query ListDiapers(
  $filter: ModelDiaperFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiapers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      color
      state
      time
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiapersQueryVariables,
  APITypes.ListDiapersQuery
>;
export const getFeeding = /* GraphQL */ `query GetFeeding($id: ID!) {
  getFeeding(id: $id) {
    id
    food_type
    amount
    time
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeedingQueryVariables,
  APITypes.GetFeedingQuery
>;
export const listFeedings = /* GraphQL */ `query ListFeedings(
  $filter: ModelFeedingFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      food_type
      amount
      time
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedingsQueryVariables,
  APITypes.ListFeedingsQuery
>;
