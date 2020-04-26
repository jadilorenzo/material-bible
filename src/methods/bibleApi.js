import bibleverses from "bibleverses";

export const getVerse = async (verse: string) => {
  return await bibleverses.retrievePassage(verse);
};

export const isVerse = async (verse: string) => {
  return (
    (await bibleverses.retrievePassage(verse)) ===
    "Requested passage not found in the undefined. Check your passage and version!"
  );
};
