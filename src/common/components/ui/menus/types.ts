export type TMenu = {
  menuItems: TMenuItem[];
} & React.HTMLAttributes<HTMLDivElement>;

export type TMenuItem = { name: string; href: string };
