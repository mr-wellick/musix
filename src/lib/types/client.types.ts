export interface Props {
  user: { first_name: string; last_name: string } | null;
  onLogout: () => void;
}
