import client from "../../apollo-client";
import Layout from "../../components/Layout";
import Photo from "../../components/Photo";
import { PhotoEntity } from "../../graphql/generated/graphql-types.generated";
import { PhotosDocument } from "../../graphql/queries/getPhotos.generated";

type PhotographyPageProps = { photos: PhotoEntity[] };

const PhotographyPage = ({ photos }: PhotographyPageProps) => {
  return (
    <Layout title="LP | Photography">
      <div className="pt-2">
        {photos.map((photo, index) => {
          const photoUrl = photo.attributes?.image?.data?.attributes?.url;
          const photoDescription = photo.attributes?.description;
          const cameraMake = photo.attributes?.camera?.data?.attributes?.make;
          const cameraModel = photo.attributes?.camera?.data?.attributes?.model;
          const camera = `${cameraMake} ${cameraModel}`;
          const lensMake = photo.attributes?.lens?.data?.attributes?.make;
          const lensModel = photo.attributes?.lens?.data?.attributes?.model;
          const lens = `${lensMake} ${lensModel}`;
          return (
            photoUrl &&
            camera &&
            lens && (
              <Photo
                key={`photo-${index}`}
                photoUrl={photoUrl}
                photoDescription={
                  photoDescription || `Shot on the ${camera} with the ${lens}.`
                }
                camera={camera}
                lens={lens}
                photoIndex={index}
              />
            )
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: PhotosDocument });

  return {
    props: {
      photos: data.photos.data.slice(0, 4),
    },
  };
}

export default PhotographyPage;
