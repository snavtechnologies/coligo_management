export interface DBOperation {
    data: object;
    table_name: string;
    db?: string;
    columns_to_retrieve?: string,
    condition_string?: string;
    condition_column?: string;
  }
  export interface DBOperationBinder {
    data?: object;
    link?: string;
    table_name: string;
    db?: string;
  }
