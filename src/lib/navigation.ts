export interface NavItem {
  label: string;
  href : string
}

export const navItem: NavItem[] = [
  {label: "Home", href: "/"},
  {label: "About Me", href: "/about"},
  {label: "Services", href: "/services"},
  {label: "Portfolio", href: "/portfolio"},
  {label: "Playground", href: "/playground"},
  {label: "Contact", href: "/contact"}
]