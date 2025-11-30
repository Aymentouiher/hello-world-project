import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, BookOpen, Calendar, FileText, Award, MessageCircle, Send, Download } from "lucide-react";

const Student = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, from: "Prof. Dupont", text: "Bonjour, n'oubliez pas le devoir pour demain !", time: "10:30" },
    { id: 2, from: "me", text: "Merci professeur, c'est noté !", time: "10:32" },
  ]);

  const schedule = [
    { time: "08:00 - 09:00", subject: "Mathématiques", room: "Salle 201", teacher: "M. Dupont" },
    { time: "09:00 - 10:00", subject: "Français", room: "Salle 105", teacher: "Mme Martin" },
    { time: "10:00 - 11:00", subject: "Histoire", room: "Salle 302", teacher: "M. Bernard" },
  ];

  const grades = [
    { subject: "Mathématiques", grade: "15/20", average: "13.5/20" },
    { subject: "Français", grade: "16/20", average: "14.2/20" },
    { subject: "Histoire", grade: "14/20", average: "13.8/20" },
  ];

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { 
        id: messages.length + 1, 
        from: "me", 
        text: message, 
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) 
      }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Espace Étudiant</h1>
              <Badge variant="secondary" className="mt-1">3ème A</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sophie Martin</span>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                SM
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="chat">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat avec Profs
            </TabsTrigger>
            <TabsTrigger value="documents">Documents Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Moyenne Générale</CardTitle>
                  <Award className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">14.5/20</div>
                  <p className="text-xs text-muted-foreground">+0.5 ce trimestre</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cours Aujourd'hui</CardTitle>
                  <BookOpen className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">Cours programmés</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Devoirs À Rendre</CardTitle>
                  <FileText className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Cette semaine</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Absences</CardTitle>
                  <Calendar className="h-4 w-4 text-info" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Ce trimestre</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>Emploi du Temps - Aujourd'hui</CardTitle>
                  <CardDescription>Mercredi 28 Novembre 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="shrink-0">
                          <p className="text-sm font-medium">{item.time}</p>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.subject}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.room} - {item.teacher}
                          </p>
                        </div>
                        <Badge variant="outline">Présentiel</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Grades */}
              <Card>
                <CardHeader>
                  <CardTitle>Dernières Notes</CardTitle>
                  <CardDescription>Résultats récents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {grades.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{item.subject}</h3>
                          <p className="text-sm text-muted-foreground">
                            Moyenne classe: {item.average}
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-primary">{item.grade}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Chat avec les Professeurs</CardTitle>
                <CardDescription>Posez vos questions à vos professeurs</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[70%] rounded-lg p-3 ${msg.from === "me" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                          {msg.from !== "me" && (
                            <p className="text-xs font-semibold mb-1">{msg.from}</p>
                          )}
                          <p className="text-sm">{msg.text}</p>
                          <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Écrivez votre message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <Button onClick={sendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Demandes de Documents Administratifs</CardTitle>
                <CardDescription>Demandez vos certificats et attestations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Type de document</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>Certificat de scolarité</option>
                    <option>Relevé de notes</option>
                    <option>Attestation d'inscription</option>
                    <option>Autre document</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Motif de la demande</label>
                  <Textarea placeholder="Expliquez pourquoi vous avez besoin de ce document..." />
                </div>
                <Button className="w-full">Envoyer la Demande</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mes Documents</CardTitle>
                <CardDescription>Documents disponibles au téléchargement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Certificat de scolarité 2024", "Relevé de notes T1", "Emploi du temps"].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{doc}</p>
                          <p className="text-xs text-muted-foreground">Généré le {new Date().toLocaleDateString('fr-FR')}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Student;
