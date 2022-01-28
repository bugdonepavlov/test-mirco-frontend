declare enum LoadingState {
  idle = "idle",
  fulfilled = "fulfilled",
  failled = "failled",
  pending = "pending",
}

interface IError {
  statusCode: number;
  message?: string | any;
}
