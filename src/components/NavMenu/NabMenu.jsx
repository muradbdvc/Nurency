import React from 'react'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nabmenu.css'

const navitems = [
    {
        id:1,
        title:'Service',
        path:'/service',
        cName: 'nav-item'
    },
    {
        id:2,
        title:'About',
        path:'/about',
        cName: 'nav-item'
    },
    {
        id:3,
        title:'Marketplace',
        path:'/marketplace',
        cName: 'nav-item'
    },
    {
        id:4,
        title:'Blog',
        path:'/blog',
        cName: 'nav-item'
    },
    {
        id:5,
        title:'Support',
        path:'/support',
        cName: 'nav-item'
    },
    {
        id:6,
        title:'Icon',
        path:'/icon',
        cName: 'nav-item'
    }
];

function NabMenu() {
    
  return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
               <img src="Assets/Logo.png" alt="site logo" />
            </Link>
            <ul id='navbar'>
                {navitems.map(item=>{
                    const {id, path, title} = item;
                    return(
                    <li key={id} className='item.cName'>
                        <Link to={path}>
                            {title}
                        </Link>
                    </li>
                    )
                })}
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Lat's Talk<span className='w-5 h-5 bg-white rounded-full ml-3'>4h</span></button>
            </ul>
        </nav>
    </div>
  )
}

export default NabMenu

