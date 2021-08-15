export default {
  type: 'object',
  name: 'mailchimp',
  title: 'Mailchimp newsletter signup',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading',
    },
     {
      name: 'En ekstra subtitle',
      type: 'string',
      title: 'SubheadingBareTull',
    },
    {
      name: 'actionUrl',
      type: 'url',
      title: 'URL to Mailchimp signup',
      description:
        'URL for the Mailchimp signup form. Remember to your domain in your mailchimp settings to avoid CORS errors.',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Mailchimp newsletter signup section',
      };
    },
  },
};
