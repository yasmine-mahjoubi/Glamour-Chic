import React,{useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup} from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxServSizeRef = useRef(0)

    const searchHandler = ()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxServSize = maxServSizeRef.current.value

        if(location==='' || distance==='' || maxServSize==='')
        {
            return alert('Tous les champs sont obligatiore !')
        }
    }

    return(
        <Col lg="12">
            <div className="search__bar">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i class="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Localisation</h6>
                            <input type="text" placeholder='Où allez-vous' ref={locationRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i class="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span><i class="ri-group-line"></i></span>
                        <div>
                            <h6>Maximum de personne</h6>
                            <input type="number" placeholder='0' ref={distanceRef} />
                        </div>
                    </FormGroup>



                    <span className="saerch__icon" type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    )
}

export default SearchBar