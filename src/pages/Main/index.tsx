import { InfoPill } from "../../components/InfoPill";
import { Repository } from "../../components/Repository";
import "./style.css";

interface MainProps {
  titlePage: string;
  subTitlePage: string;
}

export function Main({ titlePage, subTitlePage }: MainProps) {
  return (
    <main>
      <img
        src={`https://github.com/${titlePage}.png`}
        alt={`${titlePage} profile image`}
        className="profile-img"
      />
      <div className="infopill-container">
        <InfoPill keyInfo="Followers" valueInfo="27839" />
        <InfoPill keyInfo="Following" valueInfo="0" />
        <InfoPill keyInfo="Location" valueInfo="San Francisco, CA" />
      </div>
      <h1 className="title-page">{titlePage}</h1>
      <p className="subtitle-page">{subTitlePage}</p>
      <div className="repository-container">
        <Repository
          repoTitle="lorem ipsum"
          repoDescription="lorem..."
          repoLicense="MIT"
          repoForks={100}
          repoStars={100}
        />
        <Repository
          repoTitle="lorem ipsum"
          repoDescription="lorem..."
          repoLicense="MIT"
          repoForks={100}
          repoStars={100}
        />
        <Repository
          repoTitle="lorem ipsum"
          repoDescription="lorem..."
          repoLicense="MIT"
          repoForks={100}
          repoStars={100}
        />
        <Repository
          repoTitle="lorem ipsum"
          repoDescription="lorem..."
          repoLicense="MIT"
          repoForks={100}
          repoStars={100}
        />
      </div>
    </main>
  );
}
