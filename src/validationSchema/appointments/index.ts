import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  status: yup.string().required(),
  appointment_time: yup.date().required(),
  service_type: yup.string().required(),
  guest_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
  staff_id: yup.string().nullable().required(),
});
