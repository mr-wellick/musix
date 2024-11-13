import { writable } from 'svelte/store';

export type User = {
  first_name: string;
  last_name: string;
};

export const userStore = writable<User | null>(null);
