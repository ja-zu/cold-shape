const EmotionImage = ({ emotionTag }) => {
  const emotion = emotionTag;
  return (
    <>
      <span className="emotionTag">
        <img src={`/assets/emotion/${emotion}.png`} alt={emotion} />
      </span>
    </>
  );
};

export default EmotionImage;
