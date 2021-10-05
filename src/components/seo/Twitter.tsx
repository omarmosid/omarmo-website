import React from "react";

type TwitterProps = {
  type?: string;
  username?: string;
  title: string;
  desc: string;
  image: string;
};

const Twitter: React.FC<TwitterProps> = ({
  type = "summary_large_image",
  username = null,
  title,
  desc,
  image,
}) => {
  return (
    <>
      {username && <meta name="twitter:creator" content={username} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={desc} />
    </>
  );
};

export { Twitter };
