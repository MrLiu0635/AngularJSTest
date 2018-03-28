import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const templates = [
      {
        id: '01',
        name: '业务实体',
        icon: 'Documents_58635.png'
      },
      {
        id: '02',
        name: '业务字段',
        icon: 'Documents_58635.png'
      },
      {
        id: '03',
        name: '数据对象',
        icon: 'Documents_58635.png'
      }
    ];
    return { heroes, templates };
  }
}
