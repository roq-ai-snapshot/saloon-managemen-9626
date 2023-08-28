import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  staff_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
