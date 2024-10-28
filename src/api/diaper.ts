import { generateClient } from 'aws-amplify/api';
import { listDiapers } from './graphql/queries';
import { createDiaper } from './graphql/mutations';
import type { CreateDiaperInput, Diaper, PoopColor, PoopState } from './API';

const client = generateClient();

export const createDiaperActivity = async (input: CreateDiaperInput) => {
  try {
    const response = await client.graphql({
      query: createDiaper,
      variables: {
        input: {
          ...input,
          time: input.time || new Date().toISOString(),
        },
      },
    });
    return response.data.createDiaper;
  } catch (error) {
    console.error('Error creating diaper activity:', error);
    throw error;
  }
};

export const getDiaperActivities = async () => {
  try {
    const response = await client.graphql({
      query: listDiapers,
    });
    return response.data.listDiapers.items;
  } catch (error) {
    console.error('Error fetching diaper activities:', error);
    throw error;
  }
};

