export enum LoadingState {
  idle = 'idle',
  fulfilled = 'fulfilled',
  failled = 'failled',
  pending = 'pending',
}

export interface IError {
  statusCode: number;
  message?: string | any;
}
