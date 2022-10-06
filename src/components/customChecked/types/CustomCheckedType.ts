export type CustomCheckedType = {
  tags: string;
  options: any[];
  checkedElement: any[];
  onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
};
