export type NavItem = {
    path: string;
    label: string;
    component: React.LazyExoticComponent<React.ComponentType> | React.ComponentType;
};

export type NavItems = NavItem[]; 