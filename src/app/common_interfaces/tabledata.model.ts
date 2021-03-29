export interface TableData {
   minmax: MinMax;
   table: Table;
   excel: Excel;
   column_search: ColSearch;
  }

declare type SupportedExtensions = 'pdf' | 'png' | 'xlsx' | 'xls' | 'docx' | 'doc' | 'txt' | 'csv' | 'json' | 'xml';

 // tslint:disable-next-line:interface-over-type-literal
 type MinMax = {
   need_minmax: true,
  //  issue_date_column_no?: string,
   columns_def: ColDef[]
 } | {
  need_minmax: false,
  // issue_date_column_no?: never,
  columns_def?: never
}

 // tslint:disable-next-line:interface-over-type-literal
 type Table = {
   is_datatable: boolean,
   table_id: string,
   sum_cols?: string;
   have_non_sort_col: true,
   non_sort_cols: string,
   need_colour: true,
   color_cols: string,
   need_header: true,
   header: string
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  have_non_sort_col: false,
  non_sort_cols?: never,
  need_colour: true,
  color_cols: string,
  need_header: true,
  header: string
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  have_non_sort_col: true,
  non_sort_cols: string,
  need_colour: false,
  color_cols?: never,
  need_header: true,
  header: string
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  have_non_sort_col: false,
  non_sort_cols?: never,
  need_colour: false,
  color_cols?: never,
  need_header: true,
  header: string
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  have_non_sort_col: true,
  non_sort_cols: string,
  need_colour: true,
  color_cols: string,
  need_header: false,
  header?: never
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  total_number_of_columns: number,
  have_non_sort_col: false,
  non_sort_cols?: never,
  need_colour: true,
  color_cols: string,
  need_header: false,
  header?: never
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  have_non_sort_col: true,
  non_sort_cols: string,
  need_colour: false,
  color_cols?: never,
  need_header: false,
  header?: never
} | {
  is_datatable: boolean,
  table_id: string,
  sum_cols?: string;
  have_non_sort_col: false,
  non_sort_cols?: never,
  need_colour: false,
  color_cols?: never,
  need_header: false,
  header?: never
}

interface ColDef {
  name: string;
  index: string;
}

// tslint:disable-next-line:interface-over-type-literal
type Excel = {
  need_export_to_excel: true,
  export_filename: string,
  type: SupportedExtensions
} | {
  need_export_to_excel: false,
  export_filename?: never,
  type?: never
}

// tslint:disable-next-line:interface-over-type-literal
type ColSearch = {
  need_column_search: true,
  cols: string
} | {
  need_column_search: false,
  cols?: never
}
