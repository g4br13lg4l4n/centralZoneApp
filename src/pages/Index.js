import { IonContent, IonRow, IonGrid, IonCol, IonButton, IonItem, IonLabel, IonInput } from '@ionic/react'
import React, { Component } from 'react'
import axios from 'axios'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange (event) {
    this.setState({
      errorLogin: false,
      [event.target.name]: event.target.value
    })
  }


  login = () => {
    let { email, password } = this.state

    if(email && password){
      axios.post('http://centraldeapps.com/RetailZone/examen/apidoc/', { 
        email, password, 'API-KEY': 'Nueva123456789' 
      })
      .then(data => {
        if(data.status === 200){
          this.props.history.push('/home')
        }
      })
      .catch(error => {
        
      })
      
    }else {

    }
  }

  render () {
    return (
      <>
        <IonContent className="ion-padding">
        <div className="ion-text-center" padding="true">
          <h3>Login</h3>
        </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="fixed">Email: </IonLabel>
                  <IonInput
                    name='email'
                    placeholder="Email"
                    type="email"
                    inputmode="email"
                    onIonChange={(e) => this.handleChange(e)}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel 
                    position="fixed"
                  >Password: </IonLabel>
                  <IonInput
                    onIonChange={(e) => this.handleChange(e)}
                    name="password"
                    type="password"
                    placeholder="Password"
                    inputmode="password"
                  />
                </IonItem>

                <IonButton 
                shape="round" 
                padding="true"
                expand="full" 
                fill="outline"
                onClick={() => this.login()}
                >Login</IonButton>
              </IonCol>

            </IonRow>
          </IonGrid>    
        </IonContent>
      </>
    );
  }
}