// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

type User = {
  first_name: string;
  last_name: string;
};

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      MUSIX_USER: { user: User | null };
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
