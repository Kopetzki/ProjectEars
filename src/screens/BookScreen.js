import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Books from '../components/Books'
import { listBooks } from '../actions/bookActions'

//import axios from 'axios'


/*BookScreen function will fetch data and pass to render*/
  /*   async function fetchBooks(){
            const {data} = await axios.get('/api/books')
            setBooks(data)
        }
        fetchBooks()*/

    function BookScreen(){
    const dispatch = useDispatch()
    const bookList = useSelector(state => state.bookList)
    const { error, loading, books} = bookList
   // const [books, setBooks] = useState([])

    useEffect(() => { 
        dispatch(listBooks())
   
    }, [dispatch])

    
    return (
        <div>
            <h1 align="center">Flippin Awesome Books</h1>
                { loading ? <h2>Loading....</h2>
                    : error ? <h3>{error}</h3>
                    : <Row>
                    {books.map(books => (
                            <Col key={books._id} sm={12} md={6} lg={4} xl={3}>
                               <Books books ={books}/> 
                            </Col>
        
                        ))}
                    </Row>
                 }
            
        </div>
    )
}
export default BookScreen