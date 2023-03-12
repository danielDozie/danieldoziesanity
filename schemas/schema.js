// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//content imports
import pages from './pages'
import blog from './blog'
import author from './author'
import menu from './menu'
import logo from './logo'
import services from './services' 
import messages from './messages'

//Re-usable components import
import workSection from './components/workSection'
import heroSection from './components/heroSection'
import techStack from './components/techStack'
import button from './components/button'
import block from './components/block'
import text from './components/text'
import blogs from './components/blogs'
import logoIcons from './components/logoIcons'
import service from './components/service'
import projects from './projects'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'badtfolio',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    //Document/Contents Types
    menu,
    pages,
    blog,
    services,
    messages,
    author,
    logo,
    projects,
    
    //Objects/components Types      
    workSection,
    heroSection,
    techStack,
    button,
    text,
    block,
    blogs,
    logoIcons,
    service,
    
  ]),
})
