/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SearchSongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  console.log('activesongs');
  console.log(activeSong);
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blut-sm animaate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:flex
      ${activeSong?.heading?.title === song?.heading?.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img alt="song_img" src={song.images?.default} />
      </div>
      <div className="mt-4 flex flex-col ">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song?.heading?.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song?.heading?.subtitle}
          </Link>
        </p>
      </div>
    </div>

  );
};

export default SearchSongCard;
