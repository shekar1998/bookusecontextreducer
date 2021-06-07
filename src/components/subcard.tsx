import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { BookContext } from '../context/BookContext';

import '../index.css';

interface MatchParams {
  id: any;
}

interface Props {}

export default function Subcard(props: Props) {
  const state = useContext(BookContext);
  const id = useParams<MatchParams>();
  const h: any = id;
  const title = h['val'];
  const data = state.books.book.find((book :any) => book.title === title)

  return (
    <div>,
          <div>
            <div className='card card-cascade wauthorer reverse'>
              <div className='view view-cascade overlay'>
                <img className='card-img-top cardimg2' src={data.image} alt='Card image cap' />
              </div>
              <div className='card-body cardBody card-body-cascade text-center'>
                <h4 className='card-title textstyle1'>
                  <strong>{data.title}</strong>
                </h4>
                <h6 className='font-weight-bold indigo-text textstyle py-2'>{data.details}</h6>
              </div>
            </div>
          </div>
    </div>
  );
}


