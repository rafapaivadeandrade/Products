import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Error, Container, Input, Image } from "./styles";
const ProfileDropZone = ({ onFileUploaded, product }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileurl = URL.createObjectURL(file);
      setSelectedFile(fileurl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Container {...getRootProps()} preview={product}>
      <Input {...getInputProps()} accept="image/*" />
      {selectedFile && <Image alt="Profile" src={selectedFile}></Image>}
    </Container>
  );
};
export default ProfileDropZone;
