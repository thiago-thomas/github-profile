import './style.css'

import Chield from '../../../resources/Chield_alt.svg'
import Nesting from '../../../resources/Nesting.svg'
import Star from '../../../resources/Star.svg'

export function Repository() {
  return (
    <div className="repository">
      <h2 className="repository__title">Test</h2>
      <p className="repository__description">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </p>
      <div className="repository__details">
        <div className="repository__details__tags">
          <img src={Chield} alt="Chield icon" className="repository__details--icon" />
          <span className="repository__details--text">MIT</span>
        </div>
        <div className="repository__details__tags">
          <img src={Nesting} alt="Nesting icon" className="repository__details--icon" />
          <span className="repository__details--text">100</span>
        </div>
        <div className="repository__details__tags">
          <img src={Star} alt="Star icon" className="repository__details--icon" />
          <span className="repository__details--text">100</span>
        </div>
        <span className="repository__details--updateInfo">updated 4 days ago</span>
      </div>
    </div>
  );
}
