import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'

export function Favourites(props) {
    const {myFavorites} = props
  return (
    <div>
        {myFavorites.map(c => 
            <Card
                id={c.id}
                key={c.key}
                name={c.name}
                image={c.image}
                onClose={c.onClose}
            />)}
    </div>
  )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favourites)

