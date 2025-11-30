import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, UserCheck, FileEdit, Calendar, Users } from "lucide-react";

const Teacher = () => {
  const myClasses = [
    { id: 1, name: "3ème A", subject: "Mathématiques", students: 28 },
    { id: 2, name: "3ème B", subject: "Mathématiques", students: 25 },
    { id: 3, name: "4ème A", subject: "Mathématiques", students: 30 },
  ];

  const recentGrades = [
    { id: 1, student: "Sophie Martin", class: "3ème A", subject: "Mathématiques", grade: 15, date: "2024-03-15" },
    { id: 2, student: "Lucas Bernard", class: "3ème A", subject: "Mathématiques", grade: 12, date: "2024-03-15" },
    { id: 3, student: "Emma Dubois", class: "3ème B", subject: "Mathématiques", grade: 18, date: "2024-03-14" },
  ];

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
              <h1 className="text-2xl font-bold">Espace Professeur</h1>
              <p className="text-sm text-muted-foreground">Prof. Jean Dupont</p>
            </div>
            <Badge variant="secondary" className="px-4 py-2">Mathématiques</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mes Classes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">83 étudiants au total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours Aujourd'hui</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">2 en cours, 2 à venir</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notes à Saisir</CardTitle>
              <FileEdit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Contrôles en attente</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absences du Jour</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">À vérifier</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="absences" className="space-y-4">
          <TabsList>
            <TabsTrigger value="absences">Absences</TabsTrigger>
            <TabsTrigger value="grades">Notes</TabsTrigger>
            <TabsTrigger value="classes">Mes Classes</TabsTrigger>
          </TabsList>

          {/* Absences Tab */}
          <TabsContent value="absences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Marquer les Absences</CardTitle>
                <CardDescription>Sélectionnez la classe et marquez les absences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="absence-class">Classe</Label>
                    <Select>
                      <SelectTrigger id="absence-class">
                        <SelectValue placeholder="Sélectionner une classe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3a">3ème A</SelectItem>
                        <SelectItem value="3b">3ème B</SelectItem>
                        <SelectItem value="4a">4ème A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="absence-date">Date</Label>
                    <Input id="absence-date" type="date" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">Étudiants de 3ème A</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {["Sophie Martin", "Lucas Bernard", "Emma Dubois", "Thomas Petit", "Léa Moreau"].map((student, i) => (
                      <div key={i} className="flex items-center justify-between p-2 hover:bg-accent rounded">
                        <span>{student}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Absent</Button>
                          <Button size="sm" variant="outline">Retard</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Enregistrer les Absences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Ajouter des Notes</CardTitle>
                <CardDescription>Saisissez les notes pour vos étudiants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="grade-class">Classe</Label>
                    <Select>
                      <SelectTrigger id="grade-class">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3a">3ème A</SelectItem>
                        <SelectItem value="3b">3ème B</SelectItem>
                        <SelectItem value="4a">4ème A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade-type">Type d'évaluation</Label>
                    <Select>
                      <SelectTrigger id="grade-type">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="controle">Contrôle</SelectItem>
                        <SelectItem value="devoir">Devoir</SelectItem>
                        <SelectItem value="examen">Examen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade-date">Date</Label>
                    <Input id="grade-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade-title">Titre de l'évaluation</Label>
                  <Input id="grade-title" placeholder="Ex: Contrôle Chapitre 5" />
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">Saisir les notes (/20)</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {["Sophie Martin", "Lucas Bernard", "Emma Dubois", "Thomas Petit", "Léa Moreau"].map((student, i) => (
                      <div key={i} className="flex items-center justify-between p-2 hover:bg-accent rounded">
                        <span className="flex-1">{student}</span>
                        <Input type="number" min="0" max="20" step="0.5" className="w-20" placeholder="--" />
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Enregistrer les Notes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notes Récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Étudiant</TableHead>
                      <TableHead>Classe</TableHead>
                      <TableHead>Note</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentGrades.map((grade) => (
                      <TableRow key={grade.id}>
                        <TableCell>{grade.student}</TableCell>
                        <TableCell>{grade.class}</TableCell>
                        <TableCell>
                          <Badge variant={grade.grade >= 15 ? "default" : grade.grade >= 10 ? "secondary" : "destructive"}>
                            {grade.grade}/20
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(grade.date).toLocaleDateString('fr-FR')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classes Tab */}
          <TabsContent value="classes" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {myClasses.map((classe) => (
                <Card key={classe.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {classe.name}
                      <Badge variant="secondary">{classe.students} élèves</Badge>
                    </CardTitle>
                    <CardDescription>{classe.subject}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full" size="sm">
                      Voir les étudiants
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      Emploi du temps
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Teacher;
