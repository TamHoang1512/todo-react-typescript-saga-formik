export type ResponseState<T> = {
  response: T;
  isLoading: boolean;
  error?: any;
};
