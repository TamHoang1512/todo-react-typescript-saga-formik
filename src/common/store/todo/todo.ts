// add some method like RequestPayload,
//ResponsePayload for Request and Response;

export type Request = {
  id: string;
  title: string;
};

export type Response = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};
