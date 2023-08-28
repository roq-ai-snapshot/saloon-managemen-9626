const mapping: Record<string, string> = {
  appointments: 'appointment',
  organizations: 'organization',
  schedules: 'schedule',
  tasks: 'task',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
