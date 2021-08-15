export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61197eaed7c0cf15762f0798',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1ga58ey4',
                  apiId: '65d35ac6-1969-4460-9a18-293638988aeb'
                },
                {
                  buildHookId: '61197eae8c7fc8df60e5c3b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5r6ryvre',
                  apiId: 'ddfe1b57-f050-4dd8-a8e2-fc84f878697d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geirrlod/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5r6ryvre.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
