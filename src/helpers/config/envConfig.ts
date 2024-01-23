export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://shohojogi-com-backend-mongodb.vercel.app/api/v1"
  );
};
