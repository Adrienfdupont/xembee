export default function Project() {
    return(
        <main>

          <div className="container mx-auto">

            {/*image et présentation*/}
            <section className="flex flex-col items-center pb-8 gap-4">
              <img src="/images/Group31.svg" alt="product" className="w-full sm:max-w-2xl" />
              <p className="text-center px-2">
                Le projet Xembee s’inscrit dans une perspective du long terme et intègre les contraintes liées à l'environnement et au fonctionnement de la société aussi bien sur le plan social que économique. L’énergie la moins chère est bien-sûr celle qui n'est pas consommée mais la transition énergétique et la lutte contre le réchauffement climatique requièrent encore plus d'énergies d'origine renouvelable.
                <br />
                <br />
                Notre réponse est de fournir une solution éolienne adaptable et modulable en fonction du contexte, facile à mettre en œuvre, respectueuse de l'environnement et économiquement rentable.
                <br />
                <br />
                Au sein de XEMBEE, nos équipements sont pensés écoresponsables, type 'plug and play' pour une production d'énergie électrique à partir du vent. Une extension est possible pour travailler en solution hybride. Nous pouvons vous fournir une gamme de réponse selon vos besoins et vos budgets. Une vrai évolution dans le mode de l’Éolien. Le projet a reçu le label REV3 de la région Hauts de France.
              </p>
            </section>

            {/*points clés du projet*/}
            <section className="flex flex-col items-center sm:flex-row sm:justify-around py-8 gap-4">
              <div className="flex flex-col items-center">
                <img src="/logos/wind_power.svg" alt="force du vent" />

                <span className="text-center font-cooper-hewitt-bold">
                EXPLOITATION DES VENTS URBAINS
              </span>

                <span className="text-center">
                Récupération des vents urbains ou perturbés
              </span>
              </div>

              <div className="flex flex-col items-center">
                <img src="/logos/nature_people.svg" alt="nature" />

                <span className="text-center font-cooper-hewitt-bold">
                ÉVOLUTIF ET ÉCORESPONSABLE
              </span>

                <span className="text-center">
                Solution mobile et extensible
              </span>
              </div>

              <div className="flex flex-col items-center">
                <img src="/logos/volume_off.svg" alt="silencieux" />

                <span className="text-center font-cooper-hewitt-bold">
                FONCTION ADDITIONNELLE
              </span>

                <span className="text-center">
                Réduction de bruit, environ -10 dB
              </span>
              </div>
            </section>

            {/*spécificités*/}
            <section className="flex flex-col items-center py-8 gap-4">
              <h2 className="text-center">
                DÉTAILS TECHNIQUES
              </h2>

              <table className="border-separate border-spacing-y-2 w-full">
                <tr>
                  <th className="h-16 p-2 bg-gray-300 font-cooper-hewitt-bold">POIDS</th>
                  <td className="h-16 p-2 bg-gray-100">Environ 25 Kg selon les matériaux utilisés</td>
                </tr>

                <tr>
                  <th className="h-16 p-2 bg-gray-300 font-cooper-hewitt-bold">MATÉRIAUX</th>
                  <td className="h-16 p-2 bg-gray-100">Inox Aluminium |  Lin Fibres végétales  |  Déchets éoliennes</td>
                </tr>

                <tr>
                  <th className="h-16 p-2 bg-gray-300 font-cooper-hewitt-bold">ESTIMATION W/H</th>
                  <td className="h-16 p-2 bg-gray-100">300 WH (base vent 10 m/s)</td>
                </tr>

                <tr>
                  <th className="h-16 p-2 bg-gray-300 font-cooper-hewitt-bold">MODULARITÉ</th>
                  <td className="h-16 p-2 bg-gray-100">Montage sur toits ou murs</td>
                </tr>
              </table>
            </section>

            {/*FAQ*/}
            <section className="flex flex-col py-8 gap-4 px-2">
              <h2 className="text-center">FAQ</h2>

              <article>
                <p className="font-cooper-hewitt-bold mb-2">Si on veut vous aider que pouvons-nous faire ?</p>
                <p>Pour l'instant, sensibilisez votre entourage sur toutes les actions possibles qui sont souvent de simples gestes et nous avons un esprit ouvert.Nous encourageons toutes les actions pour réduire et les recyclages des déchets, protéger la biodiversité, mieux gérer l'eau.... Nous intégrons tous ces éléments aussi dans le projet et vos questions que nous recevons montre votre intérêt et nous aident à progresser. MERCI.</p>
              </article>

              <article>
                <p className="font-cooper-hewitt-bold mb-2">C'est assez frustrant, on aimerait en savoir plus sur le projet. Pourquoi ne pas donner plus d'informations ?</p>
                <p>Pour l'instant, nous ne sommes pas capable de diffuser plus d'information. Désolé.</p>
              </article>

              <article>
                <p className="font-cooper-hewitt-bold mb-2">Avez-vous déjà fait des tests de votre concept ?</p>
                <p>Oui, nous avons déjà fait des tests car nous avons plusieurs prototypes. Mais il faut bien comprendre que dans l’éolien, il y a 2 parties l’aéraulique et le générateur/convertisseur. Nous nous sommes concentrés sur la partie générateur pour sa mise au point et nous continuons à l'améliorer.</p>
              </article>

              <article>
                <p className="font-cooper-hewitt-bold mb-2">Vous parler de prix raisonnable et quand pensez-vous livrer ?</p>
                <p>Nous n'avons plus de verrous technologiques à lever, nous sommes sur la phase d'amélioration. Le but est de pouvoir produire de l’énergie à un coût très proche à celui du grand éolien avec une technologie différente. L’économie d’échelle est une donnée importante et le projet à été bâti pour rendre l’éolien facilement accessible. Nous avons des normes à respecter, des contraintes mécaniques etc... mais entre la première série est la production nous pensons que cela sera une question de quelques semaines.</p>
              </article>

              <article>
                <p className="font-cooper-hewitt-bold mb-2">Pensez-vous remplacer les grandes éoliennes ?</p>
                <p>Désolé, nous offrons une nouvelle supplétive pour la production d'énergie avec le vent, notre but est d'être complémentaire avec les autres énergies renouvelables pas les remplacer.</p>
              </article>

              <article>
                <p className="font-cooper-hewitt-bold mb-2">L’éolien tue des oiseaux et vous ?</p>
                <p>Nous avons déjà des solutions pour ne pas avoir ce type d'accident et ceci pour tous les animaux. Nous avons encore d'autres solutions. Nous avions pris cet aspect en compte des le début du développement du projet. Nous recherchons des solutions pour maintenir la biodiversité, donc nous cherchons des solutions avec le minimum d'impact sur la nature. Nous aimons les oiseaux et beaucoup les abeilles.</p>
              </article>
            </section>
          </div>
        </main>

    )
}