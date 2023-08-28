import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  start_time: any;
  end_time: any;
  day_of_week: string;
  staff_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  day_of_week?: string;
  staff_id?: string;
  organization_id?: string;
}
