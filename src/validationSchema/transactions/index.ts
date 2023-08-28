import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  transaction_date: yup.date().required(),
  transaction_type: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  accountant_id: yup.string().nullable().required(),
});
