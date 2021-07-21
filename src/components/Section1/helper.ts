import moment from 'moment';

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export const premiumsOptions = [
  {value: 200000, title: 'S$200'},
  {value: 400000, title: 'S$400'},
  {value: 500000, title: 'S$500'},
  {value: 800000, title: 'S$800'},
  {value: 1000000, title: 'S$1000'},
]

export const yearsOptions = [
  {value: 5, title: '5'},
  {value: 6, title: '6'},
  {value: 7, title: '7'},
  {value: 8, title: '8'},
  {value: 9, title: '9'},
  {value: 10, title: '10'},
]

export const formatYYYYMMDD = (date: string) => {
  return moment(new Date(date)).format('YYYY-MM-DD')
}