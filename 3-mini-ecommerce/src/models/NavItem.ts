export type NavItem = {
    path: string;
    label: string;
    component: React.LazyExoticComponent<React.ComponentType> | React.ComponentType;
    private?: boolean; // If true, the route is private and requires authentication
};

export type NavItems = NavItem[]; 