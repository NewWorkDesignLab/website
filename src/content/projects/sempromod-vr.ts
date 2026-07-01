import type { Project } from "../types";

export const sempromodVr: Project = {
  slug: "sempromod-vr",
  title: "SemProMod-VR",
  tagline: {
    de: "Schulung des Prozessverständnisses auf Basis semantischer Zusammenhangsmodelle für Verarbeitungs- und Verpackungsmaschinen.",
    en: "Training process understanding based on semantic correlation models for processing and packaging machines.",
  },
  categories: ["vr"],
  status: "completed",
  cover: "/projects/sempromod-vr/sempromod-vr-1.webp",
  funding: [],
  authors: ["Vincent Schiller"],
  team: ["Vincent Schiller"],
  createdAt: "2022-05-06",
  updatedAt: "2026-06-26",
  partners: [{ key: "fraunhofer-ivv", kind: "partner" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Neues Bedienpersonal muss für die von ihm durchzuführenden Tätigkeiten für die Überwachung, Bedienung und Fehlerbehebung an Verpackungs- und Verarbeitungsanlagen zunächst geschult werden. Zumeist steht jedoch nur ein stark begrenzter Zeitraum für Schulungen im Bereich der Maschinenbedienung zur Verfügung, was oftmals auf Kostendruck und Mangel an Schulungspersonal zurückzuführen ist. Herausfordernd kommt hinzu, dass einzelne Maschinen komplexer Produktionsanlagen häufig nicht zu Schulungszwecken zur Verfügung gestellt werden können, da die laufende Produktion nicht für einen ausreichenden Zeitraum unterbrochen werden kann.",
        en: "New operating staff must first be trained for the tasks they will carry out in monitoring, operating and troubleshooting packaging and processing systems. In most cases, however, only a very limited time is available for training on machine operation — often due to cost pressure and a shortage of training personnel. An additional challenge is that individual machines in complex production lines frequently cannot be made available for training purposes, because ongoing production cannot be interrupted for a sufficient period of time.",
      },
    },
    {
      type: "text",
      text: {
        de: "Die Bayer AG führt daher seit einiger Zeit Schulungen für Bedienpersonal in der Virtuellen Realität (VR) durch. Bisher werden dabei jedoch keine didaktischen Interaktionskonzepte für die Wissensvermittlung in der VR, insbesondere für die Vermittlung von komplexen Prozesszusammenhängen, angewandt. Dies ist vor allem darauf zurückzuführen, dass derartige Konzepte nicht vorhanden sind. Zudem wird bisher nur die Abfolge von Handlungsschritten geschult. Ein freies Explorieren, bei dem ohne reale Konsequenzen die Folgen von Fehlbedienungen (z. B. Einstellung nicht optimaler Betriebsparameter an der Maschine) erlebt werden können, ist demnach aktuell nicht möglich. Der Fokus für die Entwicklung künftiger Schulungen liegt somit auf der nachhaltigen Wissensvermittlung zur Auswahl und anschließenden Einstellung optimaler Prozessparameter für einen zuverlässigen Maschinenbetrieb (z. B. nach einem Produktwechsel), was ausgeprägte Kenntnis der Bedienenden über folgende Aspekte erfordert:",
        en: "Bayer AG has therefore been running training sessions for operating staff in virtual reality (VR) for some time. So far, however, no didactic interaction concepts for conveying knowledge in VR — especially for communicating complex process correlations — have been applied. This is mainly because such concepts do not yet exist. In addition, only the sequence of action steps has been trained so far. Free exploration, in which the consequences of operating errors (e.g. setting non-optimal operating parameters on the machine) can be experienced without real consequences, is therefore currently not possible. The focus for developing future training courses is thus on the lasting transfer of knowledge about selecting and subsequently setting optimal process parameters for reliable machine operation (e.g. after a product change), which requires operators to have a pronounced understanding of the following aspects:",
      },
    },
    {
      type: "list",
      items: [
        {
          de: "die jeweiligen Einstellparameter,",
          en: "the respective setting parameters,",
        },
        {
          de: "ihre Zusammenhänge untereinander,",
          en: "their interrelationships,",
        },
        {
          de: "ihre Korrelationen mit den jeweiligen Eigenschaften der Packgüter und Packstoffe,",
          en: "their correlations with the respective properties of the packaged goods and packaging materials,",
        },
        {
          de: "sowie den Zusammenhängen mit weiteren Umgebungsvariablen.",
          en: "as well as their relationships with further environmental variables.",
        },
      ],
    },
    {
      type: "text",
      text: {
        de: "Im Ergebnis des Projektes ist ein VR-Demonstrator für die Visualisierung und Erklärung komplexer Prozesszusammenhänge eines maschinellen Verarbeitungs-/Verpackungsprozesses verfügbar. Dieser zeigt konkret anhand des Thermoformversuchsstandes am Fraunhofer IVV in Dresden den Einfluss der Einstellparameter Stempelweg, Stempelgeschwindigkeit und Heizertemperatur auf den Versuchsstand selbst und das entstehende Produkt auf. Der Demonstrator ist interaktiv nutzbar und erlaubt somit die praktische Auseinandersetzung mit komplexen Wirkzusammenhängen. Ein ergänzendes Mockup-Video zeigt, wie ein solches System künftig in einen umfassenden Nutzungskontext eingebettet werden kann.",
        en: "As a result of the project, a VR demonstrator for visualising and explaining the complex process correlations of a machine-based processing/packaging process is available. Using the thermoforming test stand at Fraunhofer IVV in Dresden as a concrete example, it shows the influence of the setting parameters stamp travel, stamp speed and heater temperature on the test stand itself and on the resulting product. The demonstrator can be used interactively and therefore allows hands-on engagement with complex cause-and-effect relationships. A supplementary mock-up video shows how such a system could be embedded into a comprehensive context of use in the future.",
      },
    },
    {
      type: "image",
      src: "/projects/sempromod-vr/sempromod-vr-2.webp",
      alt: {
        de: "VR-Szene des Thermoform-Versuchsstandes mit schwebenden Bedien-Slidern für Stempelweg, Stempelgeschwindigkeit und Heiztemperatur sowie den Schaltflächen „Prozess starten“ und „Reset“.",
        en: "VR scene of the thermoforming test stand with floating control sliders for stamp travel, stamp speed and heater temperature, plus “start process” and “reset” buttons.",
      },
      caption: {
        de: "Im Demonstrator stellen Nutzende die Prozessparameter Stempelweg, Stempelgeschwindigkeit und Heiztemperatur über schwebende Slider ein und starten anschließend den Verarbeitungsprozess.",
        en: "In the demonstrator, users set the process parameters stamp travel, stamp speed and heater temperature via floating sliders and then start the forming process.",
      },
    },
    {
      type: "image",
      src: "/projects/sempromod-vr/sempromod-vr-3.webp",
      alt: {
        de: "VR-Szene mit einem Hinweis-Panel, das die Qualität des geformten Bechers bewertet – zu geringe Bodendicke und starke Faltenbildung – neben dem halbtransparent dargestellten Versuchsstand.",
        en: "VR scene with a feedback panel evaluating the quality of the formed cup – insufficient base thickness and strong wrinkling – next to the semi-transparently rendered test stand.",
      },
      caption: {
        de: "Direktes Feedback macht die Folgen der gewählten Einstellungen erlebbar: Hier führen die Parameter zu einer zu dünnen Bodendicke und starker Faltenbildung am Produkt.",
        en: "Direct feedback makes the consequences of the chosen settings tangible: here the parameters result in an insufficient base thickness and strong wrinkling of the product.",
      },
    },
  ],
};
