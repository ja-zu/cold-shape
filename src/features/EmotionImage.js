const EmotionImage = ({ emotionTag }) => {
   const emotion = emotionTag;
   return (
      <>
         <span className="emotionTag">
            <img
               src={`/assets/emotion/${emotion || "sad"}.png`}
               alt={emotion}
            />
         </span>
      </>
   );
};

export default EmotionImage;
