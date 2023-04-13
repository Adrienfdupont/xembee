import { BsChevronRight} from "react-icons/bs";

export default function Home() {
    return(
        <main>
          <div className="w-full h-96 bg-no-repeat bg-cover bg-center bg-[url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1600')]"></div>

          <section className="flex flex-col items-center py-14 px-2 gap-8">
            <h2 className="text-center">
              L’ÉNERGIE EST DANS NOTRE NATURE
            </h2>
            <p className="max-w-4xl text-center">
              Le projet XEMBEE est entré dans une nouvelle phase en rejoignant le plus grand incubateur Européen Euratechnologies et plus particulièrement dans le cadre de l’énergie renouvelable avec la filière Prop Tech.
              Le projet est ainsi depuis le 3 octobre 2022 basée à Roubaix au sein de Blanchemaille.
            </p>
            <button className="bg-gray-300 px-4 py-6 font-cooper-hewitt-bold hover:bg-gray-200">
              DÉCOUVRIR LE PROJET
            </button>
          </section>

          <section className="flex flex-col items-center py-14 gap-8">
            <h2 className="text-center">
              VIDÉO DE PRÉSENTATION
            </h2>
            <video controls>
              <source src="https://video.wixstatic.com/video/8aca5b_5f56f14fab664d4dbae01c91e365b463/480p/mp4/file.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos HTML5.
            </video>
          </section>

          <section className="flex flex-col items-center px-4 py-14 gap-8">
            <h2>
              NEWSLETTER
            </h2>
            <p className="max-w-4xl text-center">
              Entrez votre adresse email pour accéder à notre newsletter
            </p>
            <div>
              <input className="w-48 sm:w-96 rounded-xl border-2 p-4" type="text" placeholder="ADRESSE MAIL" />
              <button className="-translate-x-full translate-y-1/4">
                <BsChevronRight size={24} className="text-gray-300 hover:text-gray-500"/>
              </button>
            </div>
          </section>

        </main>

    )
}