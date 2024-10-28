import { generateClient } from 'aws-amplify/api';
import { listAppointments } from './graphql/queries';
import { createAppointment } from './graphql/mutations';
import type { CreateAppointmentInput } from './API';

const client = generateClient();

export const createAppointmentActivity = async (
  input: CreateAppointmentInput,
) => {
  try {
    const response = await client.graphql({
      query: createAppointment,
      variables: {
        input: {
          ...input,
          date: input.date || new Date().toISOString(),
        },
      },
    });
    return response.data.createAppointment;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

export const getAppointmentActivities = async () => {
  try {
    const response = await client.graphql({
      query: listAppointments,
    });
    return response.data.listAppointments.items;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};
