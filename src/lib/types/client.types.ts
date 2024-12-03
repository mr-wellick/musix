export interface Props {
  data: { first_name: string; last_name: string } | null;
  onLogout: () => void;
}
