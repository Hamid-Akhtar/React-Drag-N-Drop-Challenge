import { container } from '../css-modules/CoinContainer.module.css';

import BitcoinLogo from '../static/svg/btc.png';
import EthereumLogo from '../static/svg/eth.png';
import StellarLogo from '../static/svg/xlm.png';
import XrpLogo from '../static/svg/xrp.png';
import DogeLogo from '../static/svg/doge.png';

const CoinContainer = () => {
  return (
    <>
      <div className={container}>
        <img draggable id="bitcoin" onDragStart={(e) => e.dataTransfer.setData("id", e.target.id)} src={BitcoinLogo} width={50} alt='Bitcoin Logo' />
        <img draggable id="ethereum" onDragStart={(e) => e.dataTransfer.setData("id", e.target.id)} src={EthereumLogo} width={50} alt='Eth Logo' />
        <img draggable id="stellar" onDragStart={(e) => e.dataTransfer.setData("id", e.target.id)} src={StellarLogo} width={50} alt='Stellar Logo' />
        <img draggable id="ripple" onDragStart={(e) => e.dataTransfer.setData("id", e.target.id)} src={XrpLogo} width={50} alt='Ripple Logo' />
        <img draggable id="dogecoin" onDragStart={(e) => e.dataTransfer.setData("id", e.target.id)} src={DogeLogo} width={50} alt='Dogecoin Logo' />
      </div>
    </>
  );
};

export default CoinContainer;
