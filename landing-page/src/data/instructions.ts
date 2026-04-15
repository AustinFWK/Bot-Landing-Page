export type Instruction = {
  step: string;
  title: string;
  description: string;
  image: string;
  reverse?: false;
};

export const instructions: Instruction[] = [
  {
    step: "01",
    title: "Invite the bot",
    description: "Add the bot to your discord server in seconds.",
    image: "",
  },
];
