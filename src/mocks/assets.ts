type AssetsMocks = {
  id: string
  createdAt: Date
  name: string
  currency: string
  category: string
  startDate: string
  isActive: boolean
  deactivationDate?: string
}

export const assetsMocks: AssetsMocks[] = [
  {
    id: '1',
    createdAt: new Date('2022-12-14T21:45:03.782Z'),
    name: 'test 1',
    currency: 'USD',
    category: 'Speculative',
    startDate: '2017-12-01',
    isActive: true,
  },
  {
    id: '2',
    createdAt: new Date('2017-12-14T21:45:03.782Z'),
    name: 'test 2',
    currency: 'EUR',
    category: 'Real Estate',
    startDate: '2019-10-01',
    isActive: true,
  },
  {
    id: '3',
    createdAt: new Date('2012-12-14T21:45:03.782Z'),
    name: 'test 3',
    currency: 'EUR',
    category: 'Current Accounts/ Money markets',
    startDate: '2012-10-01',
    isActive: false,
    deactivationDate: '2021-01-01',
  },
]
