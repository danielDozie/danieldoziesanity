"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [{
    title: 'Title',
    name: 'title',
    type: 'string'
  }, {
    description: 'Description',
    name: 'description',
    type: 'text'
  }, {
    title: 'Image',
    name: 'image',
    type: 'image',
    options: {
      hotspot: true
    }
  }, {
    title: 'Link',
    name: 'link',
    type: 'url'
  }, {
    title: 'Tags',
    name: 'tags',
    type: 'array',
    of: [{
      type: 'string'
    }],
    options: {
      layout: 'tags'
    }
  }, {
    title: 'Content',
    name: 'content',
    type: 'array',
    of: [{
      type: 'block'
    }]
  }],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};
exports["default"] = _default;