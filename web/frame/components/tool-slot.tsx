import GithubIcon from '@assets/github.svg';
import TwitterIcon from '@assets/twitter.svg';
import { useEnv } from '@hooks';

const ToolSlot = () => {
  return (
    <div className="m-tool">
      <a href={useEnv().VITE_GITHUB_URL} target="_blank" rel="noreferrer">
        <img src={GithubIcon}></img>
      </a>
      <a href={useEnv().VITE_TWITTER_URL} target="_blank" rel="noreferrer">
        <img src={TwitterIcon}></img>
      </a>
    </div>
  )
}
export default ToolSlot
