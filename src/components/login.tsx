import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import '../style.css';
import '../util.css';
import '../main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import jwt from 'jsonwebtoken';
interface Props {
  oncell: Function;
}

export default function Login(props: Props) {
  const [email, setEmail]: any = useState();
  const [password, setPassword]: any = useState();
  const state = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  useEffect(() => {}, [state]);
  console.log(state.books.message);

  async function detailsSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log(state.books.user);
    const v: any =state.books.user.filter((data: any) =>
      data.password === password
    );
    console.log(v);

    if (v[0]) {
      let token = jwt.sign({ authorization: email }, 'verySecretKey', { expiresIn: '1h' });
      localStorage.setItem('token', token);
      dispatch({ type: 'USER_LOGIN', payload: {authenticate: true, token: token, message:'You Have Successfully Logged In :)'} });
      console.log(state);
    } else  {
      dispatch({ type: 'USER_LOGIN', payload: {authenticate: false, token: '', message:'You have entered the wrong credentials! Please try again'} });

    }
  }

  if (state.books.authenticate) {
    console.log(state);
    props.oncell(true);
  } else {
    props.oncell(false);
  }
  return (
    <Router>
      <div>
        <link href='http://davidhulme.name/wp-content/uploads/2016/08/cropped-Books-Header-1-1.jpg' rel='stylesheet' />
        <div className='main-content main-font'>
          <div className='limiter main-font'>
            <div className='container-login100 newmargin'>
              <div className='wrap-login100'>
                <div className='login100-form-title'>
                  <span className='login100-form-title-1'>{state.books.message}</span>
                </div>
                <form className='login100-form validate-form'>
                  <div className='wrap-input100 validate-input m-b-26' data-validate='Username is required'>
                    <span className='label-input100'>Email</span>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                        setEmail(e.target.value)
                      }
                      className='input100'
                      type='text'
                      name='username'
                      placeholder='Enter email addreess'
                    />
                    <span className='focus-input100'></span>
                  </div>
                  <div className='wrap-input100 validate-input m-b-18' data-validate='Password is required'>
                    <span className='label-input100'>Password</span>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                        setPassword(e.target.value)
                      }
                      className='input100'
                      type='password'
                      name='pass'
                      placeholder='Enter password'
                    />
                  </div>
                  <div className='flex-sb-m w-full p-b-30'>
                    <div className='contact100-form-checkbox'>
                      {/* <input className='input-checkbox100' id='ckb1' type='checkbox' name='remember-me' />
                      <label className='label-checkbox100'>Remember me</label> */}
                    </div>
                    <div>
                      <a href='#' className='txt1'>
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className='container-login100-form-btn'>
                    <button onClick={(e) => detailsSubmit(e)} className='login100-form-btn'>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
