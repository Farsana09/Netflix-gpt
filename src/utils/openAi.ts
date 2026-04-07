import OpenAI from "openai";
//
//it is kind of like authorization happening here for openai
const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  //
  // we are adding the dangerouslyAllowBrowser flag to allow the openai api to be used in the browser
  //normally these making openai api call , secret key  keeping will don from server or backend
  //bcs since we are working on front end the key can be leaked thats why its restricted
  //but since we are just learning and testing the api we can use it in the front end by adding this flag
  dangerouslyAllowBrowser: true,
});

export default client;
