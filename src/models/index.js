// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blogpost, Project } = initSchema(schema);

export {
  Blogpost,
  Project
};