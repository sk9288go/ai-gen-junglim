// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AIprompt, Style, Size } = initSchema(schema);

export {
  AIprompt,
  Style,
  Size
};