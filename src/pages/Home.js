import { IonRow, IonCol, IonContent, IonProgressBar } from '@ionic/react'
import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: false
    }
  }

  componentWillMount() {
    this.getProfile()
  }

  getProfile() {
    axios.get('https://rickandmortyapi.com/api/character/2')
    .then(resp => {
      this.setState({
        profile: resp.data
      })
    })
  }

  render () {
    let { profile } = this.state

    return (
      <>
      {
        profile.length !== 0 ? (
          <ion-app>
          <ion-header translucent>
            <ion-toolbar>
              <ion-title>Home</ion-title>
            </ion-toolbar>
          </ion-header>,
          <ion-content fullscreen>
            <ion-card>
              <img src={profile.image} />
              <ion-card-header>
                <ion-card-title>{ profile.name } </ion-card-title>
              </ion-card-header>
              <ion-card-content>
              <IonRow>
                <IonCol size="6" size-lg>
                  <p> Genero: { profile.gender } </p>
                  <p> Status: { profile.status } </p>
                </IonCol>
                <IonCol size="6" size-lg>
                  <p> Especie: { profile.species } </p>
                </IonCol>
              </IonRow>
              </ion-card-content>
            </ion-card>
          </ion-content>
        </ion-app>
      
        ): (<IonContent>
            <IonProgressBar></IonProgressBar><br />
          </IonContent>
          )
      }
      
      </>
    );
  }
}