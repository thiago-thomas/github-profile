import { InfoPill } from '../InfoPill';
import './style.css'

interface MainProps {
  titlePage: string;
  subTitlePage: string;
}

export function Main({titlePage, subTitlePage}: MainProps) {
  return (
    <main>
      <img src={`https://github.com/${titlePage}.png`} alt={`${titlePage} profile image`} className='profile-img' />
      <div className="infopill-container">
        <InfoPill keyInfo='Followers' valueInfo='27839' />
        <InfoPill keyInfo='Following' valueInfo='0' />
        <InfoPill keyInfo='Location' valueInfo='San Francisco, CA' />
      </div>
      <h1 className='title-page'>{titlePage}</h1>
      <p className='subtitle-page'>{subTitlePage}</p>
    </main>
  )
}