const ImageToShow = ({imageFile}) => {
  const [urlImage, setUrlImage] = useState(null);

  useEffect(
    function previewFile() {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          setUrlImage(reader.result);
        },
        false
      );

      if (imageFile) {
        reader.readAsDataURL(imageFile[0]);
      }
    },
    [imageFile]
  );

  return <img src={urlImage} />;
};
