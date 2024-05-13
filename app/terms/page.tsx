import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { Metadata } from 'next';
import { exo } from '@/app/components/fonts';

export const metadata: Metadata = {
  title: 'Terms of service',
};

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container min-h-screen py-20">
        <h1
          className={`${exo.className} mb-4 text-xl font-bold text-primary dark:text-white md:text-3xl`}
        >
          OVERZICHT
        </h1>
        <p className="mb-8 text-tertiary">Laatst bijgewerkt: 13 mei 2024</p>

        <div className="text-tertiary">
          <p className="mb-4">
            Deze website wordt beheerd door ListTrackr. Op de hele site
            verwijzen de termen &quot;wij&quot;, &quot;ons&quot; en
            &quot;onze&quot; naar ListTrackr. ListTrackr biedt deze website aan,
            inclusief alle informatie, tools en diensten die beschikbaar zijn op
            deze site, aan u, de gebruiker, onder voorbehoud van uw acceptatie
            van alle voorwaarden, bepalingen, beleidsregels en kennisgevingen
            zoals hier vermeld.
          </p>
          <p className="mb-4">
            Door onze site te bezoeken en/of iets bij ons te kopen, neemt u deel
            aan onze &quot;Service&quot; en stemt u in met de volgende
            voorwaarden en bepalingen (&quot;Algemene Voorwaarden&quot;,
            &quot;Voorwaarden&quot;), inclusief die aanvullende voorwaarden en
            bepalingen en beleidsregels die hierin worden genoemd. Deze Algemene
            Voorwaarden zijn van toepassing op alle gebruikers van de site,
            inclusief maar niet beperkt tot gebruikers die browsers, verkopers,
            klanten, handelaren en/of bijdragers van inhoud zijn.
          </p>
          <p className="mb-4">
            Lees deze Algemene Voorwaarden zorgvuldig door voordat u onze
            website bezoekt of gebruikt. Door toegang te krijgen tot of enig
            deel van de site te gebruiken, stemt u ermee in gebonden te zijn aan
            deze Algemene Voorwaarden. Als u niet akkoord gaat met alle
            voorwaarden en bepalingen van deze overeenkomst, mag u de website
            niet bezoeken of geen diensten gebruiken. Als deze Algemene
            Voorwaarden als een aanbod worden beschouwd, is aanvaarding
            uitdrukkelijk beperkt tot deze Algemene Voorwaarden.
          </p>
          <p className="mb-4">
            Eventuele nieuwe functies of tools die aan de huidige winkel worden
            toegevoegd, zijn ook onderworpen aan de Algemene Voorwaarden. U kunt
            de meest actuele versie van de Algemene Voorwaarden te allen tijde
            op deze pagina bekijken. Wij behouden ons het recht voor om elk deel
            van deze Algemene Voorwaarden te updaten, te wijzigen of te
            vervangen door updates en/of wijzigingen op onze website te
            plaatsen. Het is uw verantwoordelijkheid om deze pagina periodiek te
            controleren op wijzigingen. Uw voortgezet gebruik van of toegang tot
            de website na het plaatsen van eventuele wijzigingen houdt in dat u
            deze wijzigingen accepteert.
          </p>
          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 1 - ALGEMENE VOORWAARDEN
          </h2>
          <p className="mb-4">
            Door akkoord te gaan met deze Algemene Voorwaarden, verklaart u dat
            u ten minste de meerderjarige leeftijd heeft in uw staat of
            provincie van verblijf, of dat u de meerderjarige leeftijd heeft in
            uw staat of provincie van verblijf en dat u ons uw toestemming heeft
            gegeven om een van uw minderjarige afhankelijken deze site te laten
            gebruiken.
          </p>
          <p className="mb-4">
            U mag onze producten niet gebruiken voor een onwettig of
            ongeoorloofd doel, noch mag u in het gebruik van de dienst enige
            wetten overtreden in uw rechtsgebied (inclusief maar niet beperkt
            tot auteursrechtwetten).
          </p>
          <p className="mb-4">
            U mag geen wormen of virussen verzenden of enige code van
            destructieve aard verzenden.
          </p>
          <p className="mb-4">
            Een schending of overtreding van een van de Voorwaarden zal
            resulteren in een onmiddellijke beëindiging van uw diensten.
          </p>
          <p className="mb-4">
            Wij behouden ons het recht voor om service te weigeren aan wie dan
            ook, om welke reden dan ook, op elk moment.
          </p>
          <p className="mb-4">
            U begrijpt dat uw inhoud (met uitzondering van
            creditcardinformatie), ongecodeerd kan worden overgedragen en (a)
            over verschillende netwerken kan worden verzonden; en (b) kan worden
            gewijzigd om te voldoen aan technische vereisten van aansluitende
            netwerken of apparaten. Creditcardinformatie wordt altijd
            versleuteld tijdens de overdracht over netwerken.
          </p>
          <p className="mb-4">
            U stemt ermee in om geen enkel deel van de Dienst, het gebruik van
            de Dienst, of de toegang tot de Dienst of enig contact op de website
            waardoor de dienst wordt geleverd, te reproduceren, dupliceren,
            kopiëren, verkopen, doorverkopen of exploiteren zonder
            uitdrukkelijke schriftelijke toestemming van ons.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 2 - JUISTHEID, VOLLEDIGHEID EN TIJDIGHEID VAN INFORMATIE
          </h2>
          <p className="mb-4">
            Wij zijn niet verantwoordelijk als de informatie die beschikbaar
            wordt gesteld op deze site niet nauwkeurig, volledig of actueel is.
            Het materiaal op deze site is uitsluitend bedoeld voor algemene
            informatie en mag niet worden vertrouwd of gebruikt als enige basis
            voor het nemen van beslissingen zonder primaire, nauwkeurigere,
            completere of actuelere bronnen van informatie te raadplegen. Het
            vertrouwen op materiaal op deze site is op eigen risico.
          </p>
          <p className="mb-4">
            Deze site kan bepaalde historische informatie bevatten. Historische
            informatie is per definitie niet actueel en wordt uitsluitend ter
            referentie verstrekt. We behouden ons het recht voor om de inhoud
            van deze site op elk moment te wijzigen, maar we hebben geen
            verplichting om enige informatie op onze site bij te werken. U stemt
            ermee in dat het uw verantwoordelijkheid is om wijzigingen op onze
            site te volgen.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 3 - WIJZIGINGEN IN DE DIENST EN PRIJZEN
          </h2>
          <p className="mb-4">
            Prijzen voor onze producten kunnen zonder voorafgaande kennisgeving
            worden gewijzigd.
          </p>
          <p className="mb-4">
            We behouden ons het recht voor om op elk moment de Service (of een
            deel of inhoud daarvan) te wijzigen of stop te zetten zonder
            kennisgeving op elk moment.
          </p>
          <p className="mb-4">
            Wij zijn niet aansprakelijk jegens u of een derde partij voor enige
            wijziging, prijswijziging, opschorting of stopzetting van de Dienst.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 4 - PRODUCTEN OF DIENSTEN (indien van toepassing)
          </h2>
          <p className="mb-4">
            We behouden ons het recht voor om de hoeveelheden van producten of
            diensten die wij aanbieden te beperken. Alle beschrijvingen van
            producten of productprijzen kunnen te allen tijde zonder
            kennisgeving worden gewijzigd, naar eigen goeddunken van ons. We
            behouden ons het recht voor om op elk moment een product stop te
            zetten. Elk aanbod voor een product of dienst dat op deze site wordt
            gedaan, is nietig waar verboden.
          </p>
          <p className="mb-4">
            Wij garanderen niet dat de kwaliteit van producten, diensten,
            informatie of ander materiaal dat door u is aangeschaft of
            verkregen, aan uw verwachtingen zal voldoen, of dat eventuele fouten
            in de Service zullen worden gecorrigeerd.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 5 - JUISTHEID VAN FACTURERING EN ACCOUNTINFORMATIE
          </h2>
          <p className="mb-4">
            We behouden ons het recht voor om een bestelling die u bij ons
            plaatst te weigeren. We kunnen, naar eigen goeddunken, de
            hoeveelheden die per persoon, per huishouden of per bestelling zijn
            gekocht, beperken of annuleren. Deze beperkingen kunnen bestellingen
            omvatten die zijn geplaatst door of onder dezelfde klantaccount,
            dezelfde creditcard en/of bestellingen die hetzelfde factuur- en/of
            verzendadres gebruiken. In het geval dat we een wijziging aanbrengen
            in een bestelling of een bestelling annuleren, kunnen we proberen u
            hiervan op de hoogte te stellen door contact met u op te nemen via
            het e-mailadres en/of het factuuradres/telefoonnummer dat is
            opgegeven op het moment dat de bestelling is geplaatst. We behouden
            ons het recht voor om bestellingen te beperken of te verbieden die
            naar ons eigen oordeel lijken te zijn geplaatst door dealers,
            wederverkopers of distributeurs.
          </p>
          <p className="mb-4">
            U stemt ermee in om actuele, volledige en accurate aankoop- en
            accountinformatie te verstrekken voor alle aankopen die zijn gedaan
            in onze winkel. U stemt ermee in om uw account en andere informatie,
            inclusief uw e-mailadres en creditcardnummers en vervaldatums,
            tijdig bij te werken zodat we uw transacties kunnen voltooien en
            contact met u kunnen opnemen indien nodig.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 6 - OPTIONELE GEREEDSCHAPPEN
          </h2>
          <p className="mb-4">
            We kunnen u toegang bieden tot tools van derden waarop we geen
            toezicht houden, noch controle over hebben, noch input in hebben.
          </p>
          <p className="mb-4">
            U erkent en stemt ermee in dat wij toegang bieden tot dergelijke
            tools &quot;zoals ze zijn&quot; en &quot;zoals beschikbaar&quot;
            zonder enige garanties, voorstellingen of voorwaarden van welke aard
            dan ook en zonder enige goedkeuring. We zijn op geen enkele manier
            aansprakelijk voor enige vorm van aansprakelijkheid die voortvloeit
            uit of verband houdt met uw gebruik van optionele tools van derden.
          </p>
          <p className="mb-4">
            Het gebruik door u van de optionele tools die via de site worden
            aangeboden, is volledig op eigen risico en discretie, en u moet
            ervoor zorgen dat u bekend bent met en instemt met de voorwaarden
            waarop de tools worden geleverd door de relevante derde partij(en).
          </p>
          <p className="mb-4">
            We kunnen ook in de toekomst nieuwe diensten en/of functies
            aanbieden via de website (inclusief de release van nieuwe tools en
            bronnen). Dergelijke nieuwe functies en/of diensten zijn ook
            onderworpen aan deze Algemene Voorwaarden.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 7 - OPTIONELE GEREEDSCHAPPEN
          </h2>
          <p className="mb-4">
            Bepaalde inhoud, producten en diensten die beschikbaar zijn via onze
            Dienst, kunnen materialen bevatten van derden.
          </p>
          <p className="mb-4">
            Links van derden op deze site kunnen u doorverwijzen naar websites
            van derden die niet aan ons zijn gelieerd. We zijn niet
            verantwoordelijk voor het onderzoeken of evalueren van de inhoud of
            nauwkeurigheid en we geven geen garantie en zullen geen
            aansprakelijkheid of verantwoordelijkheid hebben voor materialen of
            websites van derden, of voor andere materialen, producten of
            diensten van derden.
          </p>
          <p className="mb-4">
            We zijn niet aansprakelijk voor enige schade of schade veroorzaakt
            door of in verband met aankopen of het gebruik van goederen,
            diensten, bronnen, inhoud of andere transacties die zijn gedaan in
            verband met websites van derden. Lees zorgvuldig het beleid en de
            praktijken van derden door en zorg ervoor dat u deze begrijpt
            voordat u deelneemt aan een transactie. Klachten, claims, bezwaren
            of vragen met betrekking tot producten van derden moeten worden
            gericht aan de derde partij.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 8 - GEBRUIKERSREACTIES, FEEDBACK EN ANDERE INZENDINGEN
          </h2>
          <p className="mb-4">
            Als we hierom vragen, stuurt u bepaalde specifieke inzendingen in
            (bijvoorbeeld wedstrijdinzendingen) of zonder een verzoek van ons
            stuurt u creatieve ideeën, suggesties, voorstellen, plannen of
            andere materialen, online, per e-mail, per post of anderszins
            (gezamenlijk &quot;opmerkingen&quot;), stemt u ermee in dat wij te
            allen tijde en zonder beperking opmerkingen die u naar ons stuurt,
            kunnen bewerken, kopiëren, publiceren, verspreiden, vertalen en
            anderszins gebruiken in elk medium. We zijn niet verplicht (1) om
            opmerkingen vertrouwelijk te houden; (2) om compensatie te betalen
            voor opmerkingen; of (3) om te reageren op opmerkingen. We kunnen,
            maar zijn niet verplicht om inhoud te controleren, bewerken of
            verwijderen waarvan wij naar eigen goeddunken bepalen dat deze
            onwettig, beledigend, bedreigend, lasterlijk, smadelijk,
            pornografisch, obsceen of anderszins verwerpelijk is of in strijd is
            met het intellectueel eigendom van een partij of deze Algemene
            Voorwaarden.
          </p>
          <p className="mb-4">
            U stemt ermee in dat uw opmerkingen geen enkel recht van derden
            zullen schenden, inclusief auteursrechten, handelsmerken, privacy,
            persoonlijkheid of andere persoonlijke of eigendomsrechten. U stemt
            er verder mee in dat uw opmerkingen geen lasterlijk of anderszins
            onwettig, misbruik of obsceen materiaal zullen bevatten, of enige
            computervirus of andere malware die op enigerlei wijze de werking
            van de Service of gerelateerde website kan beïnvloeden. U mag geen
            vals e-mailadres gebruiken, zich voordoen als iemand anders dan
            uzelf, of ons of derden anderszins misleiden over de oorsprong van
            enige opmerkingen. U bent als enige verantwoordelijk voor de
            opmerkingen die u maakt en hun nauwkeurigheid. We aanvaarden geen
            verantwoordelijkheid en nemen geen aansprakelijkheid voor enige
            opmerkingen geplaatst door u of een derde partij.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 9 - PERSOONLIJKE INFORMATIE
          </h2>
          <p className="mb-4">
            Uw verstrekking van persoonlijke informatie via de winkel valt onder
            ons Privacybeleid. Om ons Privacybeleid te bekijken, zie{' '}
            <a href="/privacy" target="_blank" className="underline">
              Privacy policy
            </a>
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 10 - FOUTEN, ONNAUWKEURIGHEDEN EN OMISSIES
          </h2>
          <p className="mb-4">
            Af en toe kan er informatie op onze site of in de Dienst staan die
            typografische fouten, onnauwkeurigheden of weglatingen bevat die
            betrekking kunnen hebben op productbeschrijvingen, prijzen,
            promoties en aanbiedingen. We behouden ons het recht voor om
            eventuele fouten, onnauwkeurigheden of weglatingen te corrigeren en
            om informatie te wijzigen of bij te werken of bestellingen te
            annuleren als enige informatie in de Dienst of op een gerelateerde
            website onnauwkeurig is op elk moment zonder voorafgaande
            kennisgeving (inclusief nadat u uw bestelling heeft geplaatst).
          </p>
          <p className="mb-4">
            We zijn niet verplicht om informatie in de Dienst of op een
            gerelateerde website bij te werken, te wijzigen of te
            verduidelijken, inclusief maar niet beperkt tot prijsinformatie,
            behalve zoals vereist door de wet. Geen enkele gespecificeerde
            update of vernieuwingsdatum toegepast in de Dienst of op een
            gerelateerde website, moet worden geïnterpreteerd als een indicatie
            dat alle informatie in de Dienst of op een gerelateerde website is
            gewijzigd of bijgewerkt.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 11 - VERBODEN GEBRUIK
          </h2>
          <p className="mb-4">
            Naast andere verboden zoals uiteengezet in de Algemene Voorwaarden,
            is het u verboden om de site of de inhoud ervan te gebruiken:
          </p>
          <p className="mb-4">
            (a) voor een onwettig doel; (b) anderen te vragen of aan te moedigen
            om deel te nemen aan onwettige handelingen; (c) om te handelen in
            strijd met internationale, federale, provinciale of staatsregels,
            wetten of lokale verordeningen; (d) om inbreuk te maken op onze
            intellectuele eigendomsrechten of de intellectuele eigendomsrechten
            van anderen; (e) om te pesten, misbruik te maken, beledigen,
            schaden, belasteren, lasteren, kleineren, intimideren of
            discrimineren op basis van geslacht, seksuele geaardheid, religie,
            etniciteit, ras, leeftijd, nationale afkomst of handicap; (f) om
            valse of misleidende informatie te verstrekken; (g) om virussen of
            andere schadelijke code te uploaden of verzenden die op enigerlei
            wijze de functionaliteit of werking van de Dienst of van een
            gerelateerde website, andere websites of het internet kan
            beïnvloeden; (h) om persoonlijke informatie van anderen te
            verzamelen of te volgen; (i) om te spammen, te vissen, te farmen,
            voorwendsel te maken, te spinnen, te kruipen of te schrapen; (j)
            voor een obsceen of immoreel doel; of (k) om de
            beveiligingskenmerken van de Dienst of een gerelateerde website,
            andere websites of het internet te omzeilen of te verstoren. We
            behouden ons het recht voor om uw gebruik van de Dienst of een
            gerelateerde website te beëindigen voor het schenden van een van de
            verboden gebruiken.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 12 - AFSTAND VAN GARANTIES; BEPERKING VAN AANSPRAKELIJKHEID
          </h2>
          <p className="mb-4">
            We garanderen niet, vertegenwoordigen of garanderen dat uw gebruik
            van onze service ononderbroken, tijdig, veilig of foutloos zal zijn.
          </p>
          <p className="mb-4">
            We garanderen niet dat de resultaten die kunnen worden verkregen uit
            het gebruik van de service nauwkeurig of betrouwbaar zullen zijn.
          </p>
          <p className="mb-4">
            U stemt ermee in dat wij van tijd tot tijd de service voor
            onbepaalde tijd kunnen verwijderen of de service op elk moment,
            zonder kennisgeving aan u, kunnen annuleren.
          </p>
          <p className="mb-4">
            U stemt ermee in dat uw gebruik van of het niet kunnen gebruiken van
            de service op eigen risico is. De service en alle producten en
            diensten die via de service aan u worden geleverd, worden (behalve
            zoals uitdrukkelijk door ons vermeld) geleverd &quot;zoals ze
            zijn&quot; en &quot;zoals beschikbaar&quot; voor uw gebruik, zonder
            enige verklaring, garanties of voorwaarden van welke aard dan ook,
            hetzij uitdrukkelijk of impliciet, inclusief alle impliciete
            garanties of voorwaarden van verkoopbaarheid, verhandelbaarheid voor
            een bepaald doel, duurzaamheid, titel en niet-inbreuk.
          </p>
          <p className="mb-4">
            In geen geval zullen ListTrackr, onze directeuren, functionarissen,
            werknemers, gelieerde ondernemingen, agenten, aannemers, stagiairs,
            leveranciers, dienstverleners of licentiegevers aansprakelijk zijn
            voor letsel, verlies, claim of enige directe, indirecte,
            incidentele, bestraffende, speciale of gevolgschade van welke aard
            dan ook, inclusief maar niet beperkt tot gederfde winst, gederfde
            inkomsten, gederfde besparingen, verlies van gegevens,
            vervangingskosten of enige gelijkaardige schade, hetzij gebaseerd op
            een contract, onrechtmatige daad (inclusief nalatigheid), strikte
            aansprakelijkheid of anderszins, die voortvloeit uit uw gebruik van
            een van de service of producten die zijn verworven via de service,
            of voor enige andere claim die op enigerlei wijze verband houdt met
            uw gebruik van de service of een product, inclusief maar niet
            beperkt tot eventuele fouten of weglatingen in enige inhoud, of enig
            verlies of schade van welke aard dan ook die is opgelopen als gevolg
            van het gebruik van de service of inhoud (of product) die is gepost,
            verzonden of anderszins beschikbaar is gesteld via de service, zelfs
            indien op de hoogte is gesteld van hun mogelijkheid. Omdat sommige
            staten of rechtsgebieden de uitsluiting of beperking van
            aansprakelijkheid voor gevolgschade of incidentele schade niet
            toestaan, is onze aansprakelijkheid in dergelijke staten of
            rechtsgebieden beperkt tot de maximale mate die wettelijk is
            toegestaan.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 13 - VRIJWARING
          </h2>
          <p className="mb-4">
            U stemt ermee in om ListTrackr en onze moedermaatschappij,
            dochterondernemingen, gelieerde ondernemingen, partners,
            functionarissen, directeuren, agenten, aannemers, licentiegevers,
            dienstverleners, onderaannemers, leveranciers, stagiairs en
            werknemers te vrijwaren van elke claim of eis, inclusief redelijke
            advocatenkosten, gemaakt door een derde partij als gevolg van of
            voortvloeiend uit uw schending van deze Algemene Voorwaarden of de
            documenten die zij door verwijzing in de geïncorporeerde, of uw
            schending van enige wet of de rechten van een derde partij.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 14 - SCHEIDBAARHEID
          </h2>
          <p className="mb-4">
            In het geval dat een bepaling van deze Algemene Voorwaarden als
            onwettig, nietig of niet-afdwingbaar wordt beschouwd, is een
            dergelijke bepaling echter van toepassing in de mate van de
            toepasselijke wetgeving, en wordt het nietig worden van dergelijke
            bepaling niet van invloed op de geldigheid en afdwingbaarheid van de
            overige bepalingen.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 15 - BEËINDIGING
          </h2>
          <p className="mb-4">
            De verplichtingen en verantwoordelijkheden van de partijen die vóór
            de beëindigingsdatum zijn ontstaan, blijven na beëindiging van deze
            overeenkomst voor alle doeleinden van kracht.
          </p>
          <p className="mb-4">
            Deze Algemene Voorwaarden zijn van kracht tenzij en totdat deze door
            u of ons worden beëindigd. U kunt deze Algemene Voorwaarden op elk
            moment beëindigen door ons te laten weten dat u onze Services niet
            langer wenst te gebruiken, of wanneer u onze site niet langer
            gebruikt.
          </p>
          <p className="mb-4">
            Als naar ons oordeel u faalt, of indien wij vermoeden dat u heeft
            nagelaten om te voldoen aan enige voorwaarde of bepaling van deze
            Algemene Voorwaarden, kunnen wij deze overeenkomst op elk moment
            zonder kennisgeving beëindigen en blijft u aansprakelijk voor alle
            bedragen die verschuldigd zijn tot en met de datum van beëindiging;
            en/of dienovereenkomstig kan u de toegang tot onze Services (of een
            deel daarvan) ontzegd worden.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 16 - VOLLEDIGE OVEREENKOMST
          </h2>
          <p className="mb-4">
            Het niet uitoefenen of handhaven door ons van een recht of bepaling
            van deze Algemene Voorwaarden vormt geen verklaring van afstand van
            dat recht of die bepaling.
          </p>
          <p className="mb-4">
            Deze Algemene Voorwaarden en alle beleidsregels of bedieningsregels
            die door ons op deze site zijn geplaatst of met betrekking tot de
            Service vormen de volledige overeenkomst en afspraak tussen u en ons
            en regelen uw gebruik van de Service, en vervangen alle eerdere of
            gelijktijdige afspraken, mededelingen en voorstellen, mondeling of
            schriftelijk, tussen u en ons (inclusief, maar niet beperkt tot,
            eventuele eerdere versies van de Algemene Voorwaarden).
          </p>
          <p className="mb-4">
            Elke ambiguïteit bij de interpretatie van deze Algemene Voorwaarden
            mag niet worden geïnterpreteerd ten nadele van de opstellende
            partij.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 17 - TOEPASSELIJK RECHT
          </h2>
          <p className="mb-4">
            Deze Algemene Voorwaarden en eventuele aparte overeenkomsten waarbij
            wij u Services verlenen, worden beheerst door en geïnterpreteerd in
            overeenstemming met de wetten van Nederland.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 18 - WIJZIGINGEN IN DE ALGEMENE VOORWAARDEN
          </h2>
          <p className="mb-4">
            U kunt de meest recente versie van de Algemene Voorwaarden op elk
            gewenst moment op deze pagina bekijken.
          </p>
          <p className="mb-4">
            We behouden ons het recht voor om naar eigen goeddunken een deel van
            deze Algemene Voorwaarden bij te werken, te wijzigen of te vervangen
            door updates en wijzigingen te plaatsen op onze website. Het is uw
            verantwoordelijkheid om onze website regelmatig te controleren op
            wijzigingen. Uw voortgezette gebruik van of toegang tot onze website
            of de Service na het plaatsen van eventuele wijzigingen in deze
            Algemene Voorwaarden vormt acceptatie van die wijzigingen.
          </p>

          <h2 className={`${exo.className} mb-2 mt-6 text-xl font-bold`}>
            SECTIE 19 - CONTACTGEGEVENS
          </h2>
          <p className="mb-4">
            U kunt de meest recente versie van de Algemene Voorwaarden op elk
            gewenst moment op deze pagina bekijken.
          </p>
          <p className="mb-4">
            Vragen over de Algemene Voorwaarden moeten naar ons worden gestuurd
            via roeljanssen2002@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
