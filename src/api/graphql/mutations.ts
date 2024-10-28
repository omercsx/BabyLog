/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAppointment = /* GraphQL */ `mutation CreateAppointment(
  $input: CreateAppointmentInput!
  $condition: ModelAppointmentConditionInput
) {
  createAppointment(input: $input, condition: $condition) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAppointmentMutationVariables,
  APITypes.CreateAppointmentMutation
>;
export const updateAppointment = /* GraphQL */ `mutation UpdateAppointment(
  $input: UpdateAppointmentInput!
  $condition: ModelAppointmentConditionInput
) {
  updateAppointment(input: $input, condition: $condition) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAppointmentMutationVariables,
  APITypes.UpdateAppointmentMutation
>;
export const deleteAppointment = /* GraphQL */ `mutation DeleteAppointment(
  $input: DeleteAppointmentInput!
  $condition: ModelAppointmentConditionInput
) {
  deleteAppointment(input: $input, condition: $condition) {
    id
    date
    title
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAppointmentMutationVariables,
  APITypes.DeleteAppointmentMutation
>;
export const createSleep = /* GraphQL */ `mutation CreateSleep(
  $input: CreateSleepInput!
  $condition: ModelSleepConditionInput
) {
  createSleep(input: $input, condition: $condition) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSleepMutationVariables,
  APITypes.CreateSleepMutation
>;
export const updateSleep = /* GraphQL */ `mutation UpdateSleep(
  $input: UpdateSleepInput!
  $condition: ModelSleepConditionInput
) {
  updateSleep(input: $input, condition: $condition) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSleepMutationVariables,
  APITypes.UpdateSleepMutation
>;
export const deleteSleep = /* GraphQL */ `mutation DeleteSleep(
  $input: DeleteSleepInput!
  $condition: ModelSleepConditionInput
) {
  deleteSleep(input: $input, condition: $condition) {
    id
    sleep
    wake
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSleepMutationVariables,
  APITypes.DeleteSleepMutation
>;
export const createDiaper = /* GraphQL */ `mutation CreateDiaper(
  $input: CreateDiaperInput!
  $condition: ModelDiaperConditionInput
) {
  createDiaper(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDiaperMutationVariables,
  APITypes.CreateDiaperMutation
>;
export const updateDiaper = /* GraphQL */ `mutation UpdateDiaper(
  $input: UpdateDiaperInput!
  $condition: ModelDiaperConditionInput
) {
  updateDiaper(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDiaperMutationVariables,
  APITypes.UpdateDiaperMutation
>;
export const deleteDiaper = /* GraphQL */ `mutation DeleteDiaper(
  $input: DeleteDiaperInput!
  $condition: ModelDiaperConditionInput
) {
  deleteDiaper(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDiaperMutationVariables,
  APITypes.DeleteDiaperMutation
>;
export const createFeeding = /* GraphQL */ `mutation CreateFeeding(
  $input: CreateFeedingInput!
  $condition: ModelFeedingConditionInput
) {
  createFeeding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFeedingMutationVariables,
  APITypes.CreateFeedingMutation
>;
export const updateFeeding = /* GraphQL */ `mutation UpdateFeeding(
  $input: UpdateFeedingInput!
  $condition: ModelFeedingConditionInput
) {
  updateFeeding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFeedingMutationVariables,
  APITypes.UpdateFeedingMutation
>;
export const deleteFeeding = /* GraphQL */ `mutation DeleteFeeding(
  $input: DeleteFeedingInput!
  $condition: ModelFeedingConditionInput
) {
  deleteFeeding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFeedingMutationVariables,
  APITypes.DeleteFeedingMutation
>;
