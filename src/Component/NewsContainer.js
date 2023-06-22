import React, { Component } from 'react'
import EachNewsItem from './EachNewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export default class NewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "abc",
      article: [],
      loader: false,
      page: 1,
      pageSize: 16,
      totalResults: 0,
    }
    document.title = `Flash Focus -${this.props.category}`;
  }

  fetchMoreData= async ()=>{
    this.setState({page:this.state.page+1,loader:true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=adcc55bfeab84a9c9a5bd3a96e5e363b&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loader:false
    });
  }

  async componentDidMount() {
    this.fetchData();
  }
  
  async fetchData() {
    // adcc55bfeab84a9c9a5bd3a96e5e363b
    // 8cc6a7cd1f9f45fe8e10095de1e62c0c
    this.setState({loader:true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=adcc55bfeab84a9c9a5bd3a96e5e363b&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loader:false
    });
  }

  render() {


    return (
      <>
        
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          // loader={<Spinner/>}
          
        >
        <div className='container my-4'>

          <div className='row'>
            {
              this.state.article.map((element) => {
                return (
                  <div key={element.url} className='col-md-3 my-3'>
                    <EachNewsItem title={element.title} newsUrl={element.url} description={element.description} author={element.author}
                      date={element.publishedAt}
                      imageUrl={element.urlToImage ? element.urlToImage : `https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg`} />
                  </div>
                )
              })}
          </div>
          {this.state.loader && <Spinner/>}
        </div>
        </InfiniteScroll>
      </>
    )
  }
}



// --------------chatGpt---------------------

// import React, { Component } from 'react';
// import EachNewsItem from './EachNewsItem';

// export default class NewsContainer extends Component {
//   state = {
//     article: [],
//     loader: false,
//     page: 1,
//     pageSize: 16,
//     totalResults: 0,
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     const { page, pageSize } = this.state;
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8cc6a7cd1f9f45fe8e10095de1e62c0c&page=${page}&pagesize=${pageSize}`;
//     const data = await fetch(url);
//     const parsedData = await data.json();
//     this.setState({
//       article: parsedData.articles,
//       totalResults: parsedData.totalResults,
//     });
//   };

//   handleNextClick = async () => {
//     const { page, pageSize, totalResults } = this.state;
//     const buff = Math.ceil(totalResults / pageSize);
//     if (page + 2 > buff) {
//       return;
//     }
//     const nextPage = page + 1;
//     await this.fetchDataForPage(nextPage);
//     this.setState({ page: nextPage });
//   };

//   handlePrevClick = async () => {
//     const { page, pageSize } = this.state;
//     if (page - 1 < 1) {
//       return;
//     }
//     const prevPage = page - 1;
//     await this.fetchDataForPage(prevPage);
//     this.setState({ page: prevPage });
//   };

//   fetchDataForPage = async (page) => {
//     const { pageSize } = this.state;
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8cc6a7cd1f9f45fe8e10095de1e62c0c&page=${page}&pagesize=${pageSize}`;
//     const data = await fetch(url);
//     const parsedData = await data.json();
//     this.setState({
//       article: parsedData.articles,
//       totalResults: parsedData.totalResults,
//     });
//   };

//   render() {
//     const { article, page } = this.state;

//     return (
//       <div className='container my-4'>
//         <div className='row'>
//           {article.map((element) => (
//             <div key={element.url} className='col-md-3 my-3'>
//               <EachNewsItem
//                 title={element.title}
//                 newsUrl={element.url}
//                 description={element.description}
//                 imageUrl={
//                   element.urlToImage ||
//                   'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg'
//                 }
//               />
//             </div>
//           ))}
//         </div>

//         <div className='container d-flex justify-content-between'>
//           <button
//             style={{ display: `${page === 1 ? 'none' : 'initial'}` }}
//             type='button'
//             className='btn btn-dark'
//             onClick={this.handlePrevClick}
//           >
//             Prev
//           </button>
//           <button
//             type='button'
//             className='btn btn-dark'
//             onClick={this.handleNextClick}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

