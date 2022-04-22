import React, { useContext } from 'react';
import { AppBar,Container,IconButton,Toolbar,Typography } from '@mui/material';
import { ImCart } from "react-icons/im";
import { KnjigaContext } from '../../store/knjigaContext';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

function NavBar() {


  const knjigeCtx=useContext(KnjigaContext);
  const navigate=useNavigate();
  return <div >
       <AppBar >
         <div className='navBar'>
        <Container >
            <Toolbar>
                <Link style={{color:'black'}} to='/'><Typography variant='h6'>Ponuda knjiga</Typography></Link>
                <a className="cart-items">
                  <IconButton onClick={()=>navigate('/korpa')}><ImCart style={{marginLeft: 10}}/></IconButton>
                  <div className="cart-num">{knjigeCtx.ukupanBrojKnjiga}</div>
                </a>
            </Toolbar>
        </Container>
        </div>
    </AppBar>
  </div>;
}

export default NavBar;
