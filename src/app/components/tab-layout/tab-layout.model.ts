export interface TabLayout {
    tab_heading: string;
    tab_subheading?: string;
    need_card: boolean,
    tab_id?: string;
    tab_content_component_selector_data: TabData[];
  }

  export interface TabData {
    tab_name: string;
    is_active?: boolean;
  }
