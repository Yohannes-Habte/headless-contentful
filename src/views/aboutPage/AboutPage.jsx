import { useState, useEffect } from "react";
import { clientAbout } from "../../client";

const AboutPage = () => {
  const [aboutDta, setAboutDta] = useState([]);

  console.log("about data=", aboutDta);

  const fetchAboutData = async (type = "about", limit = 10, skip = 0) => {
    try {
      const data = await clientAbout.getEntries({
        content_type: type,
        limit: limit,
        skip: skip,
      });
      setAboutDta(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAboutData("about", 3, 0);

    return () => {};
  }, []);

  return (
    <main>
      <article>
        <h1> About Us </h1>
        {aboutDta &&
          aboutDta.map((about) => {
            const {
              fields: { title, message, image },
              sys,
            } = about;
            return (
              <section key={sys.id}>
                <figure>
                  <img src={image.fields.file.url} alt="" />
                </figure>
                <h2> {title} </h2>
                <p> {message} </p>
              </section>
            );
          })}
      </article>
    </main>
  );
};

export default AboutPage;
