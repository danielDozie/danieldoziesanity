import {FcLink} from 'react-icons/fc'

export default {

    title: 'Menu',
    name: 'menu',
    type: 'document',
    icon: FcLink,
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'link',
            name: 'link',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
              }
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
          },
    ]
}