import React from 'react'
import BlogArticle from '../../components/blog-article/BlogArticle'
import BlogMenu from '../../components/blog-menu/BlogMenu'
import BasicPage from '../../components/basic-page/BasicPage'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

export default class BlogMenuPage extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <BasicPage>
            <Route path="/blog/:id" component={BlogArticle}/>
            <Route exact path="/blog" component={BlogMenu}/>
          </BasicPage>
        </BrowserRouter>
      </div>
    );
  }
}
