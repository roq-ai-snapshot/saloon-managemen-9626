interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Manager', 'Staff Member', 'Accountant'],
  tenantName: 'Organization',
  applicationName: 'saloon management application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
