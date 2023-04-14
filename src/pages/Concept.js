export default function Concept() {
    return(
      <main>
        <div className="container mx-auto">

          {/*le projet*/}
          <section className="flex flex-col items-center lg:items-start lg:flex-row pb-8 gap-4">
            <img src="/images/image11.png" alt="product" className="w-full sm:w-96" />

            <div className="px-2">
              <h2 className="text-center lg:text-left mb-4">PROJET XEMBEE</h2>

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

          {/*partenaires*/}
          <section className="py-8">
            <h2 className="text-center lg:text-left">NOS PARTENAIRES</h2>

            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <img src="/images/image1.png" alt="Euratechnologies"/>

              <img src="/images/image2.png" alt="Blanchemaile" />

              <img src="/images/image3.png" alt="Rev3" />
            </div>

          </section>
        </div>
      </main>
    )
}