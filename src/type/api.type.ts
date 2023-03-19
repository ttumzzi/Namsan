import { TLanguage } from './intl.type';
import { QueryWhereOptions, QueryOrderByOptions } from '../api/index.api';
import { IMember } from '@Interface/api.interface';
Intl;

export type NewsRequest = Partial<{
  id: string;
  page: number;
  offset: number;
  conditions: QueryWhereOptions[];
  orderby: QueryOrderByOptions;
}>;

export type MembersSearchRequest = Partial<{
  name: string;
  position: string;
  businessField: string;
}> & { language: TLanguage };
