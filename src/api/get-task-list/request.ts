import { SortField, SortOrder } from 'models';


export interface GetTaskListRequestParams {
	sort_field?: SortField;
	sort_direction?: SortOrder;
	page?: number;
}
