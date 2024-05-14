import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const Movies_Breadcrumb = ({ data }) => {
    return (
        <Breadcrumb className='d-flex justify-content-md-end '>
            {
                data.map((CurElem) => {
                    return (
                        <Breadcrumb.Item key={CurElem.title} >
                            <Link to={CurElem.link} >
                                <span className='text-white fw-500'>{CurElem.title}</span>
                            </Link>
                        </Breadcrumb.Item>
                    );
                })
            }
        </Breadcrumb>
    );
};

export default Movies_Breadcrumb;
