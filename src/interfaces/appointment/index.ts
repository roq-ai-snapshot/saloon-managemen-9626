import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  guest_id: string;
  organization_id: string;
  status: string;
  appointment_time: any;
  service_type: string;
  staff_id: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_guest_idTouser?: UserInterface;
  organization?: OrganizationInterface;
  user_appointment_staff_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_id?: string;
  organization_id?: string;
  status?: string;
  service_type?: string;
  staff_id?: string;
}
