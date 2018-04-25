import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
import './App.css'

class CreateBook extends Component {
	handleSubmit = (e) => {
   		e.preventDefault()
      const values = serializeForm(e.target, { hash: true })
      if (this.props.onCreateBook)
          this.props.onCreateBook(values)
  	}

  render() {
    return (
      <div>
        <Link className='close-create-book' to='/'>Close</Link>
        <form onSubmit={this.handleSubmit} className='create-book-form'>
          <ImageInput
            className='create-book-avatar-input'
            name='smallThumbnail'
            maxHeight={64}
          />
          <div className='create-book-details'>
            <input type='text' name='title' placeholder='title'/>
            <input type='text' name='author' placeholder='author'/>
            <label>current state:</label>
            <select name="shelf" style={{width: '200px', height: '30px'}}>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
            <br />
            <button>Add Book</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateBook