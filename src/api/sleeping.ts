import { generateClient } from 'aws-amplify/api';
import { listSleeps } from './graphql/queries';
import { createSleep } from './graphql/mutations';
import type { CreateSleepInput } from './API';

const client = generateClient();

export const createSleepActivity = async (input: CreateSleepInput) => {
  try {
    const response = await client.graphql({
      query: createSleep,
      variables: {
        input: {
          ...input,
        },
      },
    });
    return response.data.createSleep;
  } catch (error) {
    console.error('Error creating sleep activity:', error);
    throw error;
  }
};

export const getSleepActivities = async () => {
  try {
    const response = await client.graphql({
      query: listSleeps,
    });
    return response.data.listSleeps.items;
  } catch (error) {
    console.error('Error fetching sleep activities:', error);
    throw error;
  }
};
