export type TMenuItem = { name: string; href: string; nested?: boolean };

export type TMenu = {
  menuItems: TMenuItem[];
  menuItemClassName?: string;
} & React.HTMLAttributes<HTMLElement>;
