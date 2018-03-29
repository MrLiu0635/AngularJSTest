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
        icon: 'Documents_58635.png',
        classifier: 'base',
        description: '业务实体是什么呢'
      },
      {
        id: '02',
        name: '业务字段',
        icon: 'Documents_58635.png',
        classifier: 'workflow',
        description: '业务字段是什么呢'
      },
      {
        id: '03',
        name: '数据对象',
        icon: 'Documents_58635.png',
        classifier: 'business',
        description: '数据对象是一种描述表结构的元数据。'
      }
    ];
    const classifier = {
      'data': [
        {
          'label': '全部元数据类型',
          'data': 'all metadata',
          'expanded': true,
          'expandedIcon': 'fa-folder-open',
          'collapsedIcon': 'fa-folder',
          'children': [{
            'label': '基础元数据',
            'data': 'base',
            'expandedIcon': 'fa-folder-open',
            'collapsedIcon': 'fa-folder'
          }, {
              'label': '工作流元数据',
              'data': 'workflow',
              'expandedIcon': 'fa-folder-open',
              'collapsedIcon': 'fa-folder'
          }, {
            'label': '业务元数据',
            'data': 'business',
            'expandedIcon': 'fa-folder-open',
            'collapsedIcon': 'fa-folder'
          }
          ]
        }
      ]
    };
    return { heroes, templates, classifier };
  }
}
