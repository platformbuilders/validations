/**
 * Validates an Instagram username based on the following criteria:
 * * Must start with "@"
 * * Must have a minimum length of 3 characters (excluding the "@")
 * * Only allows alphanumeric characters and underscores
 * * Empty or undefined values are considered invalid
 * @param instagramUsername - The Instagram username to be validated
 * @returns boolean - Indicates whether the Instagram username is valid or not
 */
export const isValidInstagram = (instagramUsername?: string): boolean => {
  if (!instagramUsername) {
    return false;
  }

  const usernameWithoutAt = instagramUsername.slice(1); // Remove the "@" symbol from the username
  const usernameLength = usernameWithoutAt.length;

  if (!instagramUsername.startsWith('@') || usernameLength < 3) {
    return false;
  }

  // Regular expression pattern to match the allowed characters for the Instagram username
  const regexPattern = /^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*$/;

  return regexPattern.test(usernameWithoutAt);
};
