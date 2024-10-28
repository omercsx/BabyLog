/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAppointment =
  /* GraphQL */ `subscription OnCreateAppointment(
  $filter: ModelSubscriptionAppointmentFilterInput
  $owner: String
) {
  onCreateAppointment(filter: $filter, owner: $owner) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateAppointmentSubscriptionVariables,
    APITypes.OnCreateAppointmentSubscription
  >;
export const onUpdateAppointment =
  /* GraphQL */ `subscription OnUpdateAppointment(
  $filter: ModelSubscriptionAppointmentFilterInput
  $owner: String
) {
  onUpdateAppointment(filter: $filter, owner: $owner) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateAppointmentSubscriptionVariables,
    APITypes.OnUpdateAppointmentSubscription
  >;
export const onDeleteAppointment =
  /* GraphQL */ `subscription OnDeleteAppointment(
  $filter: ModelSubscriptionAppointmentFilterInput
  $owner: String
) {
  onDeleteAppointment(filter: $filter, owner: $owner) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteAppointmentSubscriptionVariables,
    APITypes.OnDeleteAppointmentSubscription
  >;
export const onCreateSleep = /* GraphQL */ `subscription OnCreateSleep(
  $filter: ModelSubscriptionSleepFilterInput
  $owner: String
) {
  onCreateSleep(filter: $filter, owner: $owner) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSleepSubscriptionVariables,
  APITypes.OnCreateSleepSubscription
>;
export const onUpdateSleep = /* GraphQL */ `subscription OnUpdateSleep(
  $filter: ModelSubscriptionSleepFilterInput
  $owner: String
) {
  onUpdateSleep(filter: $filter, owner: $owner) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSleepSubscriptionVariables,
  APITypes.OnUpdateSleepSubscription
>;
export const onDeleteSleep = /* GraphQL */ `subscription OnDeleteSleep(
  $filter: ModelSubscriptionSleepFilterInput
  $owner: String
) {
  onDeleteSleep(filter: $filter, owner: $owner) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSleepSubscriptionVariables,
  APITypes.OnDeleteSleepSubscription
>;
export const onCreateDiaper = /* GraphQL */ `subscription OnCreateDiaper(
  $filter: ModelSubscriptionDiaperFilterInput
  $owner: String
) {
  onCreateDiaper(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDiaperSubscriptionVariables,
  APITypes.OnCreateDiaperSubscription
>;
export const onUpdateDiaper = /* GraphQL */ `subscription OnUpdateDiaper(
  $filter: ModelSubscriptionDiaperFilterInput
  $owner: String
) {
  onUpdateDiaper(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDiaperSubscriptionVariables,
  APITypes.OnUpdateDiaperSubscription
>;
export const onDeleteDiaper = /* GraphQL */ `subscription OnDeleteDiaper(
  $filter: ModelSubscriptionDiaperFilterInput
  $owner: String
) {
  onDeleteDiaper(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDiaperSubscriptionVariables,
  APITypes.OnDeleteDiaperSubscription
>;
export const onCreateFeeding = /* GraphQL */ `subscription OnCreateFeeding(
  $filter: ModelSubscriptionFeedingFilterInput
  $owner: String
) {
  onCreateFeeding(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedingSubscriptionVariables,
  APITypes.OnCreateFeedingSubscription
>;
export const onUpdateFeeding = /* GraphQL */ `subscription OnUpdateFeeding(
  $filter: ModelSubscriptionFeedingFilterInput
  $owner: String
) {
  onUpdateFeeding(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedingSubscriptionVariables,
  APITypes.OnUpdateFeedingSubscription
>;
export const onDeleteFeeding = /* GraphQL */ `subscription OnDeleteFeeding(
  $filter: ModelSubscriptionFeedingFilterInput
  $owner: String
) {
  onDeleteFeeding(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedingSubscriptionVariables,
  APITypes.OnDeleteFeedingSubscription
>;
