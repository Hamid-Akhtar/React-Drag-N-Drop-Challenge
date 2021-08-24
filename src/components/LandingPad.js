import React from 'react';
import { container } from '../css-modules/LandingPad.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { updateCrypto } from '../redux/crypto/crypto.actions';

const LandingPad = () => {
  const globalState = useSelector(state => state.crypto)
  const dispatch = useDispatch()

  const dropHandler = async (e) => {
    e.preventDefault()
    fetch(`https://api.coingecko.com/api/v3/coins/${e.dataTransfer.getData("id")}`)
      .then(response => response.json())
      .then(res => dispatch(updateCrypto(res)))
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <div className={container} onDrop={dropHandler} onDragOver={(e) => e.preventDefault()}>
        {globalState.name ?
          <div>
            <h6>Name: {globalState.name}</h6>
            <p>{globalState.description}</p>
            <h6>Images:</h6>
            {globalState.images.length && globalState.images.map((item, idx) => (
              <React.Fragment key={idx}>
                <p>Thumb: <a href={item.thumb} target="_blank" rel="noreferrer">{item.thumb}</a></p>
                <p>Small: <a href={item.small} target="_blank" rel="noreferrer">{item.small}</a></p>
                <p>Large: <a href={item.large} target="_blank" rel="noreferrer">{item.large}</a></p>
              </React.Fragment>
            ))}
            <h6>Homepage:</h6>
            {globalState.homepageUrl.length && globalState.homepageUrl.map((item, idx) => (
              item !== "" && <a key={idx} href={item} target="_blank" rel="noreferrer">{item}</a>
            ))}
            <h6 style={{ marginTop: "12px" }}>Current Price in USD: {globalState.currentPriceUsd}</h6>
            <h6 style={{ marginTop: "12px" }}>Market cap in USD: {globalState.marketCapUsd}</h6>
          </div>
          :
          <p>Drag a crypto icon to this container to return current data.</p>
        }
      </div>
    </>
  );
};

export default LandingPad;
