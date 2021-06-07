import React, { Component, ReactElement, SelectHTMLAttributes, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, RouteComponentProps } from 'react-router-dom';
import Star from './star';
import '../index.css';
import { BookContext } from '../context/BookContext';
import jwt from 'jsonwebtoken';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


interface Props {
  paramaters?: any;
  onValue?: Function;
  disp: Function;
}

export default function Card(props: Props) {
  const state = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  let value: any = state.books.book;



  const opt = {
    select: props.paramaters.select,
    value: props.paramaters.value,
  };
    const select= props.paramaters.select;
    const search= props.paramaters.value;

useEffect(() => {
  if(select && search)
  searchFunction(select, search)
},[props.paramaters])

  // function detailsSubmit(e: SyntheticEvent, id: any) {
  //   e.preventDefault();
  //   console.log(id);
  //   dispatch({ type: 'REMOVE_BOOK', id: id });
  //   // state.book.book = state.books.book;
  // }

  async function searchFunction(select:any, value:any)
  {
    if (select === 'author') {
      const data1 = state.books.book.filter((data: any) => data.author === value);
      dispatch(({type: 'BOOK_DETAILS', payload:data1}))
    } else if (select === 'title') {
      const data1 = state.books.book.filter((data: any) => data.title === value);
      dispatch(({type: 'BOOK_DETAILS', payload:data1}))
    } else if (select === 'price') {
      const data1 = state.books.book.filter((data: any) => data.price === value);
      dispatch(({type: 'BOOK_DETAILS', payload:data1}))
    }
  }
  const token: any = localStorage.getItem('token')!;
  async function removeBook(e: SyntheticEvent, id:any){
    e.preventDefault();
    console.log('Started 😀');
    
    if (token != '') {
      try {
        console.log('enntered');
        console.log(token);
        const decode = jwt.verify(token, 'verySecretKey');
        console.log(decode);
        const requestUser = state.books.user.reduce((data: any) => {
          // @ts-ignore
          console.log(decode.authorization + '---' + state.books.user);
          // @ts-ignore
          return decode.autherization === data.email;
        });
        console.log(requestUser);
        if (requestUser) {
          state.books.message = 'Successful Access';
        }
      } catch {
        state.books.message = 'Invalid Token';
        console.log(state);
      }
    } else {
      state.books.message = 'Unauthorized Access';
    }
    if (state.books.message === 'Successful Access') {

      const d = state.books.book.filter((book: any) => book.id !== id);
      console.log(d);
      dispatch({ type: 'REMOVE_BOOK', payload: d})
    } else if(state.books.message === 'Unauthorized Access' || state.books.message === 'Invalid Token' )
    dispatch({ type: 'REMOVE_BOOK', payload: state.books.book})
  }

  return (
    <div>
      
      {value.map((val: any) => {
        return (
          <div>
            <div className='card-group'>
              <div className='card mb-4'>
                <div className='view overlay'>
                  <ul className='showcase'>
                    <li>
                      <figure className='photo'>
                        <img className='card-img-top' src={val.image} alt='Card image cap' />
                      </figure>
                    </li>
                  </ul>
                  <a href='#!'>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>
                <div className='card-body'>
                  <h4 className='card-title localtext'>
                    <abbr className='abbr' title={val.title}>
                      {val.title}
                    </abbr>
                  </h4>
                  <h5 className='card-text localtext1'>
                    <abbr className='abbr' title={val.author}>
                      {val.author}
                    </abbr>
                  </h5>
                  <h5 className='card-text'>
                    <span>
                      Rating: {val.ratings} <Star current={val.ratings} outof={5} minof={1} />
                    </span>
                  </h5>
                  <Link to={`/books/${val.title}`}>
                    <button type='button' className='btn btn-primary btn-md'>
                      Read more
                    </button>
                  </Link>
                  <button
                    type='button'
                    onClick={(e) => removeBook(e, val.id)}
                    className='btn btn-primary btn-md2'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
}
// onClick={(e) => detailsSubmit(e, val.id)}
