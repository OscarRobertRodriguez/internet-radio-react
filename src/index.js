import React from 'react'
import ReactDOM from 'react-dom';
import Panel from './Panel';
import GenreButton from './GenreButton';
import "./index.css";




const GenreCloud = ({panelInfo}) => {
 let {title, genres} = panelInfo; 
  return (
  <div className='container'>
  <Panel title={title}>
    {genres.map((genre, index) => {
      let size;  

      if(index < 10) {
        size = 'btn--large'
      }
      else if (index < 20) {
        size = 'btn--med'
      }

      else if (index < 40 ) {
        size = 'btn--sm'
      }

      return <GenreButton styleName={size}>{genre}</GenreButton>
    })}
  </Panel>
  </div>
 )
}




let panelInfo = {
 title: 'popular genres', 
  genres: [
  'Jazz',
  'Top 40',
  'Country',
  'Blues',
  'Easy Listening',
  'Rock',
  'Classical',
  '80s',
  'Chillout',
  'Oldies',
  'Dance',
  'Trance',
  'Reggae',
  'Ambient',
  'Hip Hop',
  'Smooth Jazz',
  '70s',
  'House',
  'Lounge',
  'Metal',
  'Drum And Bass',
  'Meditation',
  'Techno',
  'Heavy Metal',
  'Soul',
  '60s',
  'Pop',
  'Psytrance',
  'Bollywood',
  '90s',
  'Latin',
  '50s',
  'Funk',
  'Rap',
  'Rockabilly',
  'Hindi',
  'Greek',
  'Minimal',
  'Comedy',
  'Alternative',
  'Bluegrass',
  'New Age',
  'Edm',
  'Manele',
  'Reggaeton',
  'Salsa',
  'Swing',
  'Disco',
  'Japanese',
  'Classic Rock',
  'Chill',
  'Electronic',
  'Dancehall',
  'Talk',
  'Rnb',
  'Psychedelic',
  'Dub',
  'Dubstep',
  'Progressive',
  'Hardstyle',
  'Romantic',
  'Indie',
  'Goa',
  'Eurodance',
  'Kizomba',
  'Folk',
  'Hardcore',
  'Celtic',
  'Americana',
  'New Wave',
  'Goth',
  'Electro',
  'Soundtracks',
  'Jungle',
  'Jewish',
  'Opera',
  'Indian',
  'Punk',
  'Downtempo',
  'Garage'
 ]
}





ReactDOM.render( <GenreCloud panelInfo={panelInfo} /> , document.querySelector('#root'));