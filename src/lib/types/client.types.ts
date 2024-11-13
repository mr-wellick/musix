export interface Props {
  user?: { first_name: string; last_name: string };
  onLogout: () => void;
}
