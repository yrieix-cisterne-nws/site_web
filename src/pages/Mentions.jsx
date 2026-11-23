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

          <div className="mb-2">
            <h2 className="text-xl">5. Données personnelles</h2>
            <p>
              <strong>Formulaire de contact.</strong> Les données saisies (nom, prénom, email, message)
              sont collectées par Yrieix Cisterne, responsable du traitement, uniquement pour répondre
              à votre demande. Ce traitement repose sur l’intérêt légitime à répondre aux messages reçus.
            </p>
            <p>
              <strong>Destinataires.</strong> Les données sont transmises au service d’envoi d’emails
              EmailJS et ne sont ni vendues ni utilisées à des fins commerciales.
            </p>
            <p>
              <strong>Durée de conservation.</strong> Les messages sont conservés 12 mois au maximum
              après le dernier échange.
            </p>
            <p>
              <strong>Vos droits.</strong> Vous disposez d’un droit d’accès, de rectification, d’effacement,
              de limitation et d’opposition en écrivant à ycisterne@normandiewebschool.fr. Vous pouvez
              également introduire une réclamation auprès de la CNIL (cnil.fr).
            </p>
            <p>
              <strong>Cookies et stockage local.</strong> Ce site n’utilise pas de cookies et n’enregistre
              aucune information dans le stockage local de votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-xl">6. Hébergement</h2>
            <p>Hébergeur : OVH SAS</p>
            <p>Adresse : 2 rue Kellermann, 59100 Roubaix, France</p>
            <p>
              Site web :{" "}
              <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer" className="underline">
                ovhcloud.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};
