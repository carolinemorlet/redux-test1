import React  from 'react'
import { Wrapper } from './styleComponents'
import {connect} from 'react-redux'


  const Phone2 = (props) => {

      const {...description} = props;
      const data = description.length ?  
     (description.map(desc => {
      <Wrapper key = {desc.id}>
          <h2>Modèle : {desc.modèle}</h2>
          <h2>Marque : {desc.marque}</h2>
          <h3>Couleur : {desc.couleur}</h3>
      </Wrapper>
      })) : (
          <p>Pas de Téléphone disponible</p>
      )  
      return (
      <div>
         <h4>Accueil</h4>
         {data}
        </div>
      )
     
    
  }

  const mapStateToProps = state => {
    return {
    description : state.description
    }
}

export default connect(mapStateToProps) (Phone2)