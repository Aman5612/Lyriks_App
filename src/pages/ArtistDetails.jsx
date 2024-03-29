/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId });

  if (isFetchingArtistDetails) return <Loader title="Searching artist details" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h1 className="text-white">hey</h1>
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={artistData}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
