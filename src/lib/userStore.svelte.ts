export type User = {
  first_name: string;
  last_name: string;
};

export const userStore = $state<{ data: User | null }>({ data: null });
