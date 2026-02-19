import SEO from "../component/seo";

export default function Mentions () {
  return (
    <>
        <SEO 
            title="Mentions Legales | Yrieix Cisterne"
            description="Retrouvez toutes les informations légales relatives au site : éditeur, hébergeur, propriété intellectuelle, protection des données et conformité au RGPD."
            keywords="Yrieix Cisterne, Développeur web, Développeur React, Mentions légales, Informations légales site web, Éditeur du site, Hébergement du site, Conditions d’utilisation, Propriété intellectuelle, RGPD, Sécurité des données"
            canonical="https://yrieix-cisterne.fr/mentions-legales"
          />
    <div>
      <main className="max-w-[850px] mx-auto rounded-lg p-4 md:p-5 bg-[#e8cdb3] mt-4 mb-4 m-4">
        <h1 className="sr-only">Mentions légales</h1>
        <section>
          <div className="mb-2">
            <h2 className="text-xl">1. Éditeur du site</h2>
            <p>Nom : Yrieix Cisterne</p>
            <p>Statut : Étudiant en Bachelor de Chefs de Projets Digitaux</p>
            <p>Adresse mail : ycisterne@normandiewebschool.fr</p>
          </div>

          <div className="mb-2">
            <h2 className="text-xl">2. Propriété intellectuelle</h2>
            <p>
              Les contenus présents sur ce site (textes, images, graphismes, logos, vidéos, etc.)
              sont protégés par les lois relatives à la propriété intellectuelle.
            </p>
            <p>
              Si vous êtes l’auteur d’une image et que vous estimez que son utilisation sur ce site
              n’est pas conforme à vos droits, veuillez me contacter.
            </p>
          </div>

          <div className="mb-2">
            <h2 className="text-xl">3. Responsabilité</h2>
            <p>L’éditeur du site décline toute responsabilité concernant :</p>
            <ul>
              <li>Les éventuelles erreurs ou omissions dans les contenus publiés.</li>
              <li>Les dommages causés à l’utilisateur en raison de l’accès ou de l’utilisation du site.</li>
            </ul>
          </div>

          <div className="mb-2">
            <h2 className="text-xl">4. Liens externes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d’autres sites Internet.
              L’éditeur du site ne peut être tenu responsable du contenu de ces sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl">5. Données personnelles</h2>
            <p>Ce site ne collecte aucune donnée personnelle et ne possède aucun cookie.</p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};
