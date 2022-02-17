export default
{
    
    Questions: 
    [
        {
            "question": "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?",
            "answer": "Das WWW vermittelte für außenstende keine gute Evolvierbarkeit (Welche allerdings da war). Desweiteren, hat das Programmkomitee der weltgrößten Hypertext Konferenz, das Konzepft von Tim Berners Lee als Rückschritt des derzeitige Forschungsstands anerkannt wurde. Unteranderem weil Broken Links möglich waren, welches andere Konzepte vermieden. "
        },
        {
            "question": "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?",
            "answer": " Die Skalierbarkeit sowie die Evolvierbarkeit. Desweiteren hat es keine Zentrale Kontrolle und ist offen für jeden, weshalb jeder schnell eine neue Webseite erstellen kann. Zudem wurden weitere Dimensionen hinzugefügt "
        },
        {
            "question": "Was wäre der Preis für die garantierte Verhinderung von “broken links”?",
            "answer": "Zentrale Kontrolle und Geschlossenheit"
        },
        [
            "HTTP-Codes und dessen Bedeutung",
            ["HTTP-Code" ,	"Beschreibung"],
            ["200" ,	"Bedeutet das die Anfrage erfolgreich durchgeführt wurde <br>Alle 2xx Codes bedeuten, das die Anfrage erfolgreich durchgeführt wurde"],
            ["301" ,	"Gibt an, das die angeforderte Ressource nicht mehr under dieser Adresse, sondern unter einer anderen Adresse erreichbar ist. Dabei wird die neue URL ebenfalls mitgeteilt. <br>Alle 3xx Codes, deuten auf Weiterleitungen hin."],
            ["400" ,	"Die gesendete Anfrage war Fehlerhaft. Was genau, ist anhand des Fehler nicht zu beantworten. <br> Alle 4xx Codes, deuten auf Fehler hin. "],
            ["403" ,	"Der Client hat keine Berechtigung auf die Ressource zuzugreifen. <br>Falls sie die nötigen Berechtigungen eigentlich besitzen, kann ein neuladen der Seite und ein löschen des Caches das Problem beheben. Ansonsten muss der Benutzer sich an einen Adminisrator wenden und die Berechtigungen erbitten"]
        ],
        {
            "question": "In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen? ",
            "answer": "Mithilfe einer Get-Anfrage, kann eine Options-Anfrage durchgeführt werden."
        }
    ]

    
}
