export const checkValidateData = (
  email: string,
  password: string,
): string | null => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid ";
  if (!isPasswordValid) return "Password is not valid ";
  return null;
};
