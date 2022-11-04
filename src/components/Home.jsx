import { PublicRounded } from "@mui/icons-material";
import React from "react";
import "../styles/home.scss";
import Btn from "./Outils/button";

const Home = () => {
  const handleClick = () => {
    document.querySelector("#content").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div id="home">
        <h1>Bienvenue sur Teraka</h1>
        <p>" Petite phrase d'amorce, ou dicton de Teraka "</p>
        <Btn
          action={handleClick}
          text="Aller à"
          icon={<PublicRounded />}
          w={100}
        />
      </div>
      <div id="content">
        <div className="section-one">
          <h3
            style={{
              marginTop: "40px",
              alignSelf: "flex-start",
              marginBottom: "20px",
            }}
          >
            Titre 1:
          </h3>
          <div>
            <img
              alt="image1"
              loading="lazy"
              src="./images/kasturi-laxmi-mohit-uv6lUONd19w-unsplash.jpg"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis itaque sint nulla quos dicta, nemo suscipit nostrum
              neque molestiae, eveniet voluptate, animi eos! Quae esse saepe
              quis, inventore adipisci tempore modi animi illum consequatur est
              eaque quaerat aut dicta voluptates. Cum veniam quis doloremque est
              illo nulla facilis sed officia voluptatibus provident recusandae
              amet doloribus, voluptatum atque laudantium eius maxime fugit.
              Exercitationem cum, impedit est dolorem repellendus illo aliquam
              consectetur ab, consequuntur repudiandae sequi, officia non quam
              maiores. Sunt ab dolore illum accusamus perferendis reiciendis
              nesciunt nihil repellat, error quibusdam incidunt temporibus!
              Ullam molestiae totam rerum harum quisquam cupiditate? Odit natus
              cumque voluptates quos, error officia quod aut ipsam iste alias
              quis reiciendis quisquam beatae excepturi in, dolore et atque
              animi magni dicta quibusdam ducimus. Ea exercitationem nisi
              eligendi itaque eos? Corporis explicabo placeat amet commodi. Vero
              quo nostrum illum deserunt ipsum, distinctio esse ab commodi
              delectus eligendi pariatur recusandae, quisquam ducimus similique
              nemo fuga fugiat corporis voluptatum a nobis molestiae, doloremque
              maxime rerum. Neque soluta culpa aliquid amet reprehenderit ea,
              necessitatibus ipsam veniam dolorem reiciendis ab quos eligendi
              consequatur molestias iusto consectetur nobis error nam animi
              dolores explicabo.
            </p>
          </div>
        </div>
        <div className="section-two">
          <h3
            style={{
              marginTop: "40px",
              alignSelf: "center",
              marginBottom: "20px",
            }}
          >
            Titre 2:
          </h3>
          <div>
            <img
              alt="image2"
              loading="lazy"
              src="./images/adrian-infernus-BN6iQEVN0ZQ-unsplash.jpg"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis itaque sint nulla quos dicta, nemo suscipit nostrum
              neque molestiae, eveniet voluptate, animi eos! Quae esse saepe
              quis, inventore adipisci tempore modi animi illum consequatur est
              eaque quaerat aut dicta voluptates. Cum veniam quis doloremque est
              illo nulla facilis sed officia voluptatibus provident recusandae
              amet doloribus, voluptatum atque laudantium eius maxime fugit.
              Exercitationem cum, impedit est dolorem repellendus illo aliquam
              consectetur ab, consequuntur repudiandae sequi, officia non quam
              maiores. Sunt ab dolore illum accusamus perferendis reiciendis
              nesciunt nihil repellat, error quibusdam incidunt temporibus!
              Ullam molestiae totam rerum harum quisquam cupiditate? Odit natus
              cumque voluptates quos, error officia quod aut ipsam iste alias
              quis reiciendis quisquam beatae excepturi in, dolore et atque
              animi magni dicta quibusdam ducimus. Ea exercitationem nisi
              eligendi itaque eos? Corporis explicabo placeat amet commodi. Vero
              quo nostrum illum deserunt ipsum, distinctio esse ab commodi
              delectus eligendi pariatur recusandae, quisquam ducimus similique
              nemo fuga fugiat corporis voluptatum a nobis molestiae, doloremque
              maxime rerum. Neque soluta culpa aliquid amet reprehenderit ea,
              necessitatibus ipsam veniam dolorem reiciendis ab quos eligendi
              consequatur molestias iusto consectetur nobis error nam animi
              dolores explicabo. Cupiditate officiis voluptate ad sapiente iusto
              aliquid eligendi necessitatibus facere accusamus laudantium.
              Consectetur nulla vero fugiat unde assumenda corrupti tenetur quo
              aperiam, doloremque, facilis illo harum est? Voluptatum pariatur,
              magnam eligendi ratione repudiandae, sapiente maxime fugiat
              debitis provident cupiditate quidem facilis ex, fugit vero minima
              beatae ipsum. Doloribus rem dolorum dolorem maxime fugit
              voluptatem aperiam voluptatibus ad! Nulla libero illum enim vel
              tempore esse inventore at sed soluta velit facilis voluptas ab
              atque, quasi corporis voluptate tenetur error labore beatae,
              doloribus, sunt nostrum reprehenderit. Reiciendis quisquam
              similique molestias. Nulla esse tenetur eius debitis veritatis
              voluptatum facere assumenda. Commodi neque accusantium maxime
              facere, dolorem voluptate nam doloremque, quasi nesciunt cum nobis
              saepe suscipit autem, dolores in iusto hic blanditiis aspernatur
              assumenda ipsum numquam similique. Quas pariatur voluptates ab,
              dolores atque velit sint praesentium quibusdam recusandae earum
              deleniti libero magnam quod alias aliquid adipisci rerum harum.
              Inventore ipsam quas laborum? Soluta aut perferendis dolor nam et
              ducimus quis consectetur vel quaerat, totam explicabo cumque
              voluptates a provident nisi distinctio cupiditate culpa ea placeat
              illum enim ex unde esse? Numquam impedit cum rerum minus id
              molestias reprehenderit distinctio voluptatum atque illum nihil,
              quo inventore aliquid. A quidem vel alias voluptates repellat,
              veritatis soluta. Expedita vel natus id ullam accusantium amet et
              molestias, quas consequuntur aperiam consectetur quisquam ducimus
              enim eaque nostrum maxime tenetur eos fugit cupiditate animi. Eos
              ea sed ex natus earum vitae accusantium iusto molestiae provident
              itaque excepturi, veniam laudantium consectetur maxime illo quia
              consequatur atque vel sunt magni perferendis nobis deleniti
              nostrum ullam. Reprehenderit consectetur rem dolorum praesentium
              illum sit sunt facere minus vitae quo, incidunt quidem voluptate
              repellendus nemo assumenda dicta amet et, quos fugit quaerat? Enim
              suscipit voluptatem cumque, ratione perspiciatis magnam eaque
              neque aliquid obcaecati consequatur voluptas modi nostrum tenetur
              ea facere? Voluptatibus doloremque expedita minus deleniti, eaque
              porro facere, quaerat aliquid, rerum eligendi aperiam eius eveniet
              ipsa.
            </p>
          </div>
        </div>
        <div className="section-three">
          <h3
            style={{
              marginTop: "40px",
              alignSelf: "flex-start",
              marginBottom: "20px",
            }}
          >
            Titre 3:
          </h3>
          <div>
            <img
              alt="image3"
              loading="lazy"
              src="./images/mike-flamenco-OfV1fl8KRzw-unsplash.jpg"
              effect="opacity"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis itaque sint nulla quos dicta, nemo suscipit nostrum
              neque molestiae, eveniet voluptate, animi eos! Quae esse saepe
              quis, inventore adipisci tempore modi animi illum consequatur est
              eaque quaerat aut dicta voluptates. Cum veniam quis doloremque est
              illo nulla facilis sed officia voluptatibus provident recusandae
              amet doloribus, voluptatum atque laudantium eius maxime fugit.
              Exercitationem cum, impedit est dolorem repellendus illo aliquam
              consectetur ab, consequuntur repudiandae sequi, officia non quam
              maiores. Sunt ab dolore illum accusamus perferendis reiciendis
              nesciunt nihil repellat, error quibusdam incidunt temporibus!
              Ullam molestiae totam rerum harum quisquam cupiditate? Odit natus
              cumque voluptates quos, error officia quod aut ipsam iste alias
              quis reiciendis quisquam beatae excepturi in, dolore et atque
              animi magni dicta quibusdam ducimus. Ea exercitationem nisi
              eligendi itaque eos? Corporis explicabo placeat amet commodi. Vero
              quo nostrum illum deserunt ipsum, distinctio esse ab commodi
              delectus eligendi pariatur recusandae, quisquam ducimus similique
              nemo fuga fugiat corporis voluptatum a nobis molestiae, doloremque
              maxime rerum. Neque soluta culpa aliquid amet reprehenderit ea,
              necessitatibus ipsam veniam dolorem reiciendis ab quos eligendi
              consequatur molestias iusto consectetur nobis error nam animi
              dolores explicabo.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
