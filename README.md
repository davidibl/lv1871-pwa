# lv1871-pwa
Ein Progressive Web App Dojo


# Schritt 1 - Entwicklungsumgebung

Sucht euch einen Ordner in dem alles stattfinden soll, öffnet eine Git Bash (rechtsklick -> Git Bash here)

Dann folgendes Repository klonen:
**https://github.com/davidibl/lv1871-pwa.git**

*git clone https://github.com/davidibl/lv1871-pwa.git*

In diesem Repository findet ihr auch dieses Readme.

# Schritt 2 - CLI installieren und Angular Projekt erzeugen

- CLI installieren: *npm install -g @angular/cli*
- In der Umgebungsvariablen Path eures Kontos folgenden Eintrag hinzufügen: 'C:\Users\%USERNAME%\AppDate\Roaming\npm'
- In den Ordner des Projektes wechseln (lv1871-pwa)
- Nun kann die Web App gestartet werden *ng serve --port xxxx* (Port mit Glück einen freien wählen)
- Und zuletzt könnt ihr die Web App betrachten: *localhost:port*

-> Schritt 2 geschafft

# Schritt 3 - Eine PWA erzeugen

Der erste Schritt zur Erzeugung einer PWA ist es ein manifest.json hinzuzufügen.
Sucht im Internet ein Beispiel und sorgt dafür dass Chrome in den Dev-Tools unter *Appplication -> Manifest* unsere Webapp als PWA registriert.

Das war je nachdem was man gefunden hat im Netz trivial oder schwierig. So oder so ist eigentlich nicht viel zu tun...
- Einfach eine manifest.json unter src hinzufügen
- in der index.html registrieren *<link rel="manifest" href="/manifest.json">*
- und ganz wichtig, in der .angular-cli.json Datei angeben: 
*"assets": ["manifest.json","assets"],*

# Schritt 4 - Der ServiceWorker als Herzstück

Die ServiceWorker schaffen Offline Fähigkeit und machen unsere App schnell durch Caching.
Sucht nach einer Möglichkeit Service Worker in unserer Angular CLI App zu akivieren und Offline Fähigkeit für alle seiten herzustellen.

Genau. Einfach den Service Worker installieren und registrieren.
Zum einen installieren:
*npm i @angular/service-worker -S*

Zum anderen in der .angular-cli.json registrieren:
*"serviceWorker":true*

Danach noch ein Prod build:
*ng build --prod*

Und fertig ist ein (unkonfigurierter Service Worker)

Mit Hilfe der Datei ngsw-manifest.json kann dieser dann so konfiguriert werden, dass alle Routes gecached werden. Wenn wir unsere App nun mit *ng serve --prod* starten sehen wir in den Chrome Dev Tools dass der Service Worker registriert wird.

Man kann nun in den Chrome Dev Tools unter Network den Offline Modus aktivieren und die App wird dennoch geladen :)

#Schritt 5 - Die App Shell

Sucht im Internet nach dem Begriff AppShell uim PWA Kontext. Was ist das? Und wie wirds gemacht?


Die AppShell soll ein Teil der Website sein, der schon vor dem Bootstrapping dargestellt wird.
Hierfür implementieren wir Teile des Layouts und des CSS Codes direkt in unserer inde.html.
Der Aufmerksame Betrachter wird bemerken dass der Start der App nun auf einmal zumindest deutlich schneller aussieht.

Natürlich lässt sich die Geschwindigkeit von Remoteservices oder ähnlichem nicht drastisch erhöhen. Aber die Wahrnehmung des Nutzers lässt sich beeinflussen.