import React, {useState, useEffect} from 'react'

import axios from 'axios';

import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Books from './components/Books';
import Footer from './components/Footer';

function App() {
  const [books, setBooks] = useState([])
  const [booksToDisplay, setBooksToDisplay] = useState([])
  const [loading, setLoading] = useState(true)

  const [filterBy, setFilterBy] = useState(1)
  const [searchContent, setSearchContent] = useState("")



  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
    useEffect(() => {
      axios.get('https://nic-books-api.herokuapp.com/books/')
      .then(res => {
        setBooks(res.data)
        setBooksToDisplay(res.data)
        sleep(4000).then(() => {
          setLoading(false)
      });
        
      })
      .catch(err => {
  
      })
    }, [])
 
    const updateFilter = e =>{
      setFilterBy(e.target.value)
    }

    const updateSearchContent = e =>{
      setSearchContent(e.target.value)
    }

    const filteringBooks = (e) =>{
      if(filterBy == 1){
        setBooksToDisplay(books.filter(book => {
          return(
            book.name.toLowerCase().includes(searchContent.toLowerCase()) ||
            book.author.toLowerCase().includes(searchContent.toLowerCase()) ||
            book.category.toLowerCase().includes(searchContent.toLowerCase())
          )
        }))
      }
      if(filterBy == 2){
        setBooksToDisplay(books.filter(book => book.name.toLowerCase().includes(searchContent.toLowerCase())))
      }
      if(filterBy == 3){
        setBooksToDisplay(books.filter(book => book.author.toLowerCase().includes(searchContent.toLowerCase())))
      }
      if(filterBy == 4){
        setBooksToDisplay(books.filter(book => {
          return(
            book.name.toLowerCase().includes(searchContent.toLowerCase()) ||
            book.author.toLowerCase().includes(searchContent.toLowerCase())
          )
        }))
      }
      if(filterBy == 5){
        setBooksToDisplay(books.filter(book => book.category.toLowerCase().includes(searchContent.toLowerCase())))
      }


      
    }



  return (
    <div className="App">
      <Navigation/>

      <Header
        filterBy={filterBy}
        updateFilter = {updateFilter}
        searchContent={searchContent}
        updateSearchContent={updateSearchContent}
        filteringBooks = {filteringBooks}
      />

      <Books 
        books={books} 
        booksToDisplay={booksToDisplay} 
        loading={loading} 
      />

      <Footer books={books} booksToDisplay={booksToDisplay}/>
    </div>
  );
}

export default App;
