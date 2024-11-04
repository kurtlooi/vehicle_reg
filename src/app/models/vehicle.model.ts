export interface Vehicle {
  uuid: string;
  status: string;
  startDate: Date;
  endDate: Date;
  time: string;
  userUuid: string;
  brand: string;
  type: string;
  group: 'personal' | 'commercial';
}
