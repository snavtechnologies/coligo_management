export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
  }
  export interface ChildrenItems {
    path: string;
    title: string;
    external_url?: string;
    new_tab?: boolean;
    ab: string;
    type?: string;
  }
