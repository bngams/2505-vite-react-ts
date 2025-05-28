
export type NavItem = {
    component: React.LazyExoticComponent<React.ComponentType> | React.ComponentType,
    path: string,
} 

export type NavItems = NavItem[];