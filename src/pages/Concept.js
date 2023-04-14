export default function Concept() {
    return(
      <main>
        {/*le projet*/}
        <section className="flex flex-col items-center lg:flex-row lg:mx-96 gap-8">
          <div className="bg-gray-300 w-full aspect-[1/1] sm:w-96"></div>

          <div>
            <h2 className="mb-2">PROJET XEMBEE</h2>

            <p>
              XEMBEE est un projet labellisé REV3, qui s’appuie sur des écoles et laboratoires des universités de Lille et d'Artois. Il est soutenu par le pôle MEDEE, cluster en Génie Electrique des Hauts de France.
              Ce projet à la base, éolien, est innovant grâce à son approche «hardware agile». Il a été développé sur le principe du «design thinking».
              <br />
              <br />
              Il consiste en l'agrégation de microcentrales électriques, véritables modules technologiques et intelligents (Smart Grid compatible), fabriqués avec des matériaux durables.
              <br />
              <br />
              L'avantage est un concept évolutif techniquement et financièrement, intégrable en toute discrétion aussi bien en milieu urbain que rural et combinable avec d'autres sources d'énergie et dans le respect de l'environnement.
              <br />
              <br />
              XEMBEE constitue une vitrine de savoir-faire en Hauts de France, et possède un potentiel de développement international, générateur d'emplois.
            </p>
          </div>
        </section>

        {/*partnaires*/}
        <section className="py-10 flex flex-col items-center gap-4">
          <h2>NOS PARTENAIRES</h2>

          <div className="w-full lg:flex lg:justify-around lg:mx-96">
            <img src="/images/image1.png" alt="Euratechnologies"/>

            <img src="/images/image2.png" alt="Blanchemaile" />

            <img src="/images/image3.png" alt="Rev3" />
          </div>

        </section>
      </main>
    )
}