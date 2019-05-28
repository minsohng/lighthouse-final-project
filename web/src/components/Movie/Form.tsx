import * as React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import Result from './Result';


const Form: React.FunctionComponent<{}> = props => {
  const [formInput, setFormInput] = useState('')
  const [data, setData] = useState([
    {
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ECfaGbrSVac9-5lbIs2zkqKFcwA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nM0xDI5R50E"
        },
      "snippet": {
        "publishedAt": "2018-10-10T09:00:06.000Z",
        "channelId": "UCweOkPb1wVVH0Q0Tlj4a5Pw",
        "title": "[MV] IU(아이유) _ BBIBBI(삐삐)",
        "description": "[MV] IU(아이유) _ BBIBBI(삐삐) *English subtitles are now available. :D (Please click on 'CC' button or activate 'Interactive Transcript' function) [Notice] 1theK ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nM0xDI5R50E/default.jpg",
            "width": 120,
            "height": 90
            },
          "medium": {
            "url": "https://i.ytimg.com/vi/nM0xDI5R50E/mqdefault.jpg",
            "width": 320,
            "height": 180
            },
          "high": {
            "url": "https://i.ytimg.com/vi/nM0xDI5R50E/hqdefault.jpg",
            "width": 480,
            "height": 360
            }
        },
        "channelTitle": "1theK (원더케이)",
        "liveBroadcastContent": "none"
        }
    },{
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ECfaGbrSVac9-5lbIs2zkqKFcwA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nM0xDI5R50E"
        },
      "snippet": {
        "publishedAt": "2018-10-10T09:00:06.000Z",
        "channelId": "UCweOkPb1wVVH0Q0Tlj4a5Pw",
        "title": "[MV] IU(아이유) _ BBIBBI(삐삐)",
        "description": "[MV] IU(아이유) _ BBIBBI(삐삐) *English subtitles are now available. :D (Please click on 'CC' button or activate 'Interactive Transcript' function) [Notice] 1theK ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nM0xDI5R50E/default.jpg",
            "width": 120,
            "height": 90
            },
          "medium": {
            "url": "https://i.ytimg.com/vi/nM0xDI5R50E/mqdefault.jpg",
            "width": 320,
            "height": 180
            },
          "high": {
            "url": "https://i.ytimg.com/vi/nM0xDI5R50E/hqdefault.jpg",
            "width": 480,
            "height": 360
            }
        },
        "channelTitle": "1theK (원더케이)",
        "liveBroadcastContent": "none"
        }
    }
  ]);
  const onInput = event => {
    setFormInput(event.target.value);
  }

  const onKeyUp = event => {
    // if(event.key === 'Enter') {
    //   axios.get(
    //     `http://localhost:3001/api/youtube/${formInput}`, {
    //   }).then(result => {
    //     console.log('Received response');
    //     setData(result.data);
    //     setFormInput('');
    //   }).catch(err => console.error('Failed to retrieve search data'));
    // }
  }
  // below is code to grab searches on input change
  // useEffect(() => {
  //   axios.get(
  //     `http://localhost:3001/youtube/${formInput}`, {
  //   }).then(result => {
  //     console.log('Received response');
  //     setData(result.data);
  //   }).catch(err => console.error('Failed to retrieve search data'));
  // }, [formInput])
  
  const searchResults = data.map((result, i) => 
    <Result title={result.snippet} key={i} id={result.id.videoId}/>    
  )
  
  return (
    <>
    <div className="Search">
      <input id='search' type="text" onKeyUp={onKeyUp} onInput={onInput} value={formInput} placeholder='Press Enter to search for videos'/>
    </div>
      <div className="container">
        <div className="column">
          {searchResults}
        </div>
      </div>
    </>
  )
}

export default Form;