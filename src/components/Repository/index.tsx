import './style.css'

import Chield from '../../assets/Chield_alt.svg'
import Nesting from '../../assets/Nesting.svg'
import Star from '../../assets/Star.svg'

interface RepositoryProps {
  repoTitle: string,
  repoDescription: string,
  repoLicense: string,
  repoForks: number,
  repoStars: number,
  repoUpdateInfo: string,
}

export function Repository({repoTitle, repoDescription,repoForks,repoLicense,repoStars,repoUpdateInfo}: RepositoryProps) {
  return (
    <div className="repository">
      <h2 className="repository__title">{repoTitle}</h2>
      <p className="repository__description">
        {repoDescription}
      </p>
      <div className="repository__details">
        <div className="repository__details__tags">
          <img src={Chield} alt="Chield icon" className="repository__details--icon" />
          <span className="repository__details--text">{repoLicense}</span>
        </div>
        <div className="repository__details__tags">
          <img src={Nesting} alt="Nesting icon" className="repository__details--icon" />
          <span className="repository__details--text">{repoForks}</span>
        </div>
        <div className="repository__details__tags">
          <img src={Star} alt="Star icon" className="repository__details--icon" />
          <span className="repository__details--text">{repoStars}</span>
        </div>
        <span className="repository__details--updateInfo">{repoUpdateInfo}</span>
      </div>
    </div>
  );
}
