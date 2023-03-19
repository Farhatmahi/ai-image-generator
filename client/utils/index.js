import { surpriseMePrompts } from "../constants";

export const getRandomPrompot = (prompt) => {
  console.log(prompt)
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompot(prompt);
  return randomPrompt;
};
