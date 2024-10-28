import { generateClient } from 'aws-amplify/api';
import { listFeedings } from './graphql/queries';
import { createFeeding } from './graphql/mutations';
import type { CreateFeedingInput } from './API';

const client = generateClient();

export const createFeedingActivity = async (input: CreateFeedingInput) => {
  try {
    const response = await client.graphql({
      query: createFeeding,
      variables: {
        input,
      },
    });
    return response.data.createFeeding;
  } catch (error) {
    console.error('Error creating feeding:', error);
    throw error;
  }
};

export const getFeedingActivities = async () => {
  try {
    const response = await client.graphql({
      query: listFeedings,
    });
    return response.data.listFeedings.items;
  } catch (error) {
    console.error('Error fetching feedings:', error);
    throw error;
  }
};
