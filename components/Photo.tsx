import { Dialog } from "@headlessui/react";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

type PhotoProps = {
  photoUrl: string;
  photoDescription?: string;
  camera: string;
  lens: string;
  dateTaken: Date;
  photoIndex?: number;
};

const Photo = ({
  photoUrl,
  photoDescription,
  camera,
  lens,
  dateTaken,
  photoIndex,
}: PhotoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {" "}
      <div className={`${photoIndex} pb-5`}>
        <div className="border-2 border-lspdrz-pink">
          <div className="p-2 cursor-pointer">
            <Image
              src={photoUrl}
              quality={100}
              width="75%"
              height="50%"
              layout="responsive"
              objectFit="contain"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <p className="italic">
          {photoDescription} {photoDescription && `|`} {camera}
        </p>
      </div>
      <Dialog
        className="h-26 w-26 text-lspdrz-pink"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        <div className="fixed inset-0 flex flex-col items-center justify-center">
          <div className="w-full max-w-screen-2xl">
            <Dialog.Panel className="px-5">
              <div className="flex justify-between">
                <div className="border-2 border-lspdrz-pink">
                  <p className="p-1">
                    {camera} | {lens} | {format(dateTaken, "MMMM Qo, yyyy")}
                  </p>
                </div>
                <div
                  className="px-2 py-1 inline-flex items-center border-2 border-lspdrz-pink cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
              <div className="my-2">
                <div className="border-2 border-lspdrz-pink">
                  <div className="p-2">
                    <Image
                      src={photoUrl}
                      quality={100}
                      width="75%"
                      height="50%"
                      layout="responsive"
                      objectFit="contain"
                      onClick={() => setIsOpen(true)}
                    />
                  </div>
                </div>
              </div>
              <div className="border-2 border-lspdrz-pink">
                <p className="p-1">{photoDescription}</p>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Photo;
