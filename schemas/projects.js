import {FcOpenedFolder} from 'react-icons/fc';

export default {
    title: 'Projects',
    name: 'projects',
    type: 'document',
    icon: FcOpenedFolder,
    fields: [
        {
            title: 'Title',
            name: 'title',  
            type: 'string',
        },
        {
            description: 'Description',
            name: 'description',
            type: 'text',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url',
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ]
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
    preview: {
        select: {
            title: 'title',
            //media: 'image'
        }
    }
}