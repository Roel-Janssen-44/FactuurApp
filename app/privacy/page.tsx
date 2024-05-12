import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { Metadata } from 'next';
import { exo } from '@/app/components/fonts';

export const metadata: Metadata = {
  title: 'Privacy policy',
};

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container min-h-screen py-20">
        <h1
          className={`${exo.className} mb-4 text-xl font-bold text-primary dark:text-white md:text-3xl`}
        >
          Privacy beleid
        </h1>
        <p className="mb-8 text-tertiary">Laatst bijgewerkt: 12 mei 2024</p>

        <div className="text-tertiary">
          <p className="mb-4">
            Dit Privacybeleid beschrijft onze beleidslijnen en procedures met
            betrekking tot de verzameling, het gebruik en de openbaarmaking van
            uw informatie wanneer u de Service gebruikt, en informeert u over uw
            privacyrechten en hoe de wet u beschermt.
          </p>
          <p className="mb-4">
            We gebruiken uw persoonlijke gegevens om de Service te leveren en te
            verbeteren. Door de Service te gebruiken, stemt u in met de
            verzameling en het gebruik van informatie in overeenstemming met dit
            Privacybeleid. Dit Privacybeleid is opgesteld met behulp van de
            Privacybeleid-generator.
          </p>
          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Interpretatie
          </h2>
          <p className="mb-4">
            De woorden waarvan de eerste letter is gekapitaliseerd, hebben
            betekenissen zoals gedefinieerd onder de volgende voorwaarden. De
            volgende definities hebben dezelfde betekenis, ongeacht of ze in
            enkelvoud of meervoud voorkomen.
          </p>
          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Definities:
          </h2>
          <ul className="list-disc pl-6">
            <li className="mb-3">Voor de doeleinden van dit Privacybeleid:</li>
            <li className="mb-3">
              Account betekent een uniek account dat voor u is aangemaakt om
              toegang te krijgen tot onze Service of delen van onze Service.
            </li>
            <li className="mb-3">
              Affiliate betekent een entiteit die gecontroleerd wordt door een
              partij, die controle heeft over een partij, of die onder
              gemeenschappelijke controle valt met een partij, waarbij
              "controle" betekent dat er 50% of meer eigendom is van de
              aandelen, aandelenbelang of andere effecten die stemrecht hebben
              voor de verkiezing van directeuren of andere beheersautoriteit.
            </li>
            <li className="mb-3">
              Applicatie verwijst naar ListTrackr, het softwareprogramma
              geleverd door het Bedrijf.
            </li>
            <li className="mb-3">
              Bedrijf (aangeduid als "het Bedrijf", "Wij", "Ons" of "Onze" in
              deze Overeenkomst) verwijst naar ListTrackr.
            </li>
            <li className="mb-3">
              Cookies zijn kleine bestanden die door een website op uw computer,
              mobiele apparaat of een ander apparaat worden geplaatst en die de
              details van uw browsegeschiedenis op die website bevatten, naast
              vele andere gebruiken.
            </li>
            <li className="mb-3">Land verwijst naar: Nederland</li>
            <li className="mb-3">
              Apparaat betekent elk apparaat dat toegang kan krijgen tot de
              Service, zoals een computer, een mobiele telefoon of een digitaal
              tablet.
            </li>
            <li className="mb-3">
              Persoonlijke gegevens zijn alle informatie die betrekking heeft op
              een geïdentificeerde of identificeerbare individuele persoon.
            </li>
            <li className="mb-3">
              Service verwijst naar de Applicatie of de Website of beide.
            </li>
            <li className="mb-3">
              Dienstverlener betekent een natuurlijke of rechtspersoon die de
              gegevens namens het Bedrijf verwerkt. Het verwijst naar derde
              partijen of personen die door het Bedrijf zijn ingehuurd om de
              Service te faciliteren, de Service namens het Bedrijf te verlenen,
              diensten uit te voeren die verband houden met de Service of het
              Bedrijf te helpen bij het analyseren van hoe de Service wordt
              gebruikt.
            </li>
            <li className="mb-3">
              Dienst van derden voor sociale media verwijst naar een website of
              een sociaal netwerkwebsite waarlangs een Gebruiker kan inloggen of
              een account kan aanmaken om de Service te gebruiken.
            </li>
            <li className="mb-3">
              Gebruiksgegevens verwijst naar gegevens die automatisch worden
              verzameld, gegenereerd door het gebruik van de Service of
              afkomstig van de infrastructuur van de Service zelf (bijvoorbeeld
              de duur van een paginabezoek).
            </li>
            <li className="mb-3">
              Website verwijst naar ListTrackr, bereikbaar via
              https://listtrackr.nl/
            </li>
            <li className="mb-3">
              U betekent de persoon die toegang heeft tot of gebruikmaakt van de
              Service, of het bedrijf of andere juridische entiteit namens wie
              deze persoon de Service gebruikt of toegang heeft, indien van
              toepassing.
            </li>
          </ul>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Verzameling en gebruik van uw persoonlijke gegevens
          </h2>
          <p className="mb-4">Soorten gegevens die worden verzameld</p>
          <ul className="list-disc pl-6">
            <li className="mb-3">
              <b>Persoonlijke gegevens</b> Terwijl u onze Service gebruikt,
              kunnen wij u vragen ons bepaalde persoonlijk identificeerbare
              informatie te verstrekken die kan worden gebruikt om contact met u
              op te nemen of u te identificeren. Persoonlijk identificeerbare
              informatie kan onder meer omvatten:
              <p className="ml-3 mt-2">- E-mailadres</p>
              <p className="ml-3 mt-2">- Gebruiksgegevens</p>
            </li>
          </ul>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Gebruiksgegevens
          </h2>
          <p className="mb-4">
            Gebruiksgegevens worden automatisch verzameld bij het gebruik van de
            Service.
          </p>
          <p className="mb-4">
            Gebruiksgegevens kunnen informatie bevatten zoals het IP-adres van
            uw apparaat (bijvoorbeeld IP-adres), type browser, browser-versie,
            de pagina's van onze Service die u bezoekt, de tijd en datum van uw
            bezoek, de tijd die u op die pagina's doorbrengt, unieke
            apparaatidentificatoren en andere diagnostische gegevens.
          </p>
          <p className="mb-4">
            Wanneer u toegang krijgt tot de Service via een mobiel apparaat,
            kunnen wij bepaalde informatie automatisch verzamelen, waaronder,
            maar niet beperkt tot, het type mobiel apparaat dat u gebruikt, de
            unieke ID van uw mobiele apparaat, het IP-adres van uw mobiele
            apparaat, uw mobiele besturingssysteem, het type mobiele
            internetbrowser dat u gebruikt, unieke apparaatidentificatoren en
            andere diagnostische gegevens.
          </p>
          <p className="mb-4">
            Wij kunnen ook informatie verzamelen die uw browser verstuurt
            wanneer u onze Service bezoekt of wanneer u toegang krijgt tot de
            Service via een mobiel apparaat.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Informatie van diensten van derden voor sociale media
          </h2>
          <p className="mb-4">
            Het Bedrijf staat u toe een account aan te maken en in te loggen om
            de Service te gebruiken via de volgende diensten van derden voor
            sociale media:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-3">Google</li>
            <li className="mb-3">Github</li>
          </ul>
          <p className="mb-4">
            Als u besluit zich te registreren via of ons anderszins toegang te
            verlenen tot een dienst van derden voor sociale media, kunnen wij
            persoonlijke gegevens verzamelen die al zijn gekoppeld aan uw
            account bij die dienst van derden voor sociale media, zoals uw naam
            en uw e-mailadres die aan dat account is gekoppeld.
          </p>
          <p className="mb-4">
            U heeft ook de mogelijkheid om aanvullende informatie te delen met
            het Bedrijf via uw account bij een dienst van derden voor sociale
            media. Als u ervoor kiest om dergelijke informatie en persoonlijke
            gegevens te verstrekken, bij registratie of anderszins, geeft u het
            Bedrijf toestemming om deze te gebruiken, te delen en op te slaan op
            een manier die consistent is met dit Privacybeleid.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Trackingtechnologieën en cookies
          </h2>
          <p className="mb-4">
            Wij gebruiken cookies en vergelijkbare trackingtechnologieën om de
            activiteit op onze Service te volgen en bepaalde informatie op te
            slaan. Gebruikte trackingtechnologieën zijn onder meer bakens, tags
            en scripts om informatie te verzamelen en te volgen en om onze
            Service te verbeteren en te analyseren. De technologieën die wij
            gebruiken, kunnen het volgende omvatten:
          </p>
          <p className="mb-4">
            Een cookie is een klein bestand dat op uw apparaat wordt geplaatst.
            U kunt uw browser instrueren om alle cookies te weigeren of aan te
            geven wanneer een cookie wordt verzonden. Als u echter geen cookies
            accepteert, kunt u mogelijk geen gebruik maken van bepaalde delen
            van onze Service. Tenzij u uw browserinstelling heeft aangepast
            zodat deze cookies weigert, kan onze Service cookies gebruiken.
          </p>
          <p className="mb-4">
            Cookies kunnen "blijvende" of "sessie" cookies zijn. Blijvende
            cookies blijven op uw persoonlijke computer of mobiele apparaat
            staan wanneer u offline gaat, terwijl sessiecookies worden
            verwijderd zodra u uw webbrowser sluit.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Gebruik van uw persoonlijke gegevens
          </h2>
          <p className="mb-4">
            Het Bedrijf kan persoonlijke gegevens gebruiken voor de volgende
            doeleinden:
          </p>
          <p className="mb-4">
            <b>Om onze Service te leveren en te onderhouden</b>, inclusief het
            controleren van het gebruik van onze Service.
          </p>
          <p className="mb-4">
            <b>Om uw Account te beheren</b>: om uw registratie als gebruiker van
            de Service te beheren. De persoonlijke gegevens die u verstrekt,
            geven u toegang tot verschillende functionaliteiten van de Service
            die voor u beschikbaar zijn als geregistreerde gebruiker.
          </p>
          <p className="mb-4">
            <b>Voor de uitvoering van een overeenkomst</b>: de ontwikkeling,
            naleving en uitvoering van de aankoopovereenkomst voor de producten,
            items of diensten die u heeft gekocht of van enige andere
            overeenkomst met ons via de Service
          </p>
          <p className="mb-4">
            <b>Om contact met u op te nemen</b>: om contact met u op te nemen
            via e-mail, telefoongesprekken, sms'jes of andere equivalenten van
            elektronische communicatie, zoals pushmeldingen van mobiele
            applicaties met betrekking tot updates of informatieve communicatie
            over de functionaliteiten, producten of gecontracteerde diensten,
            inclusief de benodigde of redelijke beveiligingsupdates voor de
            implementatie ervan.
          </p>
          <p className="mb-4">
            <b>Om u nieuws</b>, speciale aanbiedingen en algemene informatie te
            bieden over andere goederen, diensten en evenementen die wij
            aanbieden en vergelijkbaar zijn met die waarin u al bent
            geïnteresseerd of hebt gekocht, tenzij u ervoor heeft gekozen om
            dergelijke informatie niet te ontvangen.
          </p>
          <p className="mb-4">
            <b>Om uw verzoeken te beheren</b>: om uw verzoeken aan ons te
            beheren en af te handelen.
          </p>
          <p className="mb-4">
            <b>Voor andere doeleinden</b>: we kunnen uw informatie voor andere
            doeleinden gebruiken, zoals gegevensanalyse, identificatie van
            gebruikstrends, beoordeling van de effectiviteit van onze
            promotiecampagnes en evaluatie en verbetering van onze Service,
            producten, diensten, marketing en uw ervaring.
          </p>
          <p className="mb-4">
            <b>Om uw Account te beheren</b>: om uw registratie als gebruiker van
            de Service te beheren. De persoonlijke gegevens die u verstrekt,
            geven u toegang tot verschillende functionaliteiten van de Service
            die voor u beschikbaar zijn als geregistreerde gebruiker.
          </p>
          <p className="mb-4">
            <b>Om uw Account te beheren</b>: om uw registratie als gebruiker van
            de Service te beheren. De persoonlijke gegevens die u verstrekt,
            geven u toegang tot verschillende functionaliteiten van de Service
            die voor u beschikbaar zijn als geregistreerde gebruiker.
          </p>
          <p className="mb-4">
            <b>Om uw Account te beheren</b>: om uw registratie als gebruiker van
            de Service te beheren. De persoonlijke gegevens die u verstrekt,
            geven u toegang tot verschillende functionaliteiten van de Service
            die voor u beschikbaar zijn als geregistreerde gebruiker.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            Bewaring van uw persoonlijke gegevens
          </h2>
          <p className="mb-4">
            Het Bedrijf zal uw persoonlijke gegevens alleen bewaren zolang als
            nodig is voor de doeleinden uiteengezet in dit Privacybeleid. We
            zullen uw persoonlijke gegevens bewaren en gebruiken voor zover dit
            nodig is om te voldoen aan onze wettelijke verplichtingen
            (bijvoorbeeld als we wettelijk verplicht zijn uw gegevens te bewaren
            om te voldoen aan de geldende wetten), geschillen op te lossen en
            onze wettelijke overeenkomsten en beleid te handhaven.
          </p>
          <p className="mb-4">
            Het Bedrijf zal ook gebruiksgegevens bewaren voor interne
            analysedoeleinden. Gebruiksgegevens worden over het algemeen
            gedurende een kortere periode bewaard, behalve wanneer deze gegevens
            worden gebruikt om de beveiliging te versterken of de
            functionaliteit van onze Service te verbeteren, of wanneer wij
            wettelijk verplicht zijn deze gegevens voor langere tijd te bewaren.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
