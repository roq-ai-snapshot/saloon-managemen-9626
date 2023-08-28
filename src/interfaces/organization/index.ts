import { AppointmentInterface } from 'interfaces/appointment';
import { ScheduleInterface } from 'interfaces/schedule';
import { TaskInterface } from 'interfaces/task';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  schedule?: ScheduleInterface[];
  task?: TaskInterface[];
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    schedule?: number;
    task?: number;
    transaction?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
