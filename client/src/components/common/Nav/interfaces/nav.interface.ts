export interface INav {
  navItems: {
    title: string;
    handler: () => void;
  }[];
}
