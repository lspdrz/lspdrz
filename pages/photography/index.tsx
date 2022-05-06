import Image from "next/image";
import client from "../../apollo-client";
import Layout from "../../components/Layout";
import { PhotoEntity } from "../../graphql/generated/graphql-types.generated";
import { PhotosDocument } from "../../graphql/queries/getPhotos.generated";

type PhotographyPageProps = { photos: PhotoEntity[] };

const PhotographyPage = ({ photos }: PhotographyPageProps) => {
  return (
    <Layout title="LP | Photography">
      <div className="pt-2">
        {photos.map((photo, index) => {
          const photoUrl = photo.attributes?.image?.data?.attributes?.url;
          return (
            photoUrl && (
              <div key={`photo-${index}`}>
                <div className="border-2 border-lspdrz-pink">
                  <div className="p-2">
                    <Image
                      src={photoUrl}
                      width="75%"
                      height="50%"
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <p className="italic">{photo.attributes?.description}</p>
              </div>
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
