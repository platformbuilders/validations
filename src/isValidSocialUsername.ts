/**
 * Validates a social media username based on the following criteria:
 * * Must start with a specific symbol (e.g., "@", "#", "$")
 * * Must have a minimum length of characters (excluding the symbol)
 * * Only allows alphanumeric characters and underscores
 * * Empty or undefined values are considered invalid
 * @param username - The social media username to be validated
 * @param minLength - The minimum length of the username (excluding the symbol)
 * @param symbol - The symbol that the username should start with (e.g., "@", "#", "$")
 * @returns boolean - Indicates whether the social media username is valid or not
 */
export const isValidSocialUsername = (
  username?: string,
  minLength = 3,
  symbol = '@',
): boolean => {
  if (!username) {
    return false;
  }

  const usernameWithoutSymbol = username.slice(symbol.length); // Remove the symbol from the username
  const usernameLength = usernameWithoutSymbol.length;

  if (!username.startsWith(symbol) || usernameLength < minLength) {
    return false;
  }

  // Regular expression pattern to match the allowed characters for the social media username
  const regexPattern = /^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*$/;

  return regexPattern.test(usernameWithoutSymbol);
};
