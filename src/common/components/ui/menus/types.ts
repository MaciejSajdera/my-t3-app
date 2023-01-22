export type TMenu = {
  menuItems: TMenuItem[];
  menuItemClassName?: string;
} & React.HTMLAttributes<HTMLElement>;

export type TMenuItem = { name: string; href: string };
