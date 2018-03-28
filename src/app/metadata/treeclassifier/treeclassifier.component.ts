import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeclassifier',
  templateUrl: './treeclassifier.component.html',
  styleUrls: ['./treeclassifier.component.css']
})
export class TreeclassifierComponent implements OnInit {
  files = {
    'data': [
      {
        'label': '浪潮集团',
        'data': 'Inspur Group',
        'expanded': true,
        'expandedIcon': 'fa-folder-open',
        'collapsedIcon': 'fa-folder',
        'children': [{
          'label': '浪潮国际',
          'data': 'ESG',
          'expanded': true,
          'expandedIcon': 'fa-folder-open',
          'collapsedIcon': 'fa-folder',
          'children': [{
            'label': '平台与技术部',
            'icon': 'fa-file-word-o',
            'data': 'Platform Department',
            'expanded': true,
            'expandedIcon': 'fa-folder-open',
            'collapsedIcon': 'fa-folder',
            'children': [
              {
                'label': '云平台研发部',
                'icon': 'fa-file-word-o',
                'data': 'Platform Department',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [
                  {
                    'label': 'Baas平台组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '开发框架组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '移动应用平台组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '云服务支撑平台组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  }
                ]
              },
              {
                'label': '集成平台研发部',
                'icon': 'fa-file-word-o',
                'data': 'Platform Department',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [
                  {
                    'label': '工作流与性能组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '数据交换平台组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '业务流平台组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                ]
              },
              {
                'label': '运行平台研发部',
                'icon': 'fa-file-word-o',
                'data': 'Platform Department',
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [
                  {
                    'label': '生命周期管理组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '运行框架组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  }
                ]
              },
              {
                'label': '开发平台研发部',
                'icon': 'fa-file-word-o',
                'data': 'Platform Department',
                'expanded': true,
                'expandedIcon': 'fa-folder-open',
                'collapsedIcon': 'fa-folder',
                'children': [
                  {
                    'label': 'Web组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': 'Winform组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  },
                  {
                    'label': '构件组',
                    'icon': 'fa-file-word-o',
                    'data': 'Platform Department',
                    'expandedIcon': 'fa-folder-open',
                    'collapsedIcon': 'fa-folder',
                  }
                ]
              }
            ]
          }]
        }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
