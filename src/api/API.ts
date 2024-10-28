/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAppointmentInput = {
  id?: string | null,
  date?: string | null,
  title?: string | null,
};

export type ModelAppointmentConditionInput = {
  date?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  date?: string | null,
  title?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAppointmentInput = {
  id: string,
  date?: string | null,
  title?: string | null,
};

export type DeleteAppointmentInput = {
  id: string,
};

export type CreateSleepInput = {
  id?: string | null,
  sleep?: string | null,
  wake?: string | null,
};

export type ModelSleepConditionInput = {
  sleep?: ModelStringInput | null,
  wake?: ModelStringInput | null,
  and?: Array< ModelSleepConditionInput | null > | null,
  or?: Array< ModelSleepConditionInput | null > | null,
  not?: ModelSleepConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Sleep = {
  __typename: "Sleep",
  id: string,
  sleep?: string | null,
  wake?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSleepInput = {
  id: string,
  sleep?: string | null,
  wake?: string | null,
};

export type DeleteSleepInput = {
  id: string,
};

export type CreateDiaperInput = {
  id?: string | null,
  color?: PoopColor | null,
  state?: PoopState | null,
  time?: string | null,
};

export enum PoopColor {
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  BROWN = "BROWN",
}


export enum PoopState {
  SOLID = "SOLID",
  LIQUID = "LIQUID",
}


export type ModelDiaperConditionInput = {
  color?: ModelPoopColorInput | null,
  state?: ModelPoopStateInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelDiaperConditionInput | null > | null,
  or?: Array< ModelDiaperConditionInput | null > | null,
  not?: ModelDiaperConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPoopColorInput = {
  eq?: PoopColor | null,
  ne?: PoopColor | null,
};

export type ModelPoopStateInput = {
  eq?: PoopState | null,
  ne?: PoopState | null,
};

export type Diaper = {
  __typename: "Diaper",
  id: string,
  color?: PoopColor | null,
  state?: PoopState | null,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateDiaperInput = {
  id: string,
  color?: PoopColor | null,
  state?: PoopState | null,
  time?: string | null,
};

export type DeleteDiaperInput = {
  id: string,
};

export type CreateFeedingInput = {
  id?: string | null,
  food_type?: string | null,
  amount?: number | null,
  time?: string | null,
};

export type ModelFeedingConditionInput = {
  food_type?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelFeedingConditionInput | null > | null,
  or?: Array< ModelFeedingConditionInput | null > | null,
  not?: ModelFeedingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Feeding = {
  __typename: "Feeding",
  id: string,
  food_type?: string | null,
  amount?: number | null,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFeedingInput = {
  id: string,
  food_type?: string | null,
  amount?: number | null,
  time?: string | null,
};

export type DeleteFeedingInput = {
  id: string,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
};

export type ModelSleepFilterInput = {
  id?: ModelIDInput | null,
  sleep?: ModelStringInput | null,
  wake?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSleepFilterInput | null > | null,
  or?: Array< ModelSleepFilterInput | null > | null,
  not?: ModelSleepFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSleepConnection = {
  __typename: "ModelSleepConnection",
  items:  Array<Sleep | null >,
  nextToken?: string | null,
};

export type ModelDiaperFilterInput = {
  id?: ModelIDInput | null,
  color?: ModelPoopColorInput | null,
  state?: ModelPoopStateInput | null,
  time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDiaperFilterInput | null > | null,
  or?: Array< ModelDiaperFilterInput | null > | null,
  not?: ModelDiaperFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelDiaperConnection = {
  __typename: "ModelDiaperConnection",
  items:  Array<Diaper | null >,
  nextToken?: string | null,
};

export type ModelFeedingFilterInput = {
  id?: ModelIDInput | null,
  food_type?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeedingFilterInput | null > | null,
  or?: Array< ModelFeedingFilterInput | null > | null,
  not?: ModelFeedingFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFeedingConnection = {
  __typename: "ModelFeedingConnection",
  items:  Array<Feeding | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSleepFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sleep?: ModelSubscriptionStringInput | null,
  wake?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSleepFilterInput | null > | null,
  or?: Array< ModelSubscriptionSleepFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionDiaperFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  color?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiaperFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiaperFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFeedingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  food_type?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionIntInput | null,
  time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeedingFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeedingFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSleepMutationVariables = {
  input: CreateSleepInput,
  condition?: ModelSleepConditionInput | null,
};

export type CreateSleepMutation = {
  createSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSleepMutationVariables = {
  input: UpdateSleepInput,
  condition?: ModelSleepConditionInput | null,
};

export type UpdateSleepMutation = {
  updateSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSleepMutationVariables = {
  input: DeleteSleepInput,
  condition?: ModelSleepConditionInput | null,
};

export type DeleteSleepMutation = {
  deleteSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDiaperMutationVariables = {
  input: CreateDiaperInput,
  condition?: ModelDiaperConditionInput | null,
};

export type CreateDiaperMutation = {
  createDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateDiaperMutationVariables = {
  input: UpdateDiaperInput,
  condition?: ModelDiaperConditionInput | null,
};

export type UpdateDiaperMutation = {
  updateDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteDiaperMutationVariables = {
  input: DeleteDiaperInput,
  condition?: ModelDiaperConditionInput | null,
};

export type DeleteDiaperMutation = {
  deleteDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFeedingMutationVariables = {
  input: CreateFeedingInput,
  condition?: ModelFeedingConditionInput | null,
};

export type CreateFeedingMutation = {
  createFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFeedingMutationVariables = {
  input: UpdateFeedingInput,
  condition?: ModelFeedingConditionInput | null,
};

export type UpdateFeedingMutation = {
  updateFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFeedingMutationVariables = {
  input: DeleteFeedingInput,
  condition?: ModelFeedingConditionInput | null,
};

export type DeleteFeedingMutation = {
  deleteFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      date?: string | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSleepQueryVariables = {
  id: string,
};

export type GetSleepQuery = {
  getSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSleepsQueryVariables = {
  filter?: ModelSleepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSleepsQuery = {
  listSleeps?:  {
    __typename: "ModelSleepConnection",
    items:  Array< {
      __typename: "Sleep",
      id: string,
      sleep?: string | null,
      wake?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDiaperQueryVariables = {
  id: string,
};

export type GetDiaperQuery = {
  getDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListDiapersQueryVariables = {
  filter?: ModelDiaperFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiapersQuery = {
  listDiapers?:  {
    __typename: "ModelDiaperConnection",
    items:  Array< {
      __typename: "Diaper",
      id: string,
      color?: PoopColor | null,
      state?: PoopState | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeedingQueryVariables = {
  id: string,
};

export type GetFeedingQuery = {
  getFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFeedingsQueryVariables = {
  filter?: ModelFeedingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedingsQuery = {
  listFeedings?:  {
    __typename: "ModelFeedingConnection",
    items:  Array< {
      __typename: "Feeding",
      id: string,
      food_type?: string | null,
      amount?: number | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSleepSubscriptionVariables = {
  filter?: ModelSubscriptionSleepFilterInput | null,
  owner?: string | null,
};

export type OnCreateSleepSubscription = {
  onCreateSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSleepSubscriptionVariables = {
  filter?: ModelSubscriptionSleepFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSleepSubscription = {
  onUpdateSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSleepSubscriptionVariables = {
  filter?: ModelSubscriptionSleepFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSleepSubscription = {
  onDeleteSleep?:  {
    __typename: "Sleep",
    id: string,
    sleep?: string | null,
    wake?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateDiaperSubscriptionVariables = {
  filter?: ModelSubscriptionDiaperFilterInput | null,
  owner?: string | null,
};

export type OnCreateDiaperSubscription = {
  onCreateDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateDiaperSubscriptionVariables = {
  filter?: ModelSubscriptionDiaperFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDiaperSubscription = {
  onUpdateDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteDiaperSubscriptionVariables = {
  filter?: ModelSubscriptionDiaperFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDiaperSubscription = {
  onDeleteDiaper?:  {
    __typename: "Diaper",
    id: string,
    color?: PoopColor | null,
    state?: PoopState | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFeedingFilterInput | null,
  owner?: string | null,
};

export type OnCreateFeedingSubscription = {
  onCreateFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFeedingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFeedingSubscription = {
  onUpdateFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFeedingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFeedingSubscription = {
  onDeleteFeeding?:  {
    __typename: "Feeding",
    id: string,
    food_type?: string | null,
    amount?: number | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
