/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'generic' {
  export {};
}

declare module 'generic/commonTypes' {
  export enum LoadingState {
    idle = 'idle',
    fulfilled = 'fulfilled',
    failled = 'failled',
    pending = 'pending',
  }

  export {};
}
